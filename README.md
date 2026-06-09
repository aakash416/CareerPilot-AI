# 🚀 CareerPilot AI

> AI-Powered Job Portal & Career Assistant

CareerPilot AI is a modern full-stack recruitment platform that connects job seekers and recruiters through intelligent job matching, resume analysis, application tracking, and real-time notifications.

The platform leverages AI to recommend jobs, analyze resumes, identify skill gaps, and help recruiters discover the best candidates efficiently.

---

## 🌟 Features

### 👨‍💼 Candidate Features

* User Registration & Login
* JWT Authentication
* Profile Management
* Resume Upload (PDF/DOCX)
* Search Jobs
* Apply for Jobs
* Save Jobs
* Track Application Status
* AI Resume Analysis
* AI Job Recommendations
* Real-Time Notifications

### 🏢 Recruiter Features

* Recruiter Registration & Login
* Company Profile Management
* Post New Jobs
* Update/Delete Jobs
* View Applicants
* Shortlist Candidates
* Reject Candidates
* Analytics Dashboard

### 👑 Admin Features

* Manage Users
* Manage Recruiters
* Manage Jobs
* Platform Analytics
* Monitor Activity Logs

### 🤖 AI Features

* Resume Scoring
* ATS Compatibility Check
* Skill Gap Analysis
* Personalized Job Recommendations
* Interview Question Suggestions
* Career Guidance Recommendations

---

# 🛠️ Tech Stack

## Frontend

* React.js
* TypeScript
* Vite
* Tailwind CSS
* Shadcn UI
* React Query
* Redux Toolkit
* React Router DOM
* Axios

## Backend

* NestJS
* TypeScript
* REST APIs
* Swagger Documentation

## Database

* MongoDB Atlas
* Mongoose

## Authentication & Security

* JWT Authentication
* Refresh Tokens
* Role-Based Access Control (RBAC)
* Password Hashing (bcrypt)

## Real-Time Features

* Socket.IO

## Cloud Services

* AWS S3 (Resume & File Storage)

## AI Integration

* OpenAI API

## Queue Management

* BullMQ
* Redis

## DevOps

* Docker
* Docker Compose
* GitHub Actions

---

# 📂 Project Structure

```bash
careerpilot-ai
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   ├── routes/
│   │   ├── layouts/
│   │   ├── utils/
│   │   └── types/
│   │
│   └── public/
│
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── recruiter/
│   │   ├── jobs/
│   │   ├── applications/
│   │   ├── resumes/
│   │   ├── notifications/
│   │   ├── analytics/
│   │   ├── ai/
│   │   ├── admin/
│   │   ├── common/
│   │   ├── config/
│   │   └── database/
│   │
│   └── test/
│
├── docker/
├── docs/
├── .github/
└── README.md
```

---

# 🔐 User Roles

## Candidate

* Apply Jobs
* Save Jobs
* Upload Resume
* Receive AI Suggestions
* Track Applications

## Recruiter

* Manage Company Profile
* Post Jobs
* Manage Applicants
* View Analytics

## Admin

* Manage Platform
* User Management
* Recruiter Management
* Analytics Dashboard

---

# 📌 Application Workflow

### Candidate Flow

```text
Register/Login
      ↓
Create Profile
      ↓
Upload Resume
      ↓
AI Resume Analysis
      ↓
Search Jobs
      ↓
Apply Job
      ↓
Track Application
```

### Recruiter Flow

```text
Register/Login
      ↓
Create Company Profile
      ↓
Post Job
      ↓
Receive Applications
      ↓
Shortlist Candidates
      ↓
Schedule Interviews
```

---

# 🗄️ Database Collections

```text
users
companies
jobs
applications
resumes
notifications
savedJobs
analytics
activityLogs
```

---

# 🔑 Core Modules

### Authentication Module

* Register
* Login
* Refresh Token
* Forgot Password
* Reset Password

### User Module

* Candidate Profiles
* Recruiter Profiles

### Job Module

* Create Job
* Update Job
* Delete Job
* Search Jobs

### Application Module

* Apply Job
* Track Status
* Shortlist Candidate

### Resume Module

* Upload Resume
* Resume Analysis

### Notification Module

* Email Notifications
* Real-Time Notifications

### AI Module

* Resume Scoring
* ATS Analysis
* Skill Recommendations
* Job Recommendations

---

# 🔌 API Documentation

Swagger Documentation:

```bash
http://localhost:5000/api/docs
```

---

# 🐳 Docker Setup

## Build Containers

```bash
docker-compose build
```

## Start Application

```bash
docker-compose up -d
```

## Stop Application

```bash
docker-compose down
```

---

# ⚙️ Environment Variables

## Backend

```env
PORT=5000

MONGO_URI=

JWT_SECRET=
JWT_REFRESH_SECRET=

REDIS_HOST=
REDIS_PORT=

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=

OPENAI_API_KEY=

FRONTEND_URL=
```

## Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 🚀 Future Enhancements

* AI Mock Interviews
* Video Resume Upload
* Resume Builder
* Company Reviews
* Salary Prediction
* AI Career Roadmap Generator
* Interview Scheduling
* Subscription Plans
* Multi-language Support

---

# 📈 Resume Project Description

CareerPilot AI is a scalable AI-powered job portal built using React, NestJS, MongoDB, Redis, Docker, AWS S3, and OpenAI APIs. The platform enables candidates to receive intelligent job recommendations, AI-powered resume analysis, and real-time application tracking, while recruiters can efficiently manage job postings and candidate pipelines through advanced analytics and automation.

---

# 👨‍💻 Author

Aakash Raj

Full Stack Developer | MERN Stack Specialist

* React.js
* Node.js
* NestJS
* MongoDB
* Docker
* AWS

---

# ⭐ Support

If you found this project useful, consider giving it a star on GitHub and contributing to its development.
