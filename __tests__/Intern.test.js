const Intern = require('../lib/Intern');

describe('Test Intern Class', () => {
	it('should create a new intern object', () => {
		const intern = new Intern("Pico", 3, "pico@gmail.com");

		expect(typeof intern).toBe('object');
	})

	it('can get school via getSchool() method', () => {
		const test = "UCSB";
		const intern = new Intern("Pico", 3, "pico@gmail.com", test);

		expect(intern.getSchool()).toEqual(test);
	})
})