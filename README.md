# Stripe Checkout Demo Application 🛍️💳

Welcome to the Stripe Checkout Demo! This full-stack application demonstrates a simple checkout process using Stripe for payment handling. Our codebase is organized into three main directories: `shared`, `server`, and `client`.

## Features ✨

- **Shared Types**: Common data structures used across the application are located in the `shared` folder.
- **Express Server**: A robust backend built with Express.js to handle Stripe payment processing.
- **React Client**: A sleek Vite-powered frontend for a smooth checkout experience.

## Prerequisites 📋

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/)

Additionally, you'll need to sign up for a Stripe account to obtain your `STRIPE_SECRET_KEY`.

## Setup 🔧

1. Clone the repository:

   ```sh
   git clone git@github.com:MathiasCK/stripe-demo.git
   cd stripe-demo
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure .env files:

   **For the client**:

   - Create a `.env` file in the `client` directory.
   - Add `VITE_SERVER_URL=http://localhost:3000`

   **For the server**:

   - Create a `.env` file in the `server` directory.
   - Add `CLIENT_URL=http://localhost:5173`
   - Add `STRIPE_SECRET_KEY=<your_stripe_secret_key>`

## Running the Project 🏃‍♂️🏃‍♀️

To get the project up and running in development mode, use the following command:

```sh
npm run start:dev
```

For production, build the project first and then start it:

```sh
npm run build
npm start
```

## Usage 🖥️

1. Navigate to the client application in your web browser.
2. Click on "Checkout" to proceed with the payment.
3. Follow the instructions to enter your payment details through Stripe's secure checkout interface.
4. Upon success, you'll be redirected to a success page.

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License 📄

Distributed under the MIT License. See LICENSE for more information.

## Acknowledgements 🎉

- [Stripe](https://stripe.com) - For secure online payment processing.
- [Express.js](https://expressjs.com/) - The fast, unopinionated, minimalist web framework for Node.js.
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.

Made with ❤️ and JavaScript.
