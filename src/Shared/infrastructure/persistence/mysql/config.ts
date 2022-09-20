import dotenv from 'dotenv';

dotenv.config();

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
} = process.env;

const config = {
  database: DB_NAME as string,
  username: DB_USER as string,
  password: DB_PASSWORD as string,
  host: DB_HOST as string,
  port: parseInt(DB_PORT as string),
};

export default config;
