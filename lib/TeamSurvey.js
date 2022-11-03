const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const HTMLGenerator = require("../src/HTMLGenerator");
const CardTemplates = require("../src/CardTemplates");
const EmployeePrompts = require("./EmployeePrompts");

const employeeCards = [];

class TeamSurvey {
  start()
  {
    this.addManager();
  }
  
  addManager() {
    const prompts = new EmployeePrompts();
    inquirer
      .prompt(prompts.promptManager())
      .then((data) => {
        const { managerName, managerID, managerEmail, managerOffice } = data;
        const newEmployee = new Manager(managerName, managerID, managerEmail, managerOffice);
        const managerCard = new CardTemplates(newEmployee).generateManagerCard();
        employeeCards.push(managerCard);
      })
      .then(() => {
        this.addEmployee();
      });
  }

  addEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addMore",
          message: "Would you like to add another employee?",
          choices: ["yes", "no"],
        },
      ])
      .then((data) => {
        const { addMore } = data;
        switch (addMore) {
          case "yes":
            this.getEmployeeRole();
            break;
          case "no":
            const htmlGenerator = new HTMLGenerator(employeeCards);
            fs.writeFile("./dist/team.html", htmlGenerator.generate(), (err) => {
              if (err) throw err;
              console.log(
                "Success! The team profile html is in the dist folder"
              );
            });
            break;
        }
      });
  }

  getEmployeeRole() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message:
            "What is the role of the new employee?",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((data) => {
        const { role } = data;
        return role === "Engineer" ? this.addEngineer() : this.addIntern();
      });
  }

  addEngineer() {
    const prompts = new EmployeePrompts();
    inquirer
      .prompt(prompts.promptEngineer())
      .then((data) => {
        const {
          engineerName,
          engineerID,
          engineerEmail,
          engineerGithub,
        } = data;
        const newEmployee = new Engineer(
          engineerName,
          engineerID,
          engineerEmail,
          engineerGithub
        );
        const engineerCard = new CardTemplates(newEmployee).generateEngineerCard();
        employeeCards.push(engineerCard);
      })
      .then(() => {
        this.addEmployee();
      });
  }

  addIntern() {
    const prompts = new EmployeePrompts();
    inquirer
      .prompt(prompts.promptIntern())
      .then((data) => {
        const { internName, internID, internEmail, internSchool } = data;
        const newEmployee = new Intern(
          internName,
          internID,
          internEmail,
          internSchool
        );
        const internCard = new CardTemplates(newEmployee).generateInternCard();
        employeeCards.push(internCard);
      })
      .then(() => {
        this.addEmployee();
      });
  }
}

module.exports = TeamSurvey;
