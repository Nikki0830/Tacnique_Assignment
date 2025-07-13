<#assign employees = [
  { "id": 1, "firstName": "Alice", "lastName": "Smith", "email": "alice@example.com", "department": "HR", "role": "Manager" },
  { "id": 2, "firstName": "Bob", "lastName": "Johnson", "email": "bob@example.com", "department": "IT", "role": "Developer" },
  { "id": 3, "firstName": "Charlie", "lastName": "Lee", "email": "charlie@example.com", "department": "Finance", "role": "Analyst" }
]>

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

    <!-- Top Toolbar -->
    <div class="toolbar">
      <input type="text" id="searchBox" placeholder="Search by name or email" onkeyup="searchEmployees()" />
      <select id="sortOption" onchange="sortEmployees()">
        <option value="">-- Sort By --</option>
        <option value="firstName">First Name</option>
        <option value="department">Department</option>
      </select>

      <select id="pageSize" onchange="changePageSize()">
        <option value="10">Show: 10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>

      <button onclick="window.location.href='/form'">Add Employee</button>
    </div>

    <!-- Filter Sidebar -->
    <div class="filter-box">
      <input type="text" id="filterFirstName" placeholder="First Name" />
      <input type="text" id="filterDepartment" placeholder="Department" />
      <input type="text" id="filterRole" placeholder="Role" />
      <button onclick="applyFilters()">Apply</button>
      <button onclick="resetFilters()">Reset</button>
    </div>

    <!-- Employee Cards -->
    <div id="employeeContainer" class="employee-grid"></div>

    <!-- Pagination -->
    <div id="pagination" class="pagination-controls"></div>
  </div>

  <footer>
    <p>© 2025 Employee Directory | Developed by Nikita</p>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>
