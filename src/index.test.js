import * as getUser from './index.ts';

console.log(getUser);


describe('DB Functions test', () => {

    test('should return a DB Instance', async () => {
        const getUserAll = getUser;
        const db = await getUserAll;
        expect(db).toBeTruthy();
    })
})