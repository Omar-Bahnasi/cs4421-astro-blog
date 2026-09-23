import { describe, expect, it } from 'vitest';

describe('date utility', () => {
	it('should handle a date correctly', () => {
		const date = new Date('2026-01-15');

		expect(date.toISOString().slice(0, 10)).toBe('2026-01-15');
	});
});