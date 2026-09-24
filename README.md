<div align="center">

# 🧠 ResumeAI

### AI-Powered Resume Analyzer & Job Matcher

**Analyze your resume. Match it with a job. Identify skill gaps. Improve before you apply.**

<br />

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/Python-AI_Service-3776AB?logo=python&logoColor=white)
![NLP](https://img.shields.io/badge/Sentence_Transformers-NLP-FFD21E)
![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?logo=amazonwebservices&logoColor=white)

<br />

[Overview](#-overview) •
[Features](#-features) •
[Preview](#-application-preview) •
[Architecture](#-system-architecture) •
[Tech Stack](#-tech-stack) •
[Setup](#-getting-started) •
[Roadmap](#-roadmap)

</div>

---

## 📌 Overview

**ResumeAI** is an end-to-end AI-powered application that compares a candidate's resume with a target job description.

Instead of relying only on exact keyword matching, the application uses **semantic NLP techniques** to understand the relationship between resume content and job requirements.

Users can upload a resume, provide a job description, and receive:

- 📊 Resume-to-job match score
- ✅ Matching skills
- ⚠️ Missing or underrepresented skills
- 💡 Actionable recommendations

The project combines **React, Node.js, PostgreSQL, Python, Sentence Transformers, and cloud-oriented architecture** into a complete AI application.

---

## ✨ Features

### 📄 Resume Upload

Upload a resume directly through the analysis dashboard.

- PDF validation
- File-size validation
- Drag-and-drop support
- Selected-file preview
- Responsive upload interface

### 💼 Job Description Analysis

Paste a target job description and compare its requirements with the uploaded resume.

### 🧠 Semantic AI Matching

ResumeAI uses semantic text representations to compare the meaning of resume content with job requirements rather than depending entirely on identical keywords.

### 📊 Match Score

Receive a visual compatibility score showing how closely the resume aligns with the target role.

### ✅ Skill Analysis

The results dashboard separates skills into:

- **Matched Skills** — detected in both the resume and job description
- **Skill Gaps** — relevant job skills not detected in the resume

### 💡 Recommendations

Receive actionable suggestions for representing relevant experience more clearly.

> Skills or experience should only be added to a resume when the candidate genuinely possesses them.

### 📱 Responsive Dashboard

The application supports desktop, tablet, and mobile layouts with:

- persistent desktop sidebar
- mobile navigation
- direct analyzer navigation
- responsive cards
- automatic navigation to results

---

## 🖥️ Application Preview

### 🏠 Dashboard

The main dashboard provides an overview of ResumeAI and quick access to the resume analyzer.

![ResumeAI Dashboard](docs/images/dashboard.png)

---

### 📄 Resume Analyzer

Upload a PDF resume and paste the target job description from one analysis workspace.

![ResumeAI Resume Analyzer](docs/images/analyzer.png)

---

### 📊 AI Analysis Results

Review the match score, matching skills, skill gaps, and recommendations generated from the analysis.

![ResumeAI Analysis Results](docs/images/analysis-results.png)

---

### 📱 Responsive Experience

The dashboard adapts to smaller screens with mobile-friendly navigation and stacked content.

<p align="center">
  <img
    src="docs/images/mobile-dashboard.png"
    alt="ResumeAI Mobile Dashboard"
    width="180"
  />
</p>

---

## 🏗️ System Architecture

ResumeAI separates the frontend, backend API, AI processing, and persistence layers.

```mermaid
flowchart LR
    USER[User] --> UI[React Frontend]

    UI -->|Resume + Job Description| API[Node.js API]

    API --> PDF[PDF Processing]
    PDF --> TEXT[Resume Text]

    TEXT --> AI[Python AI Service]
    API -->|Job Description| AI

    AI --> MODEL[Sentence Transformers]

    MODEL --> MATCH[Semantic Matching]
    MATCH --> SCORE[Match Score]
    MATCH --> SKILLS[Skill Analysis]
    MATCH --> REC[Recommendations]

    API --> DB[(PostgreSQL)]

    SCORE --> API
    SKILLS --> API
    REC --> API

    API --> UI
```

### Analysis Flow

```text
Resume PDF + Job Description
             │
             ▼
       Node.js REST API
             │
       Resume Processing
             │
             ▼
       Python AI Service
             │
             ▼
     Sentence Transformers
             │
     ┌───────┼────────┐
     ▼       ▼        ▼
   Score   Skills   Suggestions
     │       │        │
     └───────┼────────┘
             ▼
      Results Dashboard
```

---

## 🧠 How the AI Matching Works

ResumeAI is designed to use Sentence Transformers to generate semantic representations of the resume and job description.

Conceptually:

```text
Resume Text
     │
     ▼
Resume Embedding
     │
     ├──────────────┐
                    ▼
             Semantic Similarity
                    ▲
     ├──────────────┘
     │
Job Embedding
     ▲
     │
Job Description
```

The similarity result contributes to the compatibility score while skill analysis identifies matching and missing technologies.

This approach helps detect related concepts even when the resume and job description use different wording.

---

## 🧰 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React | Component-based user interface |
| Build Tool | Vite | Development and production builds |
| Styling | Tailwind CSS | Responsive UI |
| Icons | React Icons | Interface iconography |
| Backend | Node.js | Server-side application logic |
| API | Express.js | REST API |
| Database | PostgreSQL | Relational persistence |
| AI Runtime | Python | NLP inference service |
| NLP | Sentence Transformers | Semantic embeddings |
| Model Family | BERT-based models | Contextual text representation |
| Cloud | AWS | Planned production deployment |
| Version Control | Git + GitHub | Source control |

---

## 📂 Project Structure

```text
smart-resume-analyzer/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   │   ├── AnalysisResults.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── MatchScore.jsx
│   │   │   └── ResumeUpload.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   └── package.json
│
├── ai-service/
│   └── ...
│
├── database/
│   └── ...
│
├── docs/
│   └── images/
│       ├── dashboard.png
│       ├── analyzer.png
│       ├── analysis-results.png
│       └── mobile-dashboard.png
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Install:

- Node.js 18+
- npm
- Python 3.x
- PostgreSQL
- Git

Verify the installations:

```bash
node --version
npm --version
python3 --version
psql --version
git --version
```

---

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd smart-resume-analyzer
```

---

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

The Vite development server normally runs at:

```text
http://localhost:5173
```

---

### 3. Start the Backend

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

---

### 4. Start the AI Service

Open another terminal:

```bash
cd ai-service
```

Create the virtual environment:

```bash
python3 -m venv venv
```

Activate it:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Then start the AI service using the command configured for the project.

---

### 5. Configure PostgreSQL

Create the application database:

```sql
CREATE DATABASE resume_analyzer;
```

If PostgreSQL command-line tools are configured, you can alternatively use:

```bash
createdb resume_analyzer
```

---

## 🔐 Environment Variables

Keep credentials outside source control.

### Backend

```env
PORT=5000
DATABASE_URL=postgresql://USERNAME:PASSWORD@localhost:5432/resume_analyzer
AI_SERVICE_URL=http://localhost:8000
```

### Frontend

```env
VITE_API_URL=http://localhost:5000
```

Do not commit real passwords, tokens, API keys, or database credentials.

---

## 🔌 API Overview

### Analyze Resume

```http
POST /analyses
```

Request type:

```text
multipart/form-data
```

### Request

| Field | Type | Description |
|---|---|---|
| `resume` | File | Resume PDF |
| `jobDescription` | String | Target job description |

### Example Response

```json
{
  "analysis": {
    "match_score": 86,
    "matched_skills": [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS"
    ],
    "missing_skills": [
      "Docker",
      "Kubernetes"
    ],
    "suggestions": [
      "Highlight relevant cloud deployment experience.",
      "Include containerization experience if applicable."
    ]
  }
}
```

---

## 🗄️ Database

PostgreSQL provides the relational persistence layer.

The analysis data model is designed to support:

```text
Analysis
├── id
├── resume metadata
├── job description
├── match score
├── matched skills
├── missing skills
├── recommendations
└── created timestamp
```

This will support features such as analysis history, saved results, filtering, and future analytics.

---

## ☁️ AWS Deployment

ResumeAI is being designed for cloud deployment while keeping the infrastructure practical for a portfolio-scale application.

### Target Architecture

```mermaid
flowchart LR
    USER[User] --> CF[CloudFront]
    CF --> S3[S3 Frontend]

    USER --> API[Backend API]

    API --> AI[AI Service]
    API --> RDS[(RDS PostgreSQL)]

    API --> CW[CloudWatch]
    AI --> CW
```

### Planned AWS Services

| Service | Purpose |
|---|---|
| Amazon S3 | Frontend assets |
| Amazon CloudFront | CDN and frontend delivery |
| AWS Compute | Backend and AI services |
| Amazon RDS | PostgreSQL |
| Amazon CloudWatch | Logs and monitoring |
| AWS IAM | Access control |

The deployment will prioritize **AWS Free Tier eligible or low-cost resources where practical**.

> AWS deployment is currently part of the project roadmap and is not marked as completed until the production environment is deployed.

---

## 🔒 Security

The project follows several production-oriented practices:

- credentials excluded from Git
- environment-based configuration
- PDF validation
- file-size restrictions
- server-side request validation
- database configuration outside source code

Planned production improvements include HTTPS, authentication, authorization, rate limiting, secure headers, restricted CORS, and least-privilege AWS IAM permissions.

---

## 🎨 Design System

ResumeAI uses a custom ColorHunt-inspired palette:

| Color | Hex | Usage |
|---|---|---|
| 🟣 Deep Plum | `#450C3F` | Navigation, headings, primary actions |
| 🟢 Green | `#B9D175` | Success states and accents |
| 🌿 Light Green | `#D9EFBD` | Tags and secondary surfaces |
| 🟡 Cream | `#F5FBDA` | Light accents |
| ⚪ Off White | `#FCFCF8` | Main application background |

The interface uses responsive typography, subtle gradients, dark borders, layered shadows, reusable cards, and interactive states.

---

## 🛣️ Roadmap

### ✅ Core Application

- [x] React + Vite frontend
- [x] Responsive dashboard
- [x] Desktop and mobile navigation
- [x] Resume PDF upload interface
- [x] Job description workspace
- [x] Resume analysis request flow
- [x] Match score interface
- [x] Matched skills
- [x] Skill gaps
- [x] Recommendation interface
- [x] Responsive results dashboard

### 🔄 Next

- [ ] Persist completed analyses
- [ ] Analysis history
- [ ] Search and filter history
- [ ] User authentication
- [ ] User-specific analyses
- [ ] Improved skill extraction
- [ ] Weighted semantic matching
- [ ] Explainable scoring
- [ ] Automated tests
- [ ] Docker containers
- [ ] CI/CD pipeline
- [ ] AWS deployment
- [ ] Production monitoring

---

## 📄 License

This project is currently intended for educational, portfolio, and software engineering demonstration purposes.

A formal open-source license can be added before accepting external contributions or redistribution.

---

## 👩‍💻 Author

**Rachana Sudhakar**

Software Engineer focused on full-stack development, AI-powered applications, backend systems, and cloud technologies.

---

<div align="center">

## 🧠 ResumeAI

### From resume to role — understand the match.

**React • Node.js • PostgreSQL • Sentence Transformers • AWS**

<br />

⭐ If you find this project useful, consider starring the repository.

</div>
