<div align="center">
  <h1>🧑‍💼 Employee Directory Web Interface</h1>
  <p><strong>Spring Boot + Freemarker + JavaScript</strong> | Deployed on <strong>Google Cloud Platform</strong></p>
  <br><br>
</div>

---

## 🌐 Live Demo

🔗 **[Visit Application]( http://localhost:8082)**  


---

## 🛠️ Tech Stack

| Layer          | Tools/Tech Used                             |
|----------------|----------------------------------------------|
| Frontend       | HTML, CSS, Vanilla JavaScript                |
| Templating     | Freemarker Template Engine (`.ftl`)          |
| Backend        | Java 17, Spring Boot                         |
| Build Tool     | Maven                                        |
| IDE            | Spring Tool Suite (STS)                      |
| Deployment     | Google Cloud Platform (GCP) Compute Engine   |

---

## 📁 Project Structure

employee-hub-ui/
├── src/
│ └── main/
│ ├── java/com/nikita/employeehubui/controller/
│ │ └── ViewController.java
│ ├── resources/
│ │ ├── templates/ # Freemarker templates
│ │ │ ├── index.ftl
│ │ │ └── form.ftl
│ │ └── static/
│ │ ├── css/style.css
│ │ └── js/main.js
├── target/
├── pom.xml
└── README.md


### 📌 Prerequisites
- Java 17+
- Maven
- Git

### 📦 Setup & Run

```bash
# Clone the repository
git clone https://github.com/your-username/employee-hub-ui.git
cd employee-hub-ui

# Build the project
mvn clean install

# Run the Spring Boot application
mvn spring-boot:run
📍 Visit: http://localhost:8080

🧠 Challenges Faced
This was my first full-stack project using Spring Boot with Freemarker as the templating engine, and also my first deployment to Google Cloud Platform (GCP). Throughout the development and deployment process, I faced the following challenges:

1. Freemarker Integration
Understanding how Freemarker works with Spring Boot, especially using dynamic content rendering via <#list> and <#assign> tags, required a shift from traditional frontend templating. Managing loops, conditions, and integrating mock data effectively was initially time-consuming.

2. Client-Side Validation
Instead of using basic alert popups, I implemented inline form validations using JavaScript. Handling dynamic validation messages, especially for select dropdowns and real-time user feedback, required extra care to avoid false positives.

3. Data Handling Without Backend
Since no backend/database was allowed, managing employee data entirely in memory (via a JavaScript array and localStorage) made it challenging to ensure consistency across the dashboard and form pages — especially when editing, updating, or deleting entries.

4. Deployment to Google Cloud Platform
Deploying the Spring Boot application to GCP’s Compute Engine involved multiple steps:

Configuring the virtual machine with the correct Java version (17)

Adjusting firewall rules to allow traffic on port 8080

Ensuring the .jar file ran continuously without interruption

Verifying browser-level access to the deployed app

