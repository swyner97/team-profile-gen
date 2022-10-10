const Manager = require('../lib/Manager');

describe('Test Manager Class', () => {
	it('should create a new manager object', () => {
		const me = new Manager(1, 'swyner@gmail.com', 'Sarah');

		expect(typeof me).toBe('object');
	})

	it('can set an office number via constructor', () => {
		const test = "123";
		const me = new Manager(1, 'swyner@gmail.com', 'Sarah', test);

		expect(me.getOffice()).toEqual(test);
	})
})