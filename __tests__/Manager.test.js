const Employee = require('../lib/Employee');

describe('Test Employee Class', () => {
	it('should create a new employee object', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'Sarah');

		expect(typeof me).toBe('object');
	})

	it('can set an office number via constructor', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'Sarah');

		expect(me.name).toEqual('123');
	})
})