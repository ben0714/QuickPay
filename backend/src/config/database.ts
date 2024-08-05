// src/config/database.ts
import { Sequelize } from "sequelize";
import { config } from "./config";

const sequelize = new Sequelize(config.db_name as string, config.db_user as string, config.db_pass as string, {
  host: config.db_host,
  port: parseInt(config.db_port as string, 10),
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
