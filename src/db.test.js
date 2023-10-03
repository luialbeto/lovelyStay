import * as db from './db.ts'

console.log(db.addUser);
console.log(db.displayAllUsersInDb);
console.log(db.displayUsersByLocation);
console.log(db.displayUsersByProgLang);

test('it should received objects from addUser function', async () => {
    db.addUser = jest.fn();
    process.env.TOKEN = ''
    process.env.DATABASE_URL = ''
    try {
        await db.addUser()
    } catch (error) {
        expect(data).toBeCalledTimes(1)
        expect(error).toBeCalled()
    }
})

test('it should received objects from displayAllUsersInDb function', async () => {
    db.displayAllUsersInDb = jest.fn();
    try {
        await db.displayAllUsersInDb()
    } catch (error) {
        expect(data).toBeCalledTimes(1)
        expect(error).toBeCalled()
    }
})

test('it should received objects from displayUsersByLocation function', async () => {
    db.displayUsersByLocation = jest.fn();
    try {
        await db.displayUsersByLocation()
    } catch (error) {
        expect(data).toBeCalledTimes(1)
        expect(error).toBeCalled()
    }
})

test('it should received objects from displayUsersByProgLang function', async () => {
    db.displayUsersByProgLang = jest.fn();
    try {
        await db.displayUsersByProgLang()
    } catch (error) {
        expect(data).toBeCalledTimes(1)
        expect(error).toBeCalled()
    }
})
