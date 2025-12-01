import { GoogleGenAI, Type } from "@google/genai";
import { WorkoutPlan, FitnessLevel, Goal } from "../types";

const apiKey = process.env.API_KEY;

// Initialize the client conditionally to avoid runtime crashes if env is missing during dev (though mandated by prompt)
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateWorkoutPlan = async (
  level: FitnessLevel,
  goal: Goal,
  durationMinutes: number
): Promise<WorkoutPlan | null> => {
  if (!ai) {
    console.error("API Key missing");
    return null;
  }

  try {
    const model = ai.models;

    const prompt = `Create a high-intensity, modern gym workout plan for a ${level} level individual whose goal is ${goal}. 
    The workout should be approximately ${durationMinutes} minutes long. 
    Focus on a mix of compound movements and isolation exercises suitable for a well-equipped gym. 
    Use the Metric System (kg) for weights.`;

    const response = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an elite fitness coach at 4Fit Gym India. You are motivating, precise, and focused on results. Use Indian terminology if relevant but keep it professional.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy name for the workout" },
            duration: { type: Type.STRING, description: "Total duration text e.g. '45 mins'" },
            exercises: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  sets: { type: Type.STRING },
                  reps: { type: Type.STRING },
                  notes: { type: Type.STRING, description: "Form cue or intensity tip" },
                },
                required: ["name", "sets", "reps", "notes"]
              }
            }
          },
          required: ["title", "duration", "exercises"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as WorkoutPlan;
    }
    return null;

  } catch (error) {
    console.error("Error generating workout:", error);
    throw error;
  }
};