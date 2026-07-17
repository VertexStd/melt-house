const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactBody(body) {
  const { name, email, message } = body ?? {};

  if (typeof name !== "string" || name.trim().length < 2) {
    return { ok: false, status: 400, message: "Please enter a name with at least 2 characters." };
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return { ok: false, status: 400, message: "Please enter a valid email address." };
  }

  if (typeof message !== "string" || message.trim().length < 10) {
    return { ok: false, status: 400, message: "Please enter a message of at least 10 characters." };
  }

  if (name.length > 120 || email.length > 180 || message.length > 4000) {
    return { ok: false, status: 400, message: "One of the fields is too long." };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    }
  };
}
