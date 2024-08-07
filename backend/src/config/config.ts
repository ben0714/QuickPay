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
  infura_url: process.env.INFURA_URL,
  wallet_address: process.env.WALLET_ADDRESS,
  worldcoin_app_id: process.env.WORLDCOIN_APP_ID,
  worldcoin_action_id: process.env.WORLDCOIN_ACTION_ID,
  blockscout_api_key: process.env.BLOCKSCOUT_API_KEY,
  blockscout_api_url: process.env.BLOCKSCOUT_API_URL,
  contract_address: process.env.CONTRACT_ADDRESS,
};
