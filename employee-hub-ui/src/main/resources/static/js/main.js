// script.js

// Initial dummy employee data
let employees = [
  { id: 1, firstName: "Alice", lastName: "Smith", email: "alice@example.com", department: "HR", role: "Manager" },
  { id: 2, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", department: "IT", role: "Developer" },
  { id: 3, firstName: "Charlie", lastName: "Lee", email: "charlie@example.com", department: "Finance", role: "Analyst" }
];

// Render employees as cards
function renderEmployees(data) {
  const container = document.getElementById("employeeContainer");
  if (!container) return;
  // Map each employee to a card
  container.innerHTML = data.map(emp => `
    <div class="card">
      <p><strong>${emp.firstName} ${emp.lastName}</strong></p>
      <p>Email: ${emp.email}</p>
      <p>Department: ${emp.department}</p>
      <p>Role: ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    </div>
  `).join("");
}

// Filter logic based on form input
function applyFilters() {
  const first = document.getElementById("filterFirstName").value.toLowerCase();
  const dept = document.getElementById("filterDepartment").value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();

  const filtered = employees.filter(e =>
    (!first || e.firstName.toLowerCase().includes(first)) &&
    (!dept || e.department.toLowerCase().includes(dept)) &&
    (!role || e.role.toLowerCase().includes(role))
  );
  renderEmployees(filtered);
}

// Reset all filters
function resetFilters() {
  document.getElementById("filterFirstName").value = "";
  document.getElementById("filterDepartment").value = "";
  document.getElementById("filterRole").value = "";
  renderEmployees(employees);
}

// Validate email format using regex
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Delete employee by ID
function deleteEmployee(id) {
  if (confirm("Are you sure you want to delete this employee?")) {
    employees = employees.filter(emp => emp.id !== id);
    renderEmployees(employees);
  }
}

// Edit employee: save data in localStorage and navigate to form
function editEmployee(id) {
  const emp = employees.find(e => e.id === id);
  if (!emp) return;
  localStorage.setItem("editEmp", JSON.stringify(emp));
  window.location.href = "/form";
}

// Handle form submission: add new or update existing employee
function handleFormSubmit() {
  const form = document.getElementById("employeeForm");
  if (!form) return;

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value;
  const role = document.getElementById("role").value;
  const id = document.getElementById("employeeId").value;

  // Basic validation
  if (!firstName || !email || !validateEmail(email)) {
    alert("Please fill in all fields with valid info.");
    return;
  }

  // Construct employee object
  const newEmp = { id: id ? parseInt(id) : Date.now(), firstName, lastName, email, department, role };

  // Update if existing, else add
  if (id) {
    employees = employees.map(e => e.id === parseInt(id) ? newEmp : e);
  } else {
    employees.push(newEmp);
  }

  localStorage.removeItem("editEmp");
  window.location.href = "/";
}

// On page load: initialize form if editing and render list
window.onload = function () {
  const empData = localStorage.getItem("editEmp");
  if (empData && document.getElementById("employeeForm")) {
    const emp = JSON.parse(empData);
    document.getElementById("employeeId").value = emp.id;
    document.getElementById("firstName").value = emp.firstName;
    document.getElementById("lastName").value = emp.lastName;
    document.getElementById("email").value = emp.email;
    document.getElementById("department").value = emp.department;
    document.getElementById("role").value = emp.role;
  }

  // Attach submit handler
  if (document.getElementById("employeeForm")) {
    document.getElementById("employeeForm").addEventListener("submit", function (e) {
      e.preventDefault();
      handleFormSubmit();
    });
  }

  // Render all employees on initial load
  renderEmployees(employees);
};
