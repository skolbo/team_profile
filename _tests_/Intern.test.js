
const Intern = require("../lib/Intern");
// intern object under test
const intern = new Intern("Stephen", 1, "stephen@email.com", "SMU");

describe("Intern's school", () => {
  it("Returns the Intern's school", () => {
    expect(intern.getSchool()).toBe("SMU");
  });
});

describe("Intern's role", () => {
  it('Returns "Intern"', () => {
    expect(intern.getRole()).toBe("Intern");
  });
});
