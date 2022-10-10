const Engineer = require('../lib/Engineer');

describe('Test Engineer Class', () => {
	it('should create a new engineer object', () => {
		const me = new Engineer(2, 'rachel@gmail.com', 'Rachel');

		expect(typeof me).toBe('object');
	})


	it("can set a github username via constructor", () => {
		const test = "Chili";
		const engineer = new Engineer("Rachel", 2, "rachel@mail.com", test);
	
		expect(engineer.getGithub()).toBe(test);
	});
	
});
