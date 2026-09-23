CREATE TABLE IF NOT EXISTS analyses (
    id UUID PRIMARY KEY,

    resume_name VARCHAR(255) NOT NULL,

    job_description TEXT NOT NULL,

    match_score DECIMAL(5,2) NOT NULL,

    matched_skills TEXT[] DEFAULT '{}',

    missing_skills TEXT[] DEFAULT '{}',

    suggestions JSONB DEFAULT '[]',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_analyses_created_at
ON analyses(created_at DESC);