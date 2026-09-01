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
    console.error("GEMINI ERROR:");
    console.error(error);
    
    res.status(500).json({
        message: "Failed to get response from Gemini",
        error: error.message
    });
 }
};