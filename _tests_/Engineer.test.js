
const Engineer = require("../lib/Engineer");
// engineer object under test
const engineer = new Engineer("Stephen", 1, "stephen@email.com", "skolbo");

describe("Engineer's GitHub", () => {
  it("Returns the GitHub username", () => {
    expect(engineer.getGithub()).toBe("skolbo");
  });
});

describe("Engineer's role", () => {
  it('Returns "Engineer"', () => {
    expect(engineer.getRole()).toBe("Engineer");
  });
});
