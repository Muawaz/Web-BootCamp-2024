import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import pgPromise from 'pg-promise';

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

app.use(express.json());

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