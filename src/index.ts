import axios from 'axios';
import readline from 'readline';
import { createTable } from "../migrations/create-table";
import { addUser, displayAllUsersInDb, displayUsersByLocation, displayUsersByProgLang } from "./db";

const TOKEN = process.env.TOKEN;

// Create readline Interface
const RL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Run menu
export async function optionsMenu() {

    const USERINPUT = await getUserInput(
        "\nEnter the number corresponding a function and press \"Enter\"\n" +
        "1. Store information about a GitHub user on a database;\n" +
        "2. Display all users on the database;\n" +
        "3. Display all users by location;\n" +
        "4. Display all users by programming language;\n" +
        "0. Exit.\n"
    );
    return USERINPUT
}

// Resolve user input
export async function getUserInput(question: string): Promise<string> {
    return new Promise((resolve) => {
        RL.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Fetch user data from github
export function getUserData(userName: string, ACCESS_TOKEN: string): Promise<String> {
    // Construct the API endpoint URL
    const URL = `https://api.github.com/users/${userName}`;

    return axios.get(URL, {
        headers: {
            'User-Agent': 'request',
            'Authorization': `token ${ACCESS_TOKEN}`,
        }
    })
        .then(response => {

            // Return the user data
            return response.data;
        })
        .catch(error => {
            console.log(`Request failed with error: ${error.message}`);
        });
}

// Fetch programming languages from github repositories
export async function getProgLanguagesData(userName: string, ACCESS_TOKEN: string) {

    // Construct the API endpoint URL
    const URL = `https://api.github.com/users/${userName}/repos`;

    return axios.get(URL, {
        headers: { Authorization: `token ${ACCESS_TOKEN}` },
    })
        .then(response => {

            //Map languages from repos
            const LANGUAGEDATA = Array.from(
                new Set(response.data.map(
                    (repo: { language: string }) => repo.language
                ).filter(Boolean)
                )
            );

            //Convert mapped data to "JSONB"
            const languagesDataJsonb = JSON.stringify(LANGUAGEDATA) as "JSONB";

            // Return the languages data
            return languagesDataJsonb;
        })
        .catch(error => {
            console.log(`Request failed with error: ${error.message}`);
        });
}

export async function main() {

    // Create Variables
    let userInput
    let userName
    let userData: any
    let languagesData
    let userLocation
    let userLanguage
    let jsonString

    // Create Table
    await createTable();

    // Receive github access_token from user
    const ACCESS_TOKEN = await getUserInput(
        "\nEnter your GitHub API Access token(generate it on GitHub):\n"
    );

    // Create Menu cicle
    let isDone = false;
    while (!isDone) {

        // Call menu function
        userInput = await optionsMenu();

        switch (userInput) {

            case "0":
                isDone = true;
                break;

            case "1":
                userName = await getUserInput(
                    "\nEnter name of the GitHub to add to the database:\n");
                userData = await getUserData(userName, ACCESS_TOKEN)
                languagesData = await getProgLanguagesData(userName, ACCESS_TOKEN)

                // Check if userData and languagesData is defined
                if (userData && languagesData) {
                    // console.log(userData)
                    await addUser(userData, languagesData, userName)
                }
                break;

            case "2":
                await displayAllUsersInDb()
                break;

            case "3":
                userLocation = await getUserInput(
                    "\nLocation of the GitHub to show on the command-line:\n");

                await displayUsersByLocation("location", userLocation)
                break;

            case "4":
                userLanguage = await getUserInput(
                    "\nProgramming language:\n");

                // Convert input to JSON
                jsonString = JSON.stringify(userLanguage)
                await displayUsersByProgLang(jsonString)
                break;

            default:
                console.log("Not a valid option.");
                break;
        }
    }
    process.exit()
}
main();
