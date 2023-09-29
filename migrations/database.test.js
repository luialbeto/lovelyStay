import { expect, test } from '@jest/globals';
import pgPromise from 'pg-promise';
import dotenv from 'dotenv';
dotenv.config();

const pgp = pgPromise();
const db = pgp({
    host: process.env.HOST,
    port: 5432,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
});

test('the data is', () => {


    expect(db).toBeTruthy();
});
