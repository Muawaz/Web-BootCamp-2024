import express, {Request, Response} from 'express'
import { Client } from 'pg'
import pgPromise from 'pg-promise'
import dotenv from 'dotenv'

const app = express();
const port = process.env.PORT || 5000;

const pgp = pgPromise();

dotenv.config();
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = parseInt(process.env.DB_PORT!, 5432);
const dbName = process.env.DB_NAME;

const dbConnectionString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
const db = pgp(dbConnectionString)

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

app.use(express.json());

// create table
app.post('/create-table', async (req: Request, res: Response) => {
    try{
        await db.none(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL
            )
        `);
        res.status(200).send('Table created');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating table');
    }
})

// add user
app.post('/add-user', async (req: Request, res: Response) => {
    const { name, email, password} = req.body;
    try {
        await db.none(`
            INSERT INTO users(name, email, password) VALUES($1, $2, $3)`,
            [name, email, password]
        );
        res.status(200).send('User added');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error adding user');
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost/${port}`);
});