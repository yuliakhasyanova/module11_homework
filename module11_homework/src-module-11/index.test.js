import {
	translate
} from "./index.js";

describe('test for translate function', () => {
	it('should correctly display month for 1-12', () => {
			expect(translate("February")).toBe('Февраль');
		}),
		it('should not return November', () => {
			expect(translate("November")).toBe('Ноябрь');
		}),
		it('should not return month for number', () => {
			expect(translate(5)).toBe('You write the wrong month');
		}),
		it('should not return month for invalid argument', () => {
			expect(translate('Autumn')).toBe('You write the wrong month');
		})
})