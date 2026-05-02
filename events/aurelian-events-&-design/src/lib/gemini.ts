import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateServiceImage(prompt: string) {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '16:9',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64EncodeString = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64EncodeString}`;
        }
        return null;
    } catch (error) {
        console.error("Error generating image:", error);
        return null;
    }
}
