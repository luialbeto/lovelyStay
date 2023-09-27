import { describe, expect } from '@jest/globals';
import RL from './index.ts';
import { isInterfaceDeclaration } from 'typescript';

describe('createTable module', () => {
    const data = RL();
    expect(data).toBe(isInterfaceDeclaration)
})
