from io import BytesIO

from fastapi import FastAPI
from fastapi import File
from fastapi import Form
from fastapi import HTTPException
from fastapi import UploadFile

from pypdf import PdfReader

from .analyzer import analyze


app = FastAPI(
    title="Smart Resume Analyzer AI Service",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "service": "resume-ai",
        "status": "running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


def extract_pdf_text(data):
    try:
        reader = PdfReader(
            BytesIO(data)
        )

        pages = []

        for page in reader.pages:
            text = page.extract_text()

            if text:
                pages.append(text)

        return "\n".join(pages)

    except Exception as error:
        raise HTTPException(
            status_code=400,
            detail=f"Unable to process PDF: {error}"
        )


@app.post("/analyze")
async def analyze_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):
    if resume.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Resume must be a PDF"
        )

    content = await resume.read()

    resume_text = extract_pdf_text(content)

    if not resume_text.strip():
        raise HTTPException(
            status_code=400,
            detail="No readable text found in resume"
        )

    results = analyze(
        resume_text,
        job_description
    )

    return results