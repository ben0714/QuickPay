# Quickpay Backend

This directory contains the backend application for Quickpay, powering the web3 frontend and Wallet/Payment solution.

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
npm start
```

4. Run tests:

```
npm test
```

5. Build for production:

```
npm run build
```

## Key Features

- RESTful API for DeFi analytics and user management
- WebSocket support for real-time updates
- Multi-chain support (Ethereum, Base, etc.)
- DeFi Opportunity Score calculation
- Yield farming aggregation
- Secure authentication and authorization

## Technology Stack

- Node.js
- Express.js for API framework
- MongoDB for database
- Web3.js and Ethers.js for blockchain interactions
- Jest for testing
- Winston for logging

## Environment Variables

- `NODE_ENV`: Set to 'development', 'test', or 'production'
- `PORT`: Port number for the server
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT token generation
- `ETHEREUM_RPC_URL`: Ethereum node RPC URL
- `BASE_RPC_URL`: Base network RPC URL

## Contributing

Please read [CONTRIBUTING.md](../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](../LICENSE.md) file for details.
