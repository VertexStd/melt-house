# Melt House — Brand Website

A premium, production-ready marketing site for Melt House, a handmade cookie house.
Built as a brand site only — no cart, checkout, payments, or accounts.

## Stack

- **Client:** React 18 (Vite), Tailwind CSS, Framer Motion, React Router, lucide-react
- **Server:** Node.js, Express (contact form endpoint)

## Project Structure

```
melt-house/
├── client/                     # Vite + React frontend
│   ├── public/                 # favicon, og-image
│   └── src/
│       ├── assets/images/      # optimized brand imagery
│       ├── components/
│       │   ├── layout/         # Navbar, Footer
│       │   ├── sections/       # Hero, OurStory, Gallery, Contact, etc.
│       │   └── ui/              # Button, SectionHeading, AccordionItem, LazyImage, DripDivider
│       ├── config/              # navigation config
│       ├── hooks/               # useScrollToHash
│       ├── pages/               # Home, NotFound
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── server/                     # Express API
│   ├── middleware/validateContact.js
│   ├── routes/contact.js
│   └── index.js
└── package.json                # root scripts (runs both at once)
```

## Getting Started

```bash
# from the project root
npm run install:all

# copy the server env file
cp server/.env.example server/.env

# run client + server together
npm run dev
```

- Client: http://localhost:5173
- Server: http://localhost:4000 (proxied under `/api` from the client dev server)

## Available Scripts (root)

| Command                | Description                              |
| ----------------------- | ----------------------------------------- |
| `npm run install:all`   | Installs dependencies for client + server |
| `npm run dev`           | Runs client and server concurrently       |
| `npm run dev:client`    | Runs only the Vite dev server             |
| `npm run dev:server`    | Runs only the Express API                 |
| `npm run build`         | Builds the client for production          |
| `npm start`             | Starts the Express server (production)    |

## Contact Form

`POST /api/contact` accepts `{ name, email, message }`, validates and sanitizes the payload,
rate-limits repeat submissions, and logs the entry server-side. Wire in an email provider
(Resend, SendGrid, Postmark, etc.) inside `server/routes/contact.js` when ready to send real
notifications.

## Design Notes

- **Palette:** warm cream (`#F7EFE1`), espresso (`#2C1A10`), caramel (`#C1793B`), brass, and a
  restrained burgundy accent — pulled directly from the uploaded brand assets.
- **Type:** Fraunces (display/serif) paired with Work Sans (body) and IBM Plex Mono (eyebrow
  labels), echoing a bakery ticket/menu-board feel.
- **Signature motif:** a melt/drip divider (`DripDivider`) marks section transitions, a nod to
  the chocolate drip in the Melt House logo mark.
- Sections alternate cream and espresso backgrounds for contrast, in the spirit of Aesop's
  editorial block layouts.
