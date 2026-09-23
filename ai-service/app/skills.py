SKILLS = {
    "languages": [
        "python",
        "java",
        "javascript",
        "typescript",
        "c",
        "c++",
        "c#",
        "go",
        "rust",
        "kotlin",
        "swift"
    ],

    "frontend": [
        "react",
        "angular",
        "vue",
        "html",
        "css",
        "tailwind",
        "bootstrap",
        "redux",
        "next.js"
    ],

    "backend": [
        "node.js",
        "express",
        "spring boot",
        "fastapi",
        "django",
        "flask",
        "rest api",
        "graphql"
    ],

    "databases": [
        "postgresql",
        "mysql",
        "mongodb",
        "redis",
        "oracle",
        "dynamodb",
        "elasticsearch"
    ],

    "cloud": [
        "aws",
        "azure",
        "google cloud",
        "ec2",
        "s3",
        "lambda",
        "rds",
        "cloudwatch",
        "docker",
        "kubernetes"
    ],

    "machine_learning": [
        "machine learning",
        "deep learning",
        "tensorflow",
        "pytorch",
        "scikit-learn",
        "bert",
        "transformers",
        "nlp",
        "computer vision"
    ],

    "devops": [
        "git",
        "github actions",
        "jenkins",
        "ci/cd",
        "terraform",
        "docker",
        "kubernetes"
    ]
}


def all_skills():
    result = set()

    for category in SKILLS.values():
        result.update(category)

    return result