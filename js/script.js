const firstName = prompt('Enter your first name: ');
const surname = prompt('Enter your surname: ');
let salary = prompt('Enter your salary: ');
let bonus = 500;
let finalSalary = eval(`${salary} + ${bonus}`);

document.write(`
  Name: ${firstName} <br>
  Surname: ${surname} <br>
  Salary: R${finalSalary} <br>
`)