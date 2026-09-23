const axios = require("axios");
const FormData = require("form-data");

const analyzeWithAI = async (
  resumeBuffer,
  fileName,
  jobDescription
) => {
  const form = new FormData();

  form.append("resume", resumeBuffer, {
    filename: fileName,
    contentType: "application/pdf"
  });

  form.append("job_description", jobDescription);

  const response = await axios.post(
    `${process.env.AI_SERVICE_URL}/analyze`,
    form,
    {
      headers: {
        ...form.getHeaders()
      },
      maxBodyLength: Infinity
    }
  );

  return response.data;
};

module.exports = {
  analyzeWithAI
};