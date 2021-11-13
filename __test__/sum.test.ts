import { sum } from '../functions';

describe('test sum function', () => {
	test('adds 1 + 2 must be equal to 3', () => {
		expect(sum(1, 2)).toBe(3);
	});

	test('2 + 2 is four', () => {
		expect(sum(2, 2)).toBe(4);
	});

	test('object assignment', () => {
		const data = { one: 1, two: 0 };
		data.two = 2;
		expect(data).toEqual({ one: 1, two: 2 });
	});

});
