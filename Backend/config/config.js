import dotenv from "dotenv";
import pkg from "pg";
dotenv.config();

export const saltRounds = 10;

const { Pool } = pkg;
export const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"auth_db",
    password:`${process.env.PASSWORD}`,
    port:"5432"
})

