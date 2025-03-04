 # <p align="center">💖TelMedSphere</p>
<!-------------------------------------------------------------------------------------------------------------------------------------->
 <div align="center">
 <p>

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
![Visitors](https://api.visitorbadge.io/api/visitors?path=PratikMane0112%2FTelMedSphere%20&countColor=%23263759&style=flat)
![GitHub forks](https://img.shields.io/github/forks/PratikMane0112/TelMedSphere)
![GitHub Repo stars](https://img.shields.io/github/stars/PratikMane0112/TelMedSphere)
![GitHub contributors](https://img.shields.io/github/contributors/PratikMane0112/TelMedSphere)
![GitHub last commit](https://img.shields.io/github/last-commit/PratikMane0112/TelMedSphere)
![GitHub repo size](https://img.shields.io/github/repo-size/PratikMane0112/TelMedSphere)
![Github license](https://img.shields.io/github/license/PratikMane0112/TelMedSphere)
![GitHub issues](https://img.shields.io/github/issues/PratikMane0112/TelMedSphere)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/PratikMane0112/TelMedSphere)
![GitHub pull requests](https://img.shields.io/github/issues-pr/PratikMane0112/TelMedSphere)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/PratikMane0112/TelMedSphere)
 </p>
 </div>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<div id="top"></div>

<h2>🧾 Table of Contents</h2>

 [📌 Introduction](#introduction).<br>
 [💡 Features](#features).<br>
 [🚀 Technology Used](#technology-used).<br>
 [⭐ Overview](#overview).<br>
 [💥 Getting Started](#getting-started).<br>
 [🐳 Docker Setup](#docker-setup).<br>
 [📑  API Documentation](#api-documentation).<br>
 [⚡ Project Admin & Mentors](#project-admin-and-mentors).<br>
 [💬 Join Chatting Server](#contributing-with-fun).<br>
 [📑 Contributing Guidelines](#contributing-guidelines).<br>
 [📑 Code Of Conduct](#code-of-conduct).<br>
 [📑 License](#license).<br>
<br>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>📌Introduction</h2>

TelMedSphere is designed to make healthcare simple and accessible for both doctors and patients. It allows patients to connect with doctors through video calls, manage their health records, and make payments easily. For doctors, the app provides tools to schedule consultations, write prescriptions, and manage their time effectively.

<h2>💡Features</h2>

🚨 For Patients:<br>
 - Book Video Calls: Easily schedule video consultations with doctors.
 - Share Feedback: Rate and review the doctor after your consultation.
 - Manage Your Profile: Update and view your personal details.
 - View Past Records: Check previous orders and prescriptions in one place.
 - Easy Payments: Use the wallet feature powered by Stripe for secure payments.
 
🚨 For Doctors:<br>
 - Set Up Your Profile: Add information about yourself and your services.
 - Manage Availability: Set your working hours for consultations.
 - Join Video Calls: Connect with patients at the scheduled time.
 - Write Prescriptions: Share prescriptions directly with patients after the consultation.
 - Queue System: Organize appointments efficiently with a smart queue feature.

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>🚀Technology Used</h2>

<p>
  <a href="https://www.w3schools.com/html/"> <img src="https://img.icons8.com/?size=64&id=20909&format=png" alt="HTML" /></a>
  <a href="https://www.w3schools.com/css/"> <img src="https://img.icons8.com/?size=64&id=21278&format=png" alt="CSS" /></a>
  <a href="https://www.w3schools.com/js/"> <img src="https://img.icons8.com/?size=64&id=108784&format=png" alt="JS" /></a>
  <a href="https://www.w3schools.com/REACT/DEFAULT.ASP"> <img src="https://img.icons8.com/?size=64&id=NfbyHexzVEDk&format=png" alt="React" /></a>
  <a href="https://www.w3schools.com/python/"> <img src="https://img.icons8.com/?size=64&id=13441&format=png" alt="Python" /></a>
  <a href="https://www.geeksforgeeks.org/flask-tutorial/"><img src="https://img.icons8.com/?size=64&id=ewGOClUtmFX4&format=png" alt="Flask" /></a>
  <a href="https://www.w3schools.com/mongodb/"> <img src="https://img.icons8.com/?size=64&id=74402&format=png" alt="Mongo" /></a>
  <a href="https://www.educative.io/blog/docker-compose-tutorial" ><img src="https://img.icons8.com/?size=64&id=22813&format=png&color=000000" alt="Docker"></a>
</p>

🚨 Frontend: ReactJs <br>
🚨 Styling: TailwindCSS <br>
🚨 Backend: Python, Flask <br>
🚨 Database: MongoDB Atlas<br>
🚨 Containerization: Docker <br>
<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>⭐Overview</h2>

<h1 align="center"> <a href="https://pratik0112-telmedsphere.vercel.app/"> Live Project Demo ↗️</a></h1>

![](https://github.com/PratikMane0112/TelMedSphere/blob/master/Overview/1.png)

<h3 align="right"><a href="#top">⬆️</a></h3>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<h2>💥Getting Started</h2>

- Fork this Repository.
- Clone the forked repository in your local system.
  
 ```bash
 git clone https://github.com/<your-github-username>/TelMedSphere.git
 ```
<h2>💻Local Setup</h2>

- Navigate to the project directory for frontend Setup.
  
 ```bash
 # Navigate to frontend directory
 cd frontend    
 # Install all npm packages for react frontend
 # Use `npm ci` to avoid changing package-lock.json after every install https://stackoverflow.com/a/56254478  
 npm ci
 # Set .env file
 copy .env.example .env
 # (For linux) cp .env.example .env
 # Start the frontend 
 npm run dev    
 ```

- Navigate to the project directory for backend Setup.
  
 ```bash
 # Navigate to backend directory
 cd backend
 # Set .env file
 copy .env.example .env
 # (For linux) cp .env.example .env
 # Create a virtual environment
 python -m venv venv # This will create a folder named venv inside your project directory
 # Activate the virtual environment
 venv\Scripts\activate
 # Install all dependencies for flask server
 pip install -r requirements.txt     
 # Run flask server
 flask run
 # deactivate the virtual environment, when you are done
 deactivate
 ```
- Navigate to the project directory for ML model Setup.
  
 ```bash
 # Navigate to backend directory
 cd models
 # Create a virtual environment
 python -m venv venv # This will create a folder named venv inside your project directory
 # Activate the virtual environment
 venv\Scripts\activate
 # Install all dependencies for flask server
 pip install -r requirements.txt     
 # Run flask server
 flask run
 #update the development server link in .env file of frontend(MODEL_URL)
 # deactivate the virtual environment, when you are done
 deactivate
 ```
<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

## How to Get `.env` File Variables

Refer to the [EnvVarSetUpGuideline.md](.github/EnvVarSetUpGuideline.md) for detailed steps on setting up the `.env` files for both the frontend and backend.


<h3 align="right"><a href="#top">⬆️</a></h3>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<h2>🐳Docker Setup</h2>

Docker provides an easier way to set up and run TelMedSphere with all its dependencies.

### Prerequisites
- Docker and Docker Compose [installed](https://www.docker.com/products/docker-desktop/) on your system
- Environment variables ready for configuration

### Steps to Run with Docker

1. Clone the repository same as above:

2. Update Enviroment variables:
   - Update Environment variables mentioned in docker-compose based on each project's `.env` respectively


3. Start the application using Docker Compose:
```bash
docker-compose up --build -d
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Stopping the Application
```bash
docker-compose down
```

### Remove the Container
```bash
docker-compose kill
```

<h3 align="right"><a href="#top">⬆️</a></h3>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>📑API Documentation</h2>

This project uses [Swagger](https://swagger.io/) for its REST API Documentation with OPEN API Specificaion.

### Navigate to the API Docs URL:

For local you can access it at below URL (before please make sure that you have setup project locally by following above steps) :

```bash
http://localhost:5000/api/docs
```

For deployed URL it can be access at :

```bash
https://telmedsphere-server.vercel.app/api/docs
```

<h3 align="right"><a href="#top">⬆️</a></h3>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>⚡Project Admin and Mentors</h2>

<table>
<tr>
<td align="center">
<a href="https://github.com/PratikMane0112"><img src="https://avatars.githubusercontent.com/u/153143167?v=4" height="140px" width="140px" alt="Pratik Mane"></a><br><sub><b>Project Admin - Pratik Mane</b></sub>
</td>
<td align="center">
<a href="https://github.com/HarshwardhanPatil07"><img src="https://avatars.githubusercontent.com/u/126240589?v=4" height="140px" width="140px" alt="Pratik Mane"></a><br><sub><b>KWoC Mentor - Harshwardhan Patil </b></sub>
</td>
<td align="center">
<a href="https://github.com/AdityaBavadekar"><img src="https://avatars.githubusercontent.com/u/64344960?v=4" height="140px" width="140px" alt="Pratik Mane"></a><br><sub><b>SWoC Mentor - Aditya Bavadekar</b></sub>
</td>
<td align="center">
<a href="https://github.com/RajKhanke"><img src="https://avatars.githubusercontent.com/u/137288727?v=4" height="140px" width="140px" alt="Raj Khanke"></a><br><sub><b>DWoC Mentor - Raj Khanke</b></sub>
</td>

</tr>
</table>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<h2>🚩 Project is part of below Open Source Programs </h2>

<table>
<tr>
<td align="center">
<a href="https://kwoc.kossiitkgp.org/"><img src="https://github.com/PratikMane0112/TelMedSphere/blob/master/Overview/KWoC.png" height="100px" width="100px" alt="KWOC2024"></a><br><sub><b>KWoC 2k24</b></sub>
</td>
<td></td>
 <td align="center">
<a href="https://www.socialwinterofcode.com/"><img src="https://github.com/PratikMane0112/TelMedSphere/blob/master/Overview/SWoC.png" height="100px" width="100px" alt="SWOC2025"></a><br><sub><b>SWoC 2k25</b></sub>
</td>
 <td></td>
 <td align="center">
<a href="https://dwoc.io/"><img src="https://github.com/PratikMane0112/TelMedSphere/blob/master/Overview/DWoC.jpg" height="100px" width="100px" alt="SWOC2025"></a><br><sub><b>DWoC 2k25</b></sub>
</td>
<td></td>
 <td align="center">
<a href="https://iwoc3.devfolio.co/"><img src="https://github.com/PratikMane0112/TelMedSphere/blob/master/Overview/IWoC.png" height="100px" width="100px" alt="IWOC2025"></a><br><sub><b>IWoC 2k25</b></sub>
</td>
</tr>
</table>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>🫂Project Contributors</h2>

<a href="https://github.com/PratikMane0112/TelMedSphere/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=PratikMane0112/TelMedSphere&cache_burst=1" />
</a>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>🧡Contributing with fun</h2>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

<h2><a href="https://discord.gg/qsdDRKak28">Join Discord Server↗️</a></h2>

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<h2>📑Contributing Guidelines</h2>

Read our [Contributing Guidelines](https://github.com/PratikMane0112/TelMedSphere/blob/master/.github/CONTRIBUTING_GUIDELINES.md) to learn about our development process, how to propose bugfixes and improvements, and contributions.

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>📑Code Of Conduct</h2>

TelMedSphere and everyone participating in it is governed by the [Code of Conduct](https://github.com/PratikMane0112/TelMedSphere/blob/master/.github/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------   -->
<h2>🧾License</h2>

This project is licensed under the Apache License 2.0. See the [LICENSE](https://github.com/PratikMane0112/TelMedSphere/blob/master/LICENSE) file for more details.
  
  ```
   Copyright 2025 Pratik Mane

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
  ```

