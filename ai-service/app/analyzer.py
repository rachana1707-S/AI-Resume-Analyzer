import re

from sentence_transformers import SentenceTransformer, util

from .skills import all_skills


MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"

model = SentenceTransformer(MODEL_NAME)


def normalize_text(text):
    text = text.lower()

    text = re.sub(
        r"\s+",
        " ",
        text
    )

    return text.strip()


def extract_skills(text):
    normalized = normalize_text(text)

    detected = []

    for skill in all_skills():
        pattern = rf"(?<!\w){re.escape(skill)}(?!\w)"

        if re.search(pattern, normalized):
            detected.append(skill)

    return sorted(set(detected))


def semantic_similarity(resume_text, job_description):
    embeddings = model.encode(
        [
            resume_text,
            job_description
        ],
        convert_to_tensor=True,
        normalize_embeddings=True
    )

    similarity = util.cos_sim(
        embeddings[0],
        embeddings[1]
    ).item()

    score = similarity * 100

    return round(
        max(0, min(score, 100)),
        2
    )


def create_suggestions(
    resume_skills,
    job_skills,
    missing_skills,
    match_score
):
    suggestions = []

    if missing_skills:
        top_missing = missing_skills[:5]

        suggestions.append(
            "Consider adding experience or projects demonstrating: "
            + ", ".join(top_missing)
        )

    if match_score < 50:
        suggestions.append(
            "The resume has relatively low semantic similarity "
            "with this job description. Tailor the summary and "
            "project descriptions toward the role."
        )

    if match_score >= 70:
        suggestions.append(
            "Your resume has strong semantic alignment with this role."
        )

    if len(resume_skills) < 5:
        suggestions.append(
            "Add a clearer technical skills section so recruiters "
            "and ATS systems can identify your technologies quickly."
        )

    if not suggestions:
        suggestions.append(
            "Tailor resume achievements using terminology from "
            "the job description where it accurately reflects your experience."
        )

    return suggestions


def analyze(resume_text, job_description):
    resume_skills = extract_skills(resume_text)

    job_skills = extract_skills(job_description)

    matched_skills = sorted(
        set(resume_skills).intersection(job_skills)
    )

    missing_skills = sorted(
        set(job_skills).difference(resume_skills)
    )

    semantic_score = semantic_similarity(
        resume_text,
        job_description
    )

    if job_skills:
        skill_score = (
            len(matched_skills)
            / len(job_skills)
        ) * 100
    else:
        skill_score = semantic_score

    final_score = (
        semantic_score * 0.7
        + skill_score * 0.3
    )

    final_score = round(
        max(0, min(final_score, 100)),
        2
    )

    suggestions = create_suggestions(
        resume_skills,
        job_skills,
        missing_skills,
        final_score
    )

    return {
        "match_score": final_score,

        "semantic_score": semantic_score,

        "skill_score": round(skill_score, 2),

        "resume_skills": resume_skills,

        "job_skills": job_skills,

        "matched_skills": matched_skills,

        "missing_skills": missing_skills,

        "suggestions": suggestions
    }