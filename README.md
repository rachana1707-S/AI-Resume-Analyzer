<div align="center">

# 🧠 ResumeAI

### AI-Powered Resume Analyzer & Job Matcher

**Understand how well your resume matches a job before you apply.**

ResumeAI uses semantic NLP to compare resumes with job descriptions, identify matching skills, detect skill gaps, calculate compatibility scores, and generate actionable recommendations.

<br />

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/Python-AI_Service-3776AB?logo=python&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Sentence_Transformers-NLP-FFD21E)
![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?logo=amazonwebservices&logoColor=white)

<br />

[Features](#-features) •
[Architecture](#-system-architecture) •
[Tech Stack](#-tech-stack) •
[Getting Started](#-getting-started) •
[API](#-api-overview) •
[Roadmap](#-roadmap)

</div>

---

## 📌 Overview

ResumeAI is an end-to-end AI application designed to help job seekers understand how closely their resume aligns with a specific job opportunity.

Traditional resume matching systems often depend heavily on exact keyword matches. ResumeAI is designed around **semantic similarity**, allowing the application to compare the meaning and context of resume content with job requirements.

A user can:

1. Upload a resume in PDF format.
2. Paste a target job description.
3. Submit both documents for analysis.
4. Receive an AI-generated compatibility score.
5. Review matching and missing skills.
6. See recommendations for improving alignment with the role.

The project combines **full-stack engineering, NLP, REST APIs, relational data storage, responsive UI design, and cloud-oriented architecture** in one application.

---

## ✨ Features

### 📄 Resume Upload

Upload a resume directly through the dashboard.

- PDF validation
- File size validation
- Drag-and-drop support
- Upload status feedback
- Responsive upload interface

### 🧠 Semantic Resume Matching

ResumeAI compares resume content and job descriptions using NLP embeddings rather than relying entirely on exact keyword matches.

This allows the matching engine to identify semantic relationships between related experience and job requirements.

### 📊 Match Score

The analysis produces a compatibility score representing how closely the resume aligns with the supplied job description.

The dashboard presents the score using:

- percentage score
- visual progress indicator
- compatibility summary
- responsive result cards

### ✅ Matching Skills

Skills detected in both the resume and job description are surfaced as strengths.

Example:

```text
React
Node.js
PostgreSQL
AWS
Python
```

### ⚠️ Skill Gap Detection

ResumeAI identifies relevant skills found in the job description that were not detected in the uploaded resume.

This helps users understand potential gaps between their current resume and the target role.

### 💡 Recommendations

The analysis provides actionable recommendations based on the comparison.

Recommendations are intended to help users understand where their resume could better represent relevant experience.

> ResumeAI does not recommend adding skills or experience the user does not actually possess.

### 📱 Responsive Dashboard

The frontend is designed for:

- desktop
- laptop
- tablet
- mobile

The interface includes:

- fixed desktop sidebar
- sticky navigation
- mobile section navigation
- direct navigation to the analyzer
- automatic navigation to results
- responsive cards and layouts

---

## 🖥️ Application Preview

> Screenshots will be added as the production UI is finalized.

### Dashboard

<!-- Replace with actual screenshot -->
<!--
![ResumeAI Dashboard](docs/images/dashboard.png)
-->

```text
┌──────────────┬──────────────────────────────────────────────┐
│              │ Resume Intelligence          Analyze Resume │
│  ResumeAI    ├──────────────────────────────────────────────┤
│              │                                              │
│  Overview    │  AI-Powered Resume Analysis                  │
│              │                                              │
│  Analyzer    │  Match your resume                           │
│              │  to the right opportunity.                   │
│  Results     │                                              │
│              │  Semantic AI • Match Score • Skill Analysis │
│  History     │                                              │
│  (planned)   │                                              │
└──────────────┴──────────────────────────────────────────────┘
```

### Resume Analyzer

```text
┌──────────────────────────┬──────────────────────────┐
│ 01  RESUME               │ 02  TARGET ROLE          │
│                          │                          │
│        📄                │  Job Description         │
│                          │                          │
│ Drop your resume here    │  Paste job description  │
│ PDF • Max 5 MB           │  here...                 │
│                          │                          │
└──────────────────────────┴──────────────────────────┘

        Resume ✓ → Job ✓ → AI Analysis

              Analyze Resume Match
```

### Analysis Results

```text
┌──────────────────────┬─────────────────────────────┐
│                      │ ANALYSIS SUMMARY            │
│       86%            │                             │
│   Match Score        │ Matched   Missing   Actions │
│   ███████████░       │    8         3        4    │
└──────────────────────┴─────────────────────────────┘

┌──────────────────────┐ ┌───────────────────────────┐
│ MATCHED SKILLS       │ │ SKILL GAPS                │
│                      │ │                           │
│ React  Node.js  AWS  │ │ Docker  Kubernetes       │
└──────────────────────┘ └───────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 💡 AI RECOMMENDATIONS                              │
│                                                     │
│ 01  Recommendation...     02  Recommendation...    │
└─────────────────────────────────────────────────────┘
```

---

## 🏗️ System Architecture

```mermaid
flowchart LR
    U[User] --> F[React Frontend]

    F -->|Resume + Job Description| B[Node.js API]

    B -->|Resume File| P[PDF Processing]
    B -->|Analysis Request| AI[AI / NLP Service]

    P --> T[Extracted Resume Text]
    T --> AI

    AI --> ST[Sentence Transformer Model]

    ST --> E1[Resume Embedding]
    ST --> E2[Job Embedding]

    E1 --> S[Semantic Similarity]
    E2 --> S

    S --> R[Match Score]
    AI --> SK[Skill Analysis]
    AI --> REC[Recommendations]

    B --> DB[(PostgreSQL)]

    R --> B
    SK --> B
    REC --> B

    B --> F
```

### Request Flow

```text
User
 │
 │ Upload PDF + Job Description
 ▼
React Frontend
 │
 │ multipart/form-data
 ▼
Node.js REST API
 │
 ├──── Resume Processing
 │
 ├──── Skill Extraction
 │
 ├──── AI Service
 │       │
 │       └── Sentence Transformers
 │
 ├──── Match Calculation
 │
 └──── PostgreSQL
         │
         ▼
Analysis Result
 │
 ▼
React Dashboard
```

---

## 🧰 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React | User interface |
| Build Tool | Vite | Frontend development/build |
| Styling | Tailwind CSS | Responsive UI |
| Icons | React Icons | Application iconography |
| Backend | Node.js | API and application logic |
| API | Express.js | REST endpoints |
| Database | PostgreSQL | Persistent application data |
| AI | Sentence Transformers | Semantic text embeddings |
| AI Runtime | Python | NLP model service |
| NLP | BERT-based models | Semantic understanding |
| Cloud | AWS | Planned production infrastructure |
| Version Control | Git + GitHub | Source control |

---

## 🧠 AI Matching Pipeline

The core analysis pipeline follows several stages.

```text
Resume PDF
     │
     ▼
Text Extraction
     │
     ▼
Text Cleaning
     │
     ├──────────────────┐
     ▼                  ▼
Resume Text       Job Description
     │                  │
     ▼                  ▼
Sentence          Sentence
Embedding         Embedding
     │                  │
     └────────┬─────────┘
              ▼
       Semantic Similarity
              │
       ┌──────┴──────┐
       ▼             ▼
 Match Score     Skill Analysis
       │             │
       └──────┬──────┘
              ▼
       Recommendations
```

### Why Sentence Transformers?

Keyword matching can miss relationships between phrases that have similar meanings but use different wording.

Sentence Transformers generate dense vector representations of text. Resume and job-description embeddings can therefore be compared using semantic similarity.

Conceptually:

```text
Resume text
     ↓
Embedding vector A

Job description
     ↓
Embedding vector B

A + B
  ↓
Cosine similarity
  ↓
Compatibility score
```

---

## 📂 Project Structure

```text
smart-resume-analyzer/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   │
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
│   ├── package.json
│   └── ...
│
├── ai-service/
│   └── ...
│
├── database/
│   └── ...
│
├── .gitignore
└── README.md
```

> The exact structure may evolve as authentication, analysis history, cloud infrastructure, and production deployment are added.

---

## 🚀 Getting Started

### Prerequisites

Install the following before running the project locally:

- Node.js 18+
- npm
- Python 3.x
- PostgreSQL
- Git

Check your installations:

```bash
node --version
npm --version
python3 --version
psql --version
git --version
```

---

## 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
```

```bash
cd smart-resume-analyzer
```

---

## 2️⃣ Frontend Setup

Move into the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## 3️⃣ Backend Setup

Open another terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend using the script configured in `backend/package.json`.

For example:

```bash
npm run dev
```

---

## 4️⃣ AI Service Setup

Move into the AI service:

```bash
cd ai-service
```

Create a Python virtual environment:

```bash
python3 -m venv venv
```

Activate it on macOS/Linux:

```bash
source venv/bin/activate
```

Install the dependencies defined by the AI service:

```bash
pip install -r requirements.txt
```

Start the service using the command configured by the project.

---

## 5️⃣ PostgreSQL Setup

Create the local database:

```sql
CREATE DATABASE resume_analyzer;
```

Then configure the backend database connection through environment variables.

Example:

```env
DATABASE_URL=postgresql://USERNAME:PASSWORD@localhost:5432/resume_analyzer
```

Do not commit real credentials.

---

## 🔐 Environment Variables

Environment-specific configuration should be stored outside source control.

Example backend environment:

```env
PORT=5000
DATABASE_URL=postgresql://USERNAME:PASSWORD@localhost:5432/resume_analyzer
AI_SERVICE_URL=http://localhost:8000
```

Example frontend environment:

```env
VITE_API_URL=http://localhost:5000
```

Create local `.env` files where required.

Ensure `.gitignore` contains:

```gitignore
.env
.env.*
!.env.example

node_modules/
dist/

venv/
.venv/
__pycache__/

.DS_Store
```

For a production repository, provide `.env.example` files containing variable names but **never secrets**.

---

## 🔌 API Overview

The frontend communicates with the backend through REST APIs.

### Analyze Resume

```http
POST /analyses
```

Request:

```text
Content-Type: multipart/form-data
```

Example form fields:

```text
resume=<PDF file>
jobDescription=<job description text>
```

Example response shape:

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

PostgreSQL provides persistent storage for application data.

As the project evolves, persistence will support capabilities such as:

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

This enables future functionality including analysis history and trend insights.

---

## ☁️ AWS Deployment Architecture

The project is being designed to support deployment using AWS services while keeping the architecture practical for a portfolio-scale application.

Planned production architecture:

```mermaid
flowchart TD
    USER[User Browser]

    USER --> CF[CloudFront]
    CF --> S3[S3 Frontend]

    USER --> API[Backend API]

    API --> AI[AI Service]
    API --> RDS[(Amazon RDS PostgreSQL)]

    AI --> MODEL[Sentence Transformer Model]

    API --> LOGS[CloudWatch]

    S3 --> CF
```

Potential AWS services:

| AWS Service | Purpose |
|---|---|
| Amazon S3 | Static frontend hosting |
| CloudFront | CDN and HTTPS delivery |
| Compute service | Backend/API hosting |
| Amazon RDS | PostgreSQL database |
| CloudWatch | Logs and monitoring |
| IAM | Access control |

> AWS deployment is part of the project roadmap and should not be interpreted as currently deployed infrastructure until the production environment is completed.

---

## 🔒 Security Considerations

The production architecture is being designed around standard security practices:

- environment-based secrets
- no credentials committed to Git
- server-side file validation
- PDF-only upload restrictions
- file size limits
- database credentials stored outside source code
- CORS configuration
- request validation
- secure cloud IAM permissions
- HTTPS for production traffic

Additional controls will be added as authentication and cloud deployment are implemented.

---

## 📱 Responsive Design

ResumeAI is designed around multiple viewport sizes.

| Device | Target |
|---|---:|
| Mobile | 390px+ |
| Large Mobile | 430px+ |
| Tablet | 768px+ |
| Laptop | 1024px+ |
| Desktop | 1440px+ |

Desktop users receive a persistent sidebar, while smaller devices use compact section navigation.

---

## 🎨 Design System

The interface uses a custom four-color palette:

| Color | Hex | Usage |
|---|---|---|
| Deep Plum | `#450C3F` | Navigation, headings, primary actions |
| Green | `#B9D175` | Success states and accents |
| Light Green | `#D9EFBD` | Tags, badges and highlights |
| Cream | `#F5FBDA` | Subtle accent surfaces |
| Off White | `#FCFCF8` | Main application background |

The UI also uses:

- subtle gradients
- responsive typography
- dark borders
- layered shadows
- sticky navigation
- reusable cards
- interactive hover states

---

## 🧪 Testing

Before committing frontend changes, test the application at several viewport sizes:

```text
390px
768px
1024px
1440px
```

Core workflow to verify:

```text
Upload Resume
      ↓
Enter Job Description
      ↓
Run Analysis
      ↓
Receive Match Score
      ↓
Review Matching Skills
      ↓
Review Missing Skills
      ↓
Review Recommendations
```

Additional automated testing will be added as the project matures.

---

## 🛣️ Roadmap

### Phase 1 — Core Platform

- [x] React application
- [x] Responsive dashboard
- [x] Resume PDF upload UI
- [x] Job description input
- [x] Match score interface
- [x] Matching skills interface
- [x] Skill-gap interface
- [x] Recommendation interface
- [x] Responsive sidebar navigation

### Phase 2 — Application Features

- [ ] Analysis history
- [ ] Individual analysis details
- [ ] Delete previous analyses
- [ ] Search/filter analysis history
- [ ] User authentication
- [ ] User-specific analysis storage

### Phase 3 — AI Improvements

- [ ] Improved skill extraction
- [ ] Weighted skill matching
- [ ] Resume section detection
- [ ] Experience relevance scoring
- [ ] Education matching
- [ ] Explainable scoring
- [ ] Recommendation improvements

### Phase 4 — Production Engineering

- [ ] Automated backend tests
- [ ] Frontend tests
- [ ] API integration tests
- [ ] Docker containers
- [ ] CI/CD pipeline
- [ ] Production logging
- [ ] Error monitoring
- [ ] Rate limiting

### Phase 5 — AWS

- [ ] Deploy frontend
- [ ] Deploy backend
- [ ] Deploy AI service
- [ ] Provision PostgreSQL
- [ ] Configure production networking
- [ ] Configure HTTPS
- [ ] Configure monitoring
- [ ] Production smoke testing

---

## 📈 Future Improvements

Several extensions can make ResumeAI more useful while demonstrating deeper system-design concepts:

**Resume intelligence**

- resume section parsing
- experience-level matching
- skill importance weighting
- role-specific scoring

**Job intelligence**

- multiple job comparison
- saved job descriptions
- company/role organization
- job requirement categorization

**Analytics**

- score history
- commonly missing skills
- improvement trends
- dashboard insights

**Platform**

- authentication
- saved analyses
- user profiles
- cloud deployment
- monitoring and observability

---

## 🧩 Engineering Goals

ResumeAI is built to demonstrate practical experience across multiple layers of software engineering:

```text
Frontend Engineering
        +
REST API Development
        +
Database Design
        +
Natural Language Processing
        +
Machine Learning Integration
        +
Responsive Product Design
        +
Cloud Architecture
        =
End-to-End AI System
```

The goal is not only to call an AI model, but to build the surrounding software system required to turn that model into a usable application.

---

## 🤝 Contributing

This project is currently under active development.

For development work:

```bash
git checkout -b feature/feature-name
```

After making changes:

```bash
git add .
git commit -m "feat: describe the feature"
```

Commit messages follow a simple conventional style:

```text
feat:     new functionality
fix:      bug fix
refactor: structural code improvement
style:    UI or styling improvement
docs:     documentation
test:     testing changes
chore:    tooling or maintenance
```

---

## 📄 License

This project is intended for educational, portfolio, and software engineering demonstration purposes.

A formal open-source license can be added before accepting external contributions or redistribution.

---

<div align="center">

### 🧠 ResumeAI

**AI-powered resume intelligence for smarter job matching.**

Built with React • Node.js • PostgreSQL • Sentence Transformers • AWS

</div>