const Manager = require("../lib/Manager");
// manager object under test
const manager = new Manager("Stephen", 1, "stephen@email.com", 589);

describe("Manager's office number", () => {
  it("Returns the Manager's office number", () => {
    expect(manager.getOfficeNumber()).toBe(589);
  });
});

describe("Manager role", () => {
  it('Returns the role of the new employee as "Manager"', () => {
    expect(manager.getRole()).toBe("Manager");
  });
});
