import { describe, it, expect } from '@jest/globals';
import { addUser, displayAllUsersInDb, displayUsersByLocation, displayUsersByProgLang } from './db.ts';
import { getUserData } from './index.ts';

console.log(getUserData);

describe('getUser', () => {
    beforeEach(() => {
        getUserData.resetMocks();
    });

    it('Store information about a GitHub user on a database', async () => {
        const data = await addUser();
        expect(data).toBe('User luialbeto added to db.');
    });

    it('the fetch fails with an error', async () => {
        expect.assertions(0);
        try {
            await addUser();
        } catch (e) {
            expect(e).toMatch('Request failed with error: Request failed with status code 404');
        }
    });

    it('Display all users on the database', async () => {
        const data = await displayAllUsersInDb();
        expect(data).toBe('User luialbeto added to db.');
    });

    it('the fetch fails with an error', async () => {
        expect.assertions(0);
        try {
            await displayAllUsersInDb();
        } catch (e) {
            expect(e).toMatch('db disconnected');
        }
    });

    it('Display all users by location', async () => {
        const data = await displayUsersByLocation();
        expect(data).toBe('User luialbeto added to db.');
    });

    it('the fetch fails with an error', async () => {
        expect.assertions(0);
        try {
            await displayUsersByLocation();
        } catch (e) {
            expect(e).toMatch('db disconnected');
        }
    });

    it('Display all users by programming language', async () => {
        const data = await displayUsersByProgLang();
        expect(data).toBe('User luialbeto added to db.');
    });

    it('db disconnected', async () => {
        expect.assertions(0);
        try {
            await displayUsersByProgLang();
        } catch (e) {
            expect(e).toMatch('db disconnected');
        }
    });

})
