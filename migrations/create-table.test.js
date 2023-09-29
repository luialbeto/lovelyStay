import { test } from '@jest/globals';
import { createTable } from "./create-table";

test('the data is', () => {
    return createTable().then(data => {
        expect(data).toBe(undefined);
    });
});