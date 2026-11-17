import assert from 'node:assert/strict';
import test from 'node:test';
import { buildCategoryOptions, matchesCategory } from '../lib/category-filter.mjs';

test('category options preserve exact taxonomy labels and calculate stable counts', () => {
  assert.deepEqual(buildCategoryOptions(['Queue design', 'Escalations', 'Queue design', 'Identity safety']), [
    { name: 'Queue design', count: 2 },
    { name: 'Escalations', count: 1 },
    { name: 'Identity safety', count: 1 },
  ]);
});

test('category matching supports specific filters, All reset, and unknown empty states', () => {
  const categories = ['Queue design', 'Escalations'];
  assert.deepEqual(categories.filter((category) => matchesCategory(category, 'Escalations')), ['Escalations']);
  assert.deepEqual(categories.filter((category) => matchesCategory(category, 'Queue design')), ['Queue design']);
  assert.deepEqual(categories.filter((category) => matchesCategory(category, 'All')), categories);
  assert.deepEqual(categories.filter((category) => matchesCategory(category, 'Unknown category')), []);
});
