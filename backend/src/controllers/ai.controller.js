import aiservice from "../services/ai.service.js";

export const getReview = async (req, res) => {
    try {
        console.log("1. Controller reached");

        const code = req.body.code;

        if (!code) {
            return res.status(400).send("Code/prompt is required");
        }

        console.log("2. Code:", code);

        const response = await aiservice(code);

        console.log("3. Gemini responded");

        return res.send(response);

    } catch (error) {
        console.error("GEMINI ERROR:", error);

        if (error.status === 429) {
            return res.status(429).json({
                message: "Gemini rate limit exceeded. Please try again later."
            });
        }

        return res.status(500).json({
            message: "Something went wrong while reviewing the code."
        });
    }
};