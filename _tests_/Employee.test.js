const Employee = require("../lib/Employee");
// employee object under test
const employee = new Employee("Stephen", 1, "stephen@email.com");

describe("Employee", () => {
  it("Validates that the user input is formatted as an object", () => {
    expect(typeof employee).toBe("object");
  });
});

describe("Employee name", () => {
  it("Returns the employee's name", () => {
    expect(employee.getName()).toBe("Stephen");
  });
});

describe("Employee ID", () => {
  it("Returns the Employee ID", () => {
    expect(employee.getID()).toBe(1);
  });
});

describe("Employee email", () => {
  it("Returns the employee's email", () => {
    expect(employee.getEmail()).toBe("stephen@email.com");
  });
});

describe("Employee role", () => {
  it('Returns the role of the new employee as "Employee"', () => {
    expect(employee.getRole()).toBe("Employee");
  });
});
