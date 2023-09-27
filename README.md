#LOVELYSTAY
===============

This is an app to managing SQL building using [pg-promise] and managing postgresql.

### Requirements
NodeJS                (npm install)
Typescript            (npm install typescript)
PostgreSQL^version 16 (npm instal postgre)
AXIOS                 (npm install axios)
.ENV                  (npm install dotenv)
pg-promise            (npm install pg-promise)
ESLint                (npm init @eslint/config)

### Installing & Running

Please, clone it by gitclone command line => git clone git@github.com:luialbeto/lovelyStay.git.

Building and running it according to the [TypeScript] of implementation. See details on the corresponding pages: [TypeScript]. This way, you can fire away URL commands in a browser.

To start you should play npm start!

### Optional
Sequelize

### Tips
-> You should use enviroments variables on .env as Docker standard to PostgreSQL Image to avoid conflicts wit yours existents variables (POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_DB)
-> To install PostgreSQL on Kali Linux, you may see this webpage https://www.postgresql.r2schools.com/how-to-install-postgresql-on-kali-linux/
-> ES6 standard

### TREE
.
├── config
│   └── config.json
├── migrations
│   ├── 20230927020554-create-user.js
│   ├── 20230927020714-create-table.js
│   ├── create-table.sql
│   ├── create-table.test.js
│   ├── create-table.ts
│   ├── database.js
│   ├── database.test.js
│   └── database.ts
├── models
│   ├── index.js
│   └── user.js
├── package.json
├── README.md
├── seeders
├── src
│   ├── db.js
│   ├── db.test.js
│   ├── db.ts
│   ├── index.test.js
│   └── index.ts
└── tsconfig.json

## Testing
The unit tests were running with JEST;
PEN-Testing with OWASP

# The emoji commits are submitted as standard (https://gitmoji.dev/)

## Documentation:
PostgreSQL: https://www.postgresql.org/docs/
pg-promise: https://vitaly-t.github.io/pg-promise/index.html
Typescript: https://www.typescriptlang.org/pt/
ESLint: https://eslint.org/
GitHubAPI: https://docs.github.com/en/rest
Sequelize: https://sequelize.org/docs/v6/getting-started/
JEST: https://jestjs.io/