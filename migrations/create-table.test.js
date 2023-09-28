import { describe, expect } from '@jest/globals';
import { createTable } from './create-table.ts';

describe('createTable module', () => {
    const data = createTable();
    expect(data).toMatch(
        _createTable
    )
})
