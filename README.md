# 🎵 Emotune

**Your mood. Your music. Zero guessing.**

Emotune reads how you're feeling and gives you a playlist that actually fits — not a generic "sad" queue, but music matched to your specific emotional state through AI.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Gemini API](https://img.shields.io/badge/AI-Gemini_API-8E75B2?logo=googlegemini&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?logo=tailwindcss&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

---

## What is Emotune?

Most music apps ask you to pick a mood from a dropdown. But moods aren't dropdowns — they're messy, layered, and specific.

Emotune lets you describe exactly how you feel in your own words. The Gemini API interprets it and surfaces tracks that fit the emotional texture of what you wrote — not just the genre, but the feeling.

Type *"anxious about tomorrow but trying to stay calm"* and get something completely different from *"sad."* That's the point.

---

## Features

- **Free-text mood input** — describe your emotion in plain language, no categories
- **AI mood interpretation** — Gemini API parses emotional nuance, not just keywords
- **Instant track previews** — powered by the iTunes API, no account or login required
- **Mood color chips** — visual mood tags that update dynamically with your input
- **Mood history** — revisit past moods and the tracks they surfaced
- **Dark mode UI** — purple-accented, easy on the eyes
- **Fully responsive** — works on mobile and desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| AI | Google Gemini API (free tier) |
| Music | iTunes Search API |
| Routing | React Router v6 |
| Deployment | Netlify |

---

## Getting Started

### Prerequisites

- Node.js v18+
- A free Google AI Studio API key (for Gemini)

### Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/muskanm07/emotune.git
cd emotune

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env
```

Open `.env` and add your key:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

```bash
# 4. Run the dev server
npm run dev
```

Visit `http://localhost:5173` — you're in.

> **Note:** Never commit your `.env` file. The `.gitignore` already excludes it, but double-check before pushing.

---

## Project Structure

```
emotune/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx       # Main text input + mood chip display
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Result.jsx
│   │   └── History.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
└── vite.config.js
```

---

## How It Works

1. You type how you're feeling, in your own words.
2. Gemini interprets the emotional tone and nuance behind the text.
3. Emotune queries the iTunes Search API for tracks that match the interpreted mood.
4. Song previews are returned with mood color chips, ready to play.
5. Your mood and its results are saved to History for later.

---

## License

MIT © [Muskan](https://github.com/muskanm07)
