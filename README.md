<div align="center">

# 🧠 ResumeAI

### AI-Powered Resume Analyzer & Job Matcher

**Analyze your resume. Match it with a job. Understand what is missing. Improve before you apply.**

<br />

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/Python-AI_Service-3776AB?logo=python&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Sentence_Transformers-NLP-FFD21E)
![AWS](https://img.shields.io/badge/AWS-Cloud-232F3E?logo=amazonwebservices&logoColor=white)

<br />

[Overview](#-overview) •
[Features](#-features) •
[Demo](#-application-preview) •
[Architecture](#-system-architecture) •
[Tech Stack](#-tech-stack) •
[Setup](#-getting-started) •
[API](#-api-overview) •
[Roadmap](#-roadmap)

</div>

---

## 📌 Overview

**ResumeAI** is an end-to-end AI-powered resume analysis platform that compares a candidate's resume with a target job description.

Instead of relying only on exact keyword matching, ResumeAI is designed to use **semantic NLP techniques** to understand the relationship between resume content and job requirements.

The platform analyzes both documents and presents the results through an interactive dashboard.

### ResumeAI helps users:

- 📄 Upload a resume in PDF format
- 💼 Compare it with a target job description
- 🧠 Perform semantic resume-to-job analysis
- 📊 Generate a resume compatibility score
- ✅ Identify matching skills
- ⚠️ Detect missing or underrepresented skills
- 💡 Receive actionable improvement suggestions

The project combines **AI/NLP, full-stack development, REST APIs, PostgreSQL, responsive UI design, and cloud-oriented architecture** into one end-to-end system.

---

## ✨ Features

### 📄 Resume Upload

Users can upload their resume directly through the analysis workspace.

Current upload functionality includes:

- PDF file validation
- Maximum file-size validation
- Drag-and-drop upload
- File selection through the browser
- Selected-file preview
- Upload readiness status
- Responsive upload interface

---

### 💼 Job Description Analysis

Users can paste the complete description of the position they are targeting.

The job description becomes the reference document used by the matching pipeline to evaluate resume alignment.

---

### 🧠 Semantic AI Matching

ResumeAI is designed around semantic comparison rather than relying exclusively on exact keyword overlap.

The AI pipeline converts resume and job-description text into numerical representations that can be compared for semantic similarity.

This allows related concepts to be recognized even when they are expressed using different wording.

---

### 📊 Resume Match Score

The application calculates a compatibility score representing the alignment between the uploaded resume and job description.

The dashboard presents the result through:

- percentage score
- visual progress indicator
- compatibility summary
- analysis statistics
- responsive score cards

---

### ✅ Matching Skills

ResumeAI identifies skills appearing in both the resume and target job requirements.

Example:

```text
React
Node.js
PostgreSQL
AWS
Python
```

These are displayed as strengths within the results dashboard.

---

### ⚠️ Skill Gap Detection

The application identifies relevant skills found in the job description that were not detected in the resume.

This gives users a clearer picture of the gap between their current resume and the target role.

> Missing skills should only be added to a resume when the candidate genuinely has that experience.

---

### 💡 AI Recommendations

The results dashboard provides actionable recommendations based on the resume-to-job comparison.

Recommendations can help users identify where relevant existing experience could be represented more clearly.

---

### 🧭 Dashboard Navigation

The application includes a dashboard-oriented navigation system with:

- fixed desktop sidebar
- sticky top navigation
- mobile section navigation
- direct access to the analyzer
- direct access to results
- smooth section navigation
- automatic navigation to results after analysis

This avoids forcing users to repeatedly scroll through the entire dashboard.

---

### 📱 Responsive Design

The interface is designed to adapt across:

- mobile
- tablet
- laptop
- desktop

Desktop users receive a persistent sidebar while smaller screens use compact navigation.

---

## 🖥️ Application Preview

### 🏠 Dashboard

![ResumeAI Dashboard](docs/images/dashboard.png)

The main dashboard introduces the platform and provides quick navigation to the resume analyzer and results.

---

### 📄 Resume Analyzer

![ResumeAI Resume Analyzer](docs/images/analyzer.png)

The analysis workspace separates resume upload and job-description input into a responsive two-column interface.

Users can upload their PDF, paste a job description, and start the AI analysis from one workspace.

---

### 📊 AI Analysis Results

![ResumeAI Analysis Results](docs/images/analysis-results.png)

The results dashboard displays:

- resume match score
- number of matching skills
- identified skill gaps
- recommendation count
- matching skill details
- missing skill details
- AI-generated recommendations

---

### 📱 Responsive Experience

The dashboard automatically adapts to smaller screens with mobile-friendly navigation and stacked content.
<p align="center">
  <img src="docs/images/mobile-dashboard.png" alt="ResumeAI Mobile Dashboard" width="220">
</p>

---

## 🏗️ System Architecture

ResumeAI separates the user interface, application API, AI processing, and persistent data layers.

```mermaid
flowchart LR
    USER[User]

    USER --> UI[React Frontend]

    UI -->|Resume + Job Description| API[Node.js REST API]

    API --> PDF[PDF Processing]

    PDF --> TEXT[Resume Text]

    TEXT --> AI[AI / NLP Service]

    API -->|Job Description| AI

    AI --> MODEL[Sentence Transformer Model]

    MODEL --> RE[Resume Embedding]
    MODEL --> JE[Job Embedding]

    RE --> SIM[Semantic Similarity]
    JE --> SIM

    SIM --> SCORE[Match Score]

    AI --> SKILLS[Skill Analysis]
    AI --> REC[Recommendations]

    API --> DB[(PostgreSQL)]

    SCORE --> API
    SKILLS --> API
    REC --> API

    API --> UI
```

---

## 🔄 Application Flow

```text
User
 │
 │ Upload Resume
 │ Paste Job Description
 ▼
React Frontend
 │
 │ multipart/form-data
 ▼
Node.js API
 │
 ├── Validate Request
 │
 ├── Process PDF
 │
 ├── Extract Resume Text
 │
 └── Send Content for AI Analysis
              │
              ▼
        NLP / AI Service
              │
       ┌──────┴──────┐
       │             │
       ▼             ▼
 Resume Embedding  Job Embedding
       │             │
       └──────┬──────┘
              ▼
       Semantic Similarity
              │
       ┌──────┼──────────┐
       ▼      ▼          ▼
     Score  Skills  Recommendations
       │      │          │
       └──────┼──────────┘
              ▼
          Node.js API
              │
              ▼
       PostgreSQL / Response
              │
              ▼
        React Dashboard
```

---

## 🧠 AI Matching Pipeline

The matching process can be represented as:

```text
Resume PDF
    │
    ▼
Text Extraction
    │
    ▼
Resume Text
    │
    ├────────────────────────┐
    │                        │
    ▼                        ▼
Resume Content        Job Description
    │                        │
    ▼                        ▼
Sentence Embedding    Sentence Embedding
    │                        │
    └───────────┬────────────┘
                ▼
         Semantic Similarity
                │
       ┌────────┴─────────┐
       ▼                  ▼
   Match Score       Skill Analysis
       │                  │
       └─────────┬────────┘
                 ▼
          Recommendations
```

### Why Sentence Transformers?

Simple keyword matching can fail when a resume and job description describe similar experience using different language.

Sentence Transformers create dense numerical representations called **embeddings**.

Conceptually:

```text
Resume
   │
   ▼
Embedding Vector A

Job Description
   │
   ▼
Embedding Vector B

Vector A + Vector B
        │
        ▼
Cosine Similarity
        │
        ▼
Semantic Match Score
```

This allows the system to compare the meaning of the documents rather than only counting identical words.

---

## 🧰 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React | Component-based user interface |
| Build Tool | Vite | Fast frontend development and builds |
| Styling | Tailwind CSS | Responsive application styling |
| Icons | React Icons | Interface iconography |
| Backend | Node.js | Server-side application logic |
| API | Express.js | REST API layer |
| Database | PostgreSQL | Persistent relational storage |
| AI Runtime | Python | NLP inference service |
| NLP | Sentence Transformers | Semantic text embeddings |
| Model Family | BERT-based models | Contextual text representation |
| Cloud | AWS | Planned production infrastructure |
| Version Control | Git | Source control |
| Repository | GitHub | Project hosting and collaboration |

---

## 📂 Project Structure

```text
smart-resume-analyzer/
│
├── frontend/
│   │
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

The structure will continue evolving as authentication, analysis history, testing, and cloud infrastructure are implemented.

---

# 🚀 Getting Started

## Prerequisites

Install the following tools before running ResumeAI locally:

- Node.js 18+
- npm
- Python 3.x
- PostgreSQL
- Git

Verify your environment:

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
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Move into the project:

```bash
cd smart-resume-analyzer
```

---

## 2️⃣ Frontend Setup

Move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

## 3️⃣ Backend Setup

Open another terminal.

From the project root:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend using the development script configured in `package.json`:

```bash
npm run dev
```

---

## 4️⃣ AI Service Setup

Open another terminal.

From the project root:

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

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the AI service using the command configured by the project.

---

## 5️⃣ PostgreSQL Setup

If PostgreSQL is installed locally, create the application database.

Using PostgreSQL:

```sql
CREATE DATABASE resume_analyzer;
```

Or from the macOS terminal, when PostgreSQL command-line utilities are installed:

```bash
createdb resume_analyzer
```

If `createdb` is unavailable, connect through `psql`, pgAdmin, Postgres.app, or your configured PostgreSQL environment and execute:

```sql
CREATE DATABASE resume_analyzer;
```

---

## 🔐 Environment Variables

Secrets and environment-specific configuration should never be committed directly to Git.

### Backend

Example:

```env
PORT=5000
DATABASE_URL=postgresql://USERNAME:PASSWORD@localhost:5432/resume_analyzer
AI_SERVICE_URL=http://localhost:8000
```

### Frontend

Example:

```env
VITE_API_URL=http://localhost:5000
```

### AI Service

Environment variables required by the AI service should be stored in its own local `.env` file when necessary.

---

## 📄 `.env.example`

For production-quality repository documentation, commit example environment files containing variable names without real credentials.

Example:

```env
PORT=
DATABASE_URL=
AI_SERVICE_URL=
```

Never commit:

```env
DATABASE_URL=postgresql://real-user:real-password@...
```

---

## 🙈 `.gitignore`

The repository should exclude local dependencies, build artifacts, operating-system files, virtual environments, and secrets.

Example:

```gitignore
# Environment
.env
.env.*
!.env.example

# Node
node_modules/
dist/

# Python
venv/
.venv/
__pycache__/
*.pyc

# Logs
*.log
logs/

# macOS
.DS_Store

# IDE
.vscode/
.idea/
```

---

# 🔌 API Overview

The React frontend communicates with the backend through REST APIs.

## Analyze Resume

```http
POST /analyses
```

### Content Type

```text
multipart/form-data
```

### Request Fields

| Field | Type | Description |
|---|---|---|
| `resume` | File | Resume PDF |
| `jobDescription` | String | Target job description |

Example conceptual request:

```text
resume = resume.pdf
jobDescription = "We are looking for a Software Engineer..."
```

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

PostgreSQL is used as the relational persistence layer.

The analysis model is designed to support information such as:

```text
Analysis
│
├── id
├── resume metadata
├── job description
├── match score
├── matched skills
├── missing skills
├── recommendations
└── created timestamp
```

Persisting analysis data will allow ResumeAI to support features such as:

- previous analysis history
- detailed analysis views
- user-specific analyses
- analytics
- comparison over time

---

# ☁️ AWS Cloud Architecture

ResumeAI is intended to become a cloud-deployed application.

The target architecture keeps the frontend, backend, AI service, database, and monitoring responsibilities separated.

```mermaid
flowchart TD
    USER[User Browser]

    USER --> CF[Amazon CloudFront]

    CF --> S3[Amazon S3<br/>React Production Build]

    USER --> API[Backend API]

    API --> AI[AI / NLP Service]

    API --> RDS[(Amazon RDS<br/>PostgreSQL)]

    AI --> MODEL[Sentence Transformer Model]

    API --> CW[Amazon CloudWatch]

    AI --> CW
```

### Planned AWS Services

| AWS Service | Responsibility |
|---|---|
| Amazon S3 | Host production frontend assets |
| Amazon CloudFront | CDN and frontend delivery |
| AWS Compute | Run backend and AI services |
| Amazon RDS | Managed PostgreSQL |
| Amazon CloudWatch | Application logs and monitoring |
| AWS IAM | Cloud permissions and access control |

> AWS deployment is currently part of the development roadmap. The README will be updated with the final infrastructure once deployment is completed.

---

## 💰 Cloud Cost Strategy

The cloud architecture is intended to remain appropriate for a portfolio-scale project.

Development decisions will prioritize:

- AWS Free Tier eligible resources where practical
- low-cost compute
- controlled database usage
- minimal idle resources
- resource cleanup when infrastructure is not required
- monitoring usage to avoid unexpected cloud costs

> AWS Free Tier eligibility, limits, and pricing can change, so current AWS pricing should always be checked before provisioning resources.

---

# 🔒 Security

The application is being developed with production-oriented security practices in mind.

### Current / Architectural Practices

- environment-based configuration
- credentials excluded from Git
- server-side request validation
- PDF file-type validation
- file-size restrictions
- database configuration outside source code
- controlled frontend/backend communication

### Planned Production Controls

- authentication
- authorization
- HTTPS
- production CORS policy
- API rate limiting
- secure HTTP headers
- AWS IAM least-privilege permissions
- centralized logging
- request monitoring
- production error handling
- upload security improvements

---

# 📱 Responsive Design

ResumeAI is designed around several target viewport sizes.

| Device | Target Width |
|---|---:|
| Mobile | 390px+ |
| Large Mobile | 430px+ |
| Tablet | 768px+ |
| Laptop | 1024px+ |
| Desktop | 1440px+ |

### Desktop

Desktop users receive:

- persistent sidebar
- sticky top navigation
- full-width analysis workspace
- multi-column results dashboard

### Mobile

Mobile users receive:

- compact application header
- section navigation
- stacked upload workspace
- stacked result cards
- touch-friendly controls

---

# 🎨 Design System

ResumeAI uses the following core palette:

| Color | Hex | Usage |
|---|---|---|
| 🟣 Deep Plum | `#450C3F` | Sidebar, headings, primary actions |
| 🟢 Green | `#B9D175` | Success states and accents |
| 🌿 Light Green | `#D9EFBD` | Tags, highlights, secondary surfaces |
| 🟡 Cream | `#F5FBDA` | Light accents |
| ⚪ Off White | `#FCFCF8` | Main application background |

The interface also uses:

- subtle gradients
- dark borders
- layered shadows
- responsive typography
- rounded application cards
- hover interactions
- sticky navigation
- reusable component styling

The design intentionally limits the amount of yellow/cream used across large surfaces to maintain a clean professional appearance.

---

# 🧪 Testing

Before committing frontend changes, test the application at multiple viewport sizes:

```text
390px
768px
1024px
1440px
```

### Core User Flow

```text
Open Dashboard
      │
      ▼
Navigate to Analyzer
      │
      ▼
Upload Resume
      │
      ▼
Paste Job Description
      │
      ▼
Analyze Resume Match
      │
      ▼
AI Processing
      │
      ▼
Results Dashboard
      │
      ├── Match Score
      ├── Matching Skills
      ├── Skill Gaps
      └── Recommendations
```

### Manual Checks

Verify:

- valid PDF upload
- invalid file rejection
- maximum file-size validation
- empty job-description validation
- backend request
- loading state
- backend error state
- successful analysis
- automatic results navigation
- mobile layout
- tablet layout
- desktop layout

Automated testing will be expanded as the application matures.

---

# 🛣️ Roadmap

## Phase 1 — Core Application

- [x] React + Vite frontend
- [x] Tailwind CSS interface
- [x] Responsive dashboard
- [x] Desktop sidebar
- [x] Mobile navigation
- [x] Resume PDF upload interface
- [x] Job description workspace
- [x] Resume analysis request flow
- [x] Match score interface
- [x] Matched skills interface
- [x] Missing skills interface
- [x] Recommendation interface
- [x] Responsive results dashboard

---

## Phase 2 — Persistence & History

- [ ] Store completed analyses
- [ ] Analysis history page
- [ ] Individual analysis details
- [ ] Delete previous analyses
- [ ] Search analysis history
- [ ] Filter previous analyses
- [ ] Analysis timestamps

---

## Phase 3 — Authentication

- [ ] User registration
- [ ] User login
- [ ] Password hashing
- [ ] JWT authentication
- [ ] Protected routes
- [ ] User-specific analysis history
- [ ] Logout functionality

---

## Phase 4 — AI Improvements

- [ ] Improved skill extraction
- [ ] Weighted skill matching
- [ ] Resume section detection
- [ ] Experience relevance scoring
- [ ] Education matching
- [ ] Explainable scoring
- [ ] Improved recommendation generation
- [ ] Model performance evaluation

---

## Phase 5 — Production Engineering

- [ ] Backend unit tests
- [ ] Frontend component tests
- [ ] API integration tests
- [ ] AI pipeline tests
- [ ] Dockerize backend
- [ ] Dockerize AI service
- [ ] CI/CD pipeline
- [ ] API rate limiting
- [ ] Structured application logging
- [ ] Production error handling
- [ ] Health-check endpoints

---

## Phase 6 — AWS Deployment

- [ ] Create AWS infrastructure
- [ ] Deploy frontend
- [ ] Deploy Node.js API
- [ ] Deploy AI service
- [ ] Provision PostgreSQL
- [ ] Configure environment secrets
- [ ] Configure HTTPS
- [ ] Configure CloudFront
- [ ] Configure CloudWatch
- [ ] Production smoke testing
- [ ] Configure cost monitoring

---

# 🔭 Future Improvements

### Resume Intelligence

- resume section parsing
- role-specific resume analysis
- experience-level matching
- skill importance weighting
- education relevance analysis
- project relevance scoring

### Job Intelligence

- compare one resume against multiple jobs
- save target jobs
- categorize job requirements
- distinguish required and preferred qualifications

### Analytics

- score history
- improvement trends
- commonly missing skills
- skill-gap analytics
- analysis statistics

### Platform

- authentication
- personal dashboard
- saved analyses
- user profiles
- cloud deployment
- monitoring
- observability

---

# ⚙️ Engineering Goals

ResumeAI is designed as more than a model demonstration.

The project combines:

```text
Frontend Engineering
        +
Backend Engineering
        +
REST API Design
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
End-to-End AI Application
```

The engineering goal is to demonstrate how an AI model can be integrated into a complete software system with a usable interface, API layer, persistent data, and production deployment strategy.

---

# 🌿 Git Workflow

Development is intentionally split into focused commits so that the repository history reflects the evolution of the application.

### Feature Branch

```bash
git checkout -b feature/feature-name
```

### Stage Changes

```bash
git add .
```

### Commit

```bash
git commit -m "feat: describe the feature"
```

### Push

```bash
git push origin feature/feature-name
```

### Commit Convention

| Prefix | Purpose |
|---|---|
| `feat:` | New functionality |
| `fix:` | Bug fix |
| `refactor:` | Code restructuring |
| `style:` | UI/styling changes |
| `docs:` | Documentation |
| `test:` | Tests |
| `chore:` | Maintenance/tooling |

Examples:

```text
feat: add resume upload workflow
feat: add semantic job matching
feat: add dashboard sidebar navigation
refactor: redesign resume analysis workspace
feat: redesign AI analysis results dashboard
docs: add production project documentation
```

---

# 📸 Screenshot Structure

README images are stored directly inside the repository:

```text
docs/
└── images/
    ├── dashboard.png
    ├── analyzer.png
    ├── analysis-results.png
    └── mobile-dashboard.png
```

The README references them using relative paths:

```markdown
![ResumeAI Dashboard](docs/images/dashboard.png)
```

Because the images are stored in the repository, GitHub renders them automatically without requiring external image hosting.

---

# 🤝 Contributing

ResumeAI is currently under active development.

If contributing:

1. Create a feature branch.
2. Make focused changes.
3. Test the affected workflow.
4. Use a descriptive commit message.
5. Open a pull request describing the change.

Example:

```bash
git checkout -b feature/analysis-history
```

```bash
git add .
git commit -m "feat: add analysis history"
```

---

# 📄 License

This project is currently intended for educational, portfolio, and software engineering demonstration purposes.

A formal open-source license can be added before external redistribution or community contributions are accepted.

---

# 👩‍💻 Author

**Rachana Sudhakar**

Software Engineer focused on full-stack development, AI-powered applications, backend systems, and cloud technologies.

---

<div align="center">

<br />

## 🧠 ResumeAI

### From resume to role — understand the match.

**React • Node.js • PostgreSQL • Sentence Transformers • AWS**

<br />

⭐ If you find this project useful, consider starring the repository.

</div>
