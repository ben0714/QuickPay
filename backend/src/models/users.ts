import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database"; // Adjust this import to your sequelize connection file

interface UserAttributes {
  id: number;
  wallet_address: string;
  username?: string;
  email?: string;
  score?: number;
  createdAt?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public wallet_address!: string;
  public username!: string;
  public email!: string;
  public score!: number;
  public readonly createdAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    wallet_address: {
      type: DataTypes.STRING(42),
      allowNull: false,
      unique: true,
      field: "wallet_address",
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
      field: "created_at",
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

export { User, UserAttributes };
