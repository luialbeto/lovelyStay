import db from "../migrations/database";

// Create userData Interface
interface UserData {
    name: string;
    location: string;
}

// Create user data in db
export async function addUser(userData: UserData,
    languagesData: any,
    userName: string): Promise<void> {
    const query = {
        text: 'INSERT INTO users (name, location, languages)' +
            'VALUES ($1, $2, $3)',
        values: [userData.name,
        userData.location,
            languagesData]
    };
    await db.none(query);
    console.log(`User ${userName} added to db.`);
}

// Fetch all user data from db
export async function displayAllUsersInDb() {
    try {
        // fetch all the users in DB
        const data = await db.any(`SELECT * FROM users`);

        // show the data in the command line
        console.log(`All users in DB:`);
        data.forEach((row) => {
            console.log(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch users by location from db
export async function displayUsersByLocation(
    columnName: string,
    columnValue: string) {
    try {
        // Use a prepared statement to prevent SQL injection attacks
        const query = {
            text: `SELECT * FROM users WHERE ${columnName} = $1`,
            values: [columnValue]
        };
        const data = await db.any(query);

        if (data.length == 0) {
            console.log(`No users in ${columnValue} found in bd.`);
        }
        else {
            // show the data in the command line
            console.log(`All users who are in ${columnValue}:`);
            data.forEach((row) => {
                console.log(row);
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch users by programming language from db
export async function displayUsersByProgLang(language: string) {
    try {
        // Fetch the data from the column
        const data = await db.any(
            `SELECT * FROM users WHERE languages @> '${language}'`
        );

        if (data.length == 0) {
            console.log(`No users know ${language} found in bd.`);
        }
        else {
            // Show the data in the command line
            console.log(`Users who know ${language}:`);
            data.forEach((row) => {
                console.log(row);
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
