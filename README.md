<div align="center">

# 🎵 Emotune

**Your mood. Your music. Zero guessing.**

Emotune reads how you're feeling and gives you a Spotify playlist that actually fits — not a generic "sad" queue, but music matched to your specific emotional state through AI.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Gemini API](https://img.shields.io/badge/Gemini-API-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)


</div>

---

## What is Emotune?

Most music apps ask you to pick a mood from a dropdown. But moods aren't dropdowns — they're messy, layered, and specific.

Emotune lets you describe exactly how you feel in your own words. The Gemini AI interprets it and surfaces Spotify tracks that fit the emotional texture of what you wrote — not just the genre, but the *feeling*.

Type `"anxious about tomorrow but trying to stay calm"` and get something completely different from `"sad"`. That's the point.

---

## Features

- **Free-text mood input** — describe your emotion in plain language, no categories
- **AI mood interpretation** — Gemini API parses emotional nuance, not just keywords
- **Spotify embed playback** — listen directly in the app, no redirects
- **Mood color chips** — visual mood tags that update dynamically with your input
- **Dark mode UI** — purple-accented, easy on the eyes
- **Fully responsive** — works on mobile and desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| AI | Google Gemini API (free tier) |
| Music | Spotify Embed API |
| Routing | React Router v6 |
| Deployment | Netlify |

---

## Getting Started

### Prerequisites

- Node.js v18+
- A free [Google AI Studio](https://aistudio.google.com) API key (for Gemini)

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
│   │   ├── Navbar.jsx       # Main text input + mood chip display
│   │  
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Result.jsx
│   │   └──History.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
└── vite.config.js


