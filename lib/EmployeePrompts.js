class EmployeePrompts {
  promptManager() {
    const manager = [
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: (managerName) => {
          return managerName
            ? 
              true
            : 
              console.log("Team manager name is required");
        },
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the team manager's employee ID?",
        validate: (managerID) => {
          return managerID
            ? 
              true
            : 
              console.log("Employee ID is required");
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email address?",
        validate: (managerEmail) => {
          return managerEmail
            ? 
              true
            : 
              console.log("Email Address is required");
        },
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the team manager's office number?",
        validate: (managerOffice) => {
          return managerOffice
            ? 
              true
            : 
              console.log("Office Number is required");
        },
      },
    ];
    return manager;
  }

  promptEngineer() {
    const engineer = [
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of your engineer?",
        validate: (engineerName) => {
          return engineerName
            ? 
              true
            : 
              console.log("Name is required");
        },
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the employee ID of your engineer?",
        validate: (engineerID) => {
          return engineerID
            ? 
              true
            : 
              console.log("Employee ID is required");
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the email address of your engineer?",
        validate: (engineerEmail) => {
          return engineerEmail
            ? 
              true
            : 
              console.log("Email address is required");
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the GitHub username of your engineer?",
        validate: (engineerGithub) => {
          return engineerGithub
            ? 
              true
            : 
              console.log("Github username is required");
        },
      },
    ];
    return engineer;
  }

  promptIntern() {
    const intern = [
      {
        type: "input",
        name: "internName",
        message: "What is the name of your new intern?",
        validate: (internName) => {
          return internName
            ?
              true
            :
              console.log("Name is required");
        },
      },
      {
        type: "input",
        name: "internID",
        message: "What is the employee ID of your new intern?",
        validate: (internID) => {
          return internID
            ?
              true
            :
              console.log("Employee ID is required");
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the email address of your new intern?",
        validate: (internEmail) => {
          return internEmail
            ? 
              true
            : 
              console.log("Email Address is required");
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the school of your new intern?",
        validate: (internSchool) => {
          return internSchool
            ? 
              true
            : 
              console.log("School name is required");
        },
      },
    ];
    return intern;
  }
}

module.exports = EmployeePrompts;
