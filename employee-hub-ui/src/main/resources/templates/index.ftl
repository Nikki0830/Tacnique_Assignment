<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Employee Directory</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/css/style.css" />
</head>
<body>
  <div class="container">
    <h1>Employee Directory</h1>

    <!-- Toolbar -->
    <div class="btn-group">
      <button onclick="window.location.href='/form'">Add Employee</button>
      <button onclick="resetFilters()">Reset Filters</button>
    </div>

    <!-- Filters -->
    <div class="filter-box">
      <input type="text" id="filterFirstName" placeholder="Filter by First Name" />
      <input type="text" id="filterDepartment" placeholder="Filter by Department" />
      <input type="text" id="filterRole" placeholder="Filter by Role" />
      <button onclick="applyFilters()">Apply Filters</button>
    </div>

    <!-- Freemarker rendered initial list -->
    <div id="employeeContainer">
      <#assign employees = [
        {"id": 1, "firstName": "Alice", "lastName": "Smith", "email": "alice@example.com", "department": "HR", "role": "Manager"},
        {"id": 2, "firstName": "Bob", "lastName": "Johnson", "email": "bob@example.com", "department": "IT", "role": "Developer"},
        {"id": 3, "firstName": "Charlie", "lastName": "Brown", "email": "charlie@example.com", "department": "Finance", "role": "Analyst"}
      ]>

      <#list employees as emp>
        <div class="card">
          <p><strong>${emp.firstName} ${emp.lastName}</strong></p>
          <p>Email: ${emp.email}</p>
          <p>Department: ${emp.department}</p>
          <p>Role: ${emp.role}</p>
          <button onclick="editEmployee(${emp.id})">Edit</button>
          <button onclick="deleteEmployee(${emp.id})">Delete</button>
        </div>
      </#list>
    </div>
  </div>

  <footer>
    <p>© 2025 Employee Directory | Developed by Nikita</p>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>
