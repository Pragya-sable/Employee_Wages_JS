class EmployeePayroll {
  constructor(id, name, salary, gender, startDate) {
    this.id = this.validateId(id);
    this.salary = this.validateSalary(salary);
    this.gender = this.validateGender(gender);
    this.startDate = this.validateStartDate(startDate);
    this.name = this.validateName(name);
  }

  // Validation Methods
  validateId(id) {
    if (id > 0 && !isNaN(id)) {
      return id;
    } else {
      throw new Error(
        "Invalid Employee ID! ID must be a positive non-zero number."
      );
    }
  }

  validateSalary(salary) {
    if (salary > 0 && !isNaN(salary)) {
      return salary;
    } else {
      throw new Error(
        "Invalid Salary! Salary must be a positive non-zero number."
      );
    }
  }

  validateGender(gender) {
    const genderRegex = /^[MF]$/;
    if (genderRegex.test(gender)) {
      return gender;
    } else {
      throw new Error("Invalid Gender! Gender must be 'M' or 'F'.");
    }
  }

  validateStartDate(startDate) {
    const date = new Date(startDate);
    const today = new Date();
    if (!isNaN(date) && date <= today) {
      return date;
    } else {
      throw new Error(
        "Invalid Start Date! Start Date must be a past or current date."
      );
    }
  }

  validateName(name) {
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
    if (nameRegex.test(name)) {
      return name;
    } else {
      throw new Error(
        "Invalid Name! Name must start with a capital letter and have at least 3 characters."
      );
    }
  }

  // Method to display employee details
  getDetails = () =>
    `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${
      this.gender
    }, Start Date: ${this.startDate.toDateString()}`;
}

// Example Usage (Using try-catch for invalid cases)
try {
  const emp1 = new EmployeePayroll(101, "Anand", 5000, "M", "2023-05-10");
  console.log(emp1.getDetails());
} catch (error) {
  console.error(error.message);
}

try {
  const emp2 = new EmployeePayroll(-5, "Ankit", 7000, "F", "2022-11-15"); // Invalid ID
  console.log(emp2.getDetails());
} catch (error) {
  console.error(error.message);
}

try {
  const emp3 = new EmployeePayroll(103, "saurabh", -3000, "M", "2024-01-20"); // Invalid Salary & Name
  console.log(emp3.getDetails());
} catch (error) {
  console.error(error.message);
}

try {
  const emp4 = new EmployeePayroll(104, "Ananya", 6000, "X", "2023-06-01"); // Invalid Gender
  console.log(emp4.getDetails());
} catch (error) {
  console.error(error.message);
}

try {
  const emp5 = new EmployeePayroll(105, "Avinash", 8000, "M", "2026-04-01"); // Future Start Date
  console.log(emp5.getDetails());
} catch (error) {
  console.error(error.message);
}
