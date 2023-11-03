import { Item } from "shared";

const HomePage = () => {
  const items: Item[] = [
    { id: 1, qty: 4 },
    { id: 2, qty: 2 },
  ];

  const createCheckoutSession = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items,
          }),
        },
      );
      const data = await response.json();

      if (!response.ok) Promise.reject(data);

      console.log("DATA", data);
      window.location = data.url;
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return <button onClick={createCheckoutSession}>Checkout</button>;
};

export default HomePage;
