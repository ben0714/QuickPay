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
  wallet_address: process.env.WALLET_ADDRESS,
  worldcoin_app_id: process.env.WORLDCOIN_APP_ID,
  worldcoin_action_id: process.env.WORLDCOIN_ACTION_ID,
};
