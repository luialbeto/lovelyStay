import { describe, expect } from '@jest/globals';
import fetch, { enableFetchMocks } from 'jest-fetch-mock';
import { getUserData, getProgLanguagesData } from '../src/index.ts';

enableFetchMocks();

/* describe('getUser', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('get User', async () => {
        fetch.mockResponseOnce(
            JSON.stringify({
                id: 1,
                login: 'Luiz Araujo',
                name: 'luialbeto',
                url: 'https://api.github.com/users/luialbeto',
            }),
            { status: 200 }
        );
        const user = await getUserData('luialbeto');
        expect(user).toEqual({
            id: 1,
            login: 'luialbeto',
            name: 'Luiz Araujo',
            url: 'https://api.github.com/users/luialbeto',
        });
    });

    it('not found', async () => {
        fetch.mockResponseOnce(
            JSON.stringify({
                message: 'Not Found',
            }),
            { status: 404 }
        );

        const user = await getUserData('not-a-user');
        expect(user).toEqual({
            message: 'User not found',
        });
    });
})

describe('getRepos', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('get repos', async () => {
        fetch.mockResponseOnce(
            JSON.stringify([
                {
                    id: 1,
                    name: 'repo',
                    description: 'This is repo',
                },
            ]),
            { status: 200 }
        );
        const repos = await getProgLanguagesData('luialbeto', 1);
        expect(repos).toEqual([
            {
                id: 1,
                name: 'repo',
                description: 'This is repo',
            },

        ]);
    });

});
 */

jest.mock('../cliente');

test('findAll', async () => {

    const result = await getUserData.findAll(1);
    console.log(result);
    expect(result.length).toEqual(1);

})