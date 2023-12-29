import {Pool} from "pg"
import * as dotenv from 'dotenv';
dotenv.config()

export const databaseConfig : Pool = new Pool({
    user : process.env.DB_USER || 'postgres',
    password : process.env.DB_PASSWORD || 'admin',
    host : process.env.DB_HOST || 'localhost',
    port : parseInt(process.env.DB_PORT || '5432'),
    database : process.env.DATABASE || 'm-gen'
});