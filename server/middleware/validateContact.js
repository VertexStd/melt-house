const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates and trims the incoming contact form payload.
 * Responds with 400 and a clear message on the first field
 * that fails, instead of collecting every error at once —
 * keeps the client-side handling simple.
 */
export function validateContact(req, res, next) {
  const { name, email, message } = req.body ?? {};

  if (typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ message: "Please enter a name with at least 2 characters." });
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  if (typeof message !== "string" || message.trim().length < 10) {
    return res.status(400).json({ message: "Please enter a message of at least 10 characters." });
  }

  if (name.length > 120 || email.length > 180 || message.length > 4000) {
    return res.status(400).json({ message: "One of the fields is too long." });
  }

  req.body = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim()
  };

  next();
}
