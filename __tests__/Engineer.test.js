const Engineer = require('../lib/Engineer');

describe('Test Engineer Class', () => {
	it('should create a new engineer object', () => {
		const me = new Engineer(1, 'swyner@gmail.com', 'sarah');

		expect(typeof me).toBe('object');
	})

	it('can set a github username via constructor', () => {
		const me = new Engineer(1, 'swyner@gmail.com', 'sarah');

		expect(me.name).toEqual('swyner');
	})
})