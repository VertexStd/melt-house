import { Router } from "express";
import { validateContact } from "../middleware/validateContact.js";

const router = Router();

/**
 * POST /api/contact
 * Accepts { name, email, message } from the landing page contact form.
 *
 * This logs the submission server-side. Wire in an email provider
 * (Resend, SendGrid, Postmark, etc.) or a database write here when
 * ready to go to production — the validated payload is already
 * available on req.body.
 */
router.post("/", validateContact, async (req, res) => {
  const { name, email, message } = req.body;

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
});

export default router;
