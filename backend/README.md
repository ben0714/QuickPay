# quickPay Backend

This directory contains the backend application for QuickPay.

## Getting Started

1. Install dependencies:

```
npm install
```

2. Set up environment variables:

- Copy `.env.example` to `.env`
- Fill in the required variables

3. Start the development server:

```
yarn dev
```

4. Run tests:

```
yarn test
```

5. Build for production:

```
yarn build
```

## Technology Stack

- Node.js
- Express.js for API framework
- PostgreSQL for database
- Web3.js and Ethers.js for blockchain interactions
- Jest for testing
- Winston for logging

## Environment Variables

- `NODE_ENV`: Set to 'development', 'test', or 'production'
- `PORT`: Port number for the server
- `JWT_SECRET`: Secret for JWT token generation
- `ETHEREUM_RPC_URL`: Ethereum node RPC URL
- `BASE_RPC_URL`: Base network RPC URL

## Contributing

Please read [CONTRIBUTING.md](../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](../LICENSE.md) file for details.
