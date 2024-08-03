import dotenv from "dotenv";

dotenv.config();
export const config = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_pass: process.env.DB_PASS,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  alchemy_api_key: process.env.ALCHEMY_API_KEY,
  analyze_api_url: process.env.ANALYZE_API_URL,
  chain_id: process.env.CHAIN_ID,
  infura_url: process.env.INFURA_URL,
  wallet_address: process.env.WALLET_ADDRESS,
  contract_address: process.env.CONTRACT_ADDRESS,
  on_chain_private_key: process.env.ON_CHAIN_PRIVATE_KEY,
};
