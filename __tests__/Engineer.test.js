const Engineer = require('../lib/Engineer');

describe('Test Engineer Class', () => {
	it('should create a new employee object', () => {
		const employee = new Employee("Rachel", 2, "rachel@mail.com");

		expect(typeof me).toBe('object');
	})
});

test("can set a github username via constructor", () => {
    const test = "Chili";
    const engineer = new Engineer("Rachel", 2, "rachel@mail.com", test);

    expect(engineer.getGithub()).toBe(test);
});