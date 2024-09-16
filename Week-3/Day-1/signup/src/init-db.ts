import pgPromise from "pg-promise";
import dotenv from 'dotenv'
import { Client } from "pg";

dotenv.config();
const pgp = pgPromise();

const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = parseInt(process.env.DB_PORT!, 5432);
const dbName = process.env.DB_NAME;

const dbConnectionString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`

const client = new Client({
    user: dbUser,
    host: dbHost,
    password: dbPassword,
    port: dbPort,
});

const setupDatabase = async () => {
    try{
        await client.connect()
        console.log('Connected to PostgresSQL');

        await client.query(`CREATE DATABASE ${dbName}`);
        console.log('Database Created');

        await client.end();

        const db = pgp(dbConnectionString);

        await db.none(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            )
        `);
        console.log('Table Created')
    } catch( error) {
        console.error('Error during database setup : ', error);
    }
};

setupDatabase();