const Employee = require('../lib/Employee');

describe('Test Employee Class', () => {
	it('should create a new employee object', () => {
		const me = new Employee(3, 'pico@gmail.com', 'Pico');

		expect(typeof me).toBe('object');
	})

	it('can set a school via constructor', () => {
		const me = new Employee(3, 'pico@gmail.com', 'Pico');

		expect(me.name).toEqual('UCSB');
	})
})