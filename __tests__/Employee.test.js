const Employee = require('../lib/Employee');

describe('Test Employee Class', () => {
	it('should create a new employee object', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'sarah');

		expect(typeof me).toBe('object');
	})

	it('can set a name via constructor', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'sarah');

		expect(me.name).toEqual('sarah');
	})

	it('can set a id via constructor', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'sarah');

		expect(me.id).toEqual(1);
	})

	it('can set a email via constructor', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'sarah');

		expect(me.email).toEqual('swyner@gmail.com');
	})

	it('can get email via getEmail() method', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'sarah');

		expect(me.getEmail()).toEqual('swyner@gmail.com');
	})

	it('can get name via getName() method', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'sarah');

		expect(me.getName()).toEqual('sarah');
	})

	it('can get id via getId() method', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'sarah');

		expect(me.getId()).toEqual(1);
	})

	it('can get role via getRole() method', () => {
		const me = new Employee(1, 'swyner@gmail.com', 'sarah');

		expect(me.getRole()).toEqual('Employee');
	})
})