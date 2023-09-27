import { describe, expect } from '@jest/globals';
import { db } from './create-table.ts';

describe('createTable module', () => {
    const data = db();
    expect(data).toBe(true)
})
