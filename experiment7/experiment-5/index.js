let employees = [];

function AddEmployee() {
    let name = document.querySelector('input[type="employeeName"]').value;
    let id = document.querySelector('input[type="employeeID"]').value;
    let salary = document.querySelector('input[type="employeeSalary"]').value;
    let dept = document.querySelector('input[type="department"]').value;

    if (name === "" || id === "" || salary === "" || dept === "") {
        alert("Please fill all fields!");
        return;
    }

    let emp = {
        name: name,
        id: id,
        salary: parseFloat(salary),
        dept: dept
    };

    employees.push(emp);

    alert("Employee Added Successfully!");

    document.querySelectorAll("input").forEach(input => input.value = "");
}

function Displayall() {
    let output = document.getElementById("output");
    output.innerHTML = "<h3>Employee List:</h3>";

    employees.forEach(emp => {
        output.innerHTML += `
            <p>
            Name: ${emp.name} <br>
            ID: ${emp.id} <br>
            Salary: ${emp.salary} <br>
            Department: ${emp.dept}
            </p>
            <hr>
        `;
    });
}

function salarycalculator() {
    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    alert("Total Salary of all employees: " + total);
}