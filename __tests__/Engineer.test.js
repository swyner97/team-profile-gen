const Engineer = require('../lib/Engineer');

// describe('Test Engineer Class', () => {
// 	it('should create a new engineer object', () => {
// 		const name = 'Rachel';
// 		const engineer = new Engineer(name);

// 		expect(engineer.name).toBe(name);
// 	})

// 	it('can set a github username via constructor', () => {
// 		const engineer = new Engineer(2, 'rachel@gmail.com', 'Rachel');
// 		const github = "Chili";

// 		expect(engineer.github).toBe(github);
// 	})
// })

test("can set a github username via constructor", () => {
    const test = "Chili";
    const engineer = new Engineer("Rachel", 2, "rachel@mail.com");

    expect(engineer.test).toBe(test);
});