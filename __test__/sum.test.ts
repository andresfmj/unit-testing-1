import { sum } from '../functions';

describe('test sum function', () => {
	test('adds 1 + 2 must be equal to 3', () => {
		expect(sum(1, 2)).toBe(3);
	});
});
