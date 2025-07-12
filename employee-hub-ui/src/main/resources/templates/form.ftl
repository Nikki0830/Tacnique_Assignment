<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Add/Edit Employee</title>
  <link rel="stylesheet" href="/css/style.css" />
</head>
<body>
  <div class="form-container">
    <h2>Add Employee</h2>
    <form id="employeeForm">
      <input type="hidden" id="employeeId" />

      <label>First Name:</label>
      <input type="text" id="firstName" required />

      <label>Last Name:</label>
      <input type="text" id="lastName" />

      <label>Email:</label>
      <input type="email" id="email" required />

      <label>Department:</label>
      <select id="department">
        <option value="">Select</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
      </select>

      <label>Role:</label>
      <select id="role">
        <option value="">Select</option>
        <option value="Manager">Manager</option>
        <option value="Developer">Developer</option>
        <option value="Analyst">Analyst</option>
      </select>

      <div class="btn-group">
        <button type="button" onclick="window.location.href='/'">Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  </div>

  <script src="/js/main.js"></script>
</body>
</html>
