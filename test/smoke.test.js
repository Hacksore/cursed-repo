import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { listConfigFamilies } from '../src/index.js';

describe('cursed config catalog', () => {
  it('contains overlapping config families', () => {
    assert.ok(listConfigFamilies().includes('agent instructions'));
    assert.ok(listConfigFamilies().length >= 6);
  });
});
