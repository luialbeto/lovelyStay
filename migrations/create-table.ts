const pgp = require('pg-promise')();
const connectionString = "postgresql://lovelystay:12345678@127.0.0.1:5432/lovelystay";
const db = pgp(connectionString);

// Reference of repo: https://github.com/TiagoLageira/lovelystayBackEndCodingTest

console.log(db);
/*
    Creates table Users.
*/
export async function createTable(): Promise<void> {
    try {
        await db.none(`
        CREATE TABLE IF NOT EXISTS users
        (
            id serial PRIMARY KEY,
            name VARCHAR(255),
            location VARCHAR(255),
            languages JSON
        )
        `);
        console.log("Table ready");
    } catch (error) {
        console.error("Table not ready", error);
    }
    console.log(createTable());
}
