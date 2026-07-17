import { validateContactBody } from "./lib/validateContact.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const validation = validateContactBody(req.body);

  if (!validation.ok) {
    return res.status(validation.status).json({ message: validation.message });
  }

  const { name, email, message } = validation.data;

  try {
    console.log("[Melt House] New contact submission:", {
      name,
      email,
      message,
      receivedAt: new Date().toISOString()
    });

    return res.status(200).json({
      message: "Thanks for reaching out — we'll get back to you soon."
    });
  } catch (error) {
    console.error("[Melt House] Failed to process contact submission:", error);
    return res.status(500).json({
      message: "Something went wrong on our end. Please try again in a moment."
    });
  }
}
