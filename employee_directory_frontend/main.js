// main.js
let employees = JSON.parse(localStorage.getItem("employees")) || [
  { id: 1, firstName: "Alice", lastName: "Smith", email: "alice@example.com", department: "HR", role: "Manager" },
  { id: 2, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", department: "IT", role: "Developer" },
  { id: 3, firstName: "Charlie", lastName: "Lee", email: "charlie@example.com", department: "Finance", role: "Analyst" }
];

function saveEmployees() {
  localStorage.setItem("employees", JSON.stringify(employees));
}

let currentPage = 1;
let pageSize = 10;

function renderEmployees(data) {
  const container = document.getElementById("employeeContainer");
  if (!container) return;

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

function renderEmployeesWithPagination(data) {
  const start = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(start, start + pageSize);
  renderEmployees(paginatedData);
  renderPaginationControls(data.length);
}

function renderPaginationControls(totalItems) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const paginationDiv = document.getElementById("pagination");
  if (!paginationDiv) return;
  paginationDiv.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    paginationDiv.innerHTML += `<button onclick="goToPage(${i})" ${i === currentPage ? 'class="active"' : ''}>${i}</button>`;
  }
}

function goToPage(page) {
  currentPage = page;
  renderEmployeesWithPagination(employees);
}

function changePageSize() {
  pageSize = parseInt(document.getElementById("pageSize").value);
  currentPage = 1;
  renderEmployeesWithPagination(employees);
}

function searchEmployees() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const result = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(query) ||
    emp.lastName.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  renderEmployeesWithPagination(result);
}

function sortEmployees() {
  const sortKey = document.getElementById("sortOption").value;
  const sorted = [...employees].sort((a, b) =>
    a[sortKey]?.localeCompare(b[sortKey])
  );
  renderEmployeesWithPagination(sorted);
}

function applyFilters() {
  const first = document.getElementById("filterFirstName").value.toLowerCase();
  const dept = document.getElementById("filterDepartment").value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();

  const filtered = employees.filter(e =>
    (!first || e.firstName.toLowerCase().includes(first)) &&
    (!dept || e.department.toLowerCase().includes(dept)) &&
    (!role || e.role.toLowerCase().includes(role))
  );
  renderEmployeesWithPagination(filtered);
}

function resetFilters() {
  document.getElementById("filterFirstName").value = "";
  document.getElementById("filterDepartment").value = "";
  document.getElementById("filterRole").value = "";
  renderEmployeesWithPagination(employees);
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function deleteEmployee(id) {
  if (confirm("Are you sure you want to delete this employee?")) {
    employees = employees.filter(emp => emp.id !== id);
    saveEmployees();
    renderEmployeesWithPagination(employees);
  }
}

function editEmployee(id) {
  const emp = employees.find(e => e.id === id);
  if (!emp) return;
  localStorage.setItem("editEmp", JSON.stringify(emp));
  window.location.href = "/form";
}

function handleFormSubmit() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value.trim();
  const role = document.getElementById("role").value.trim();
  const id = document.getElementById("employeeId").value;

  if (!firstName || !lastName || !email || !department || !role || !validateEmail(email)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const newEmp = { id: id ? parseInt(id) : Date.now(), firstName, lastName, email, department, role };

  if (id) {
    employees = employees.map(e => e.id === parseInt(id) ? newEmp : e);
  } else {
    employees.push(newEmp);
  }

  saveEmployees();
  localStorage.removeItem("editEmp");
  window.location.href = "/";
}

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

  if (document.getElementById("employeeForm")) {
    document.getElementById("employeeForm").addEventListener("submit", function (e) {
      e.preventDefault();
      handleFormSubmit();
    });
  }

  if (document.getElementById("employeeContainer")) {
    renderEmployeesWithPagination(employees);
  }
};
