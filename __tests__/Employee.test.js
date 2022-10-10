const Employee = require('../lib/Employee');

describe('Test Employee Class', () => {
	it('should create a new employee object', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'Sarah');

		expect(typeof me).toBe('object');
	})

	it('can get role via getRole() method', () => {
		const test = 'Employee';
		const me = new Employee(test);

		expect(me.getRole()).toEqual(test);
	})

})