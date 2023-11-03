import express from "express";
import Stripe from "stripe";
import * as dotenv from "dotenv";
import cors from "cors";
import items from "./items";
import { Item } from "shared";

dotenv.config();

const app = express();
const port = 3000;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.post(
  "/api/checkout",
  async (req: express.Request, res: express.Response) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
        line_items: req.body.items.map(({ id, qty }: Item) => {
          const item = items.get(id);

          if (item) {
            return {
              price_data: {
                currency: "nok",
                product_data: {
                  name: item.name,
                },
                unit_amount: item.priceInCents,
              },
              quantity: qty,
            };
          }
        }),
      });

      return res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ message: (e as Error).message });
    }
  },
);

app.listen(port, () => {
  console.log(`
  🚀 Server ready at: http://localhost:${port}
  🔓︎ Environments: ${process.env.NODE_ENV}
  💳 Stripe application demo is up and running!🌟`);
});
