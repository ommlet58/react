///
import express from "express";
import dotenv from "dotenv";
import axios from 'axios';

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
    try {
        const { text, activeChatId } = req.body;

        // Call function to generate chat response using OpenAI GPT API
       const response = await generateChatResponse(text);
        console.log(text);

        // Send the generated response back to the client
        res.status(200).json({ response });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
});

// Function to generate chat response using OpenAI GPT API
async function generateChatResponse(prompt) {
    const apiKey = process.env.OPEN_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/completions';

    try {
        const response = await axios.post(apiUrl, {
            model: 'whisper-1',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 150,
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error.response.data);
        return null;
    }
}

export default router;


