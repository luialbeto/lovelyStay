"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
const pgp = require('pg-promise')();
const connectionString = "postgresql://lovelystay:12345678@127.0.0.1:5432/lovelystay";
const db = pgp(connectionString);
// Reference of repo: https://github.com/TiagoLageira/lovelystayBackEndCodingTest
/*
    Creates table Users.
*/
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db.none(`
        CREATE TABLE IF NOT EXISTS users
        (
            id serial PRIMARY KEY,
            name VARCHAR(255),
            location VARCHAR(255),
            languages JSON
        )
        `);
            console.log("Table ready");
        }
        catch (error) {
            console.error("Table not ready", error);
        }
    });
}
exports.createTable = createTable;
