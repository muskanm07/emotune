<div align="center">

# 🎵 Emotune

**Your mood. Your music. Zero guessing.**

Emotune reads how you're feeling and gives you a Spotify playlist that actually fits — not a generic "sad" queue, but music matched to your specific emotional state through AI.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Gemini API](https://img.shields.io/badge/Gemini-API-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

![Emotune Banner](./public/banner.png)

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
│   │   ├── MoodInput.jsx       # Main text input + mood chip display
│   │   ├── MusicCard.jsx       # Spotify embed wrapper
│   │   └── MoodChips.jsx       # Dynamic color mood tags
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Results.jsx
│   ├── services/
│   │   └── gemini.js           # Gemini API call + mood parsing logic
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
└── vite.config.js
```

---

## How It Works

1. User types a mood description in natural language
2. The input is sent to the Gemini API with a structured prompt
3. Gemini returns a parsed mood object (emotion tags, energy level, tone)
4. The app maps those tags to Spotify search queries
5. Results are embedded directly via Spotify's iframe API
6. Mood chips update visually to reflect the detected emotion

---

## Contributing

Contributions are welcome — but please read this before opening a PR.

### What's Actually Needed Right Now

Honest status: Emotune is early-stage. These are the real gaps:

- [ ] **Better Spotify matching** — the current query logic is naive; emotionally nuanced moods don't always surface the right tracks
- [ ] **Error handling** — Gemini API failures currently break silently; needs user-facing fallback states
- [ ] **Loading states** — no skeleton/loader between input and results
- [ ] **Mood history** — localStorage-based "recent moods" feature (design exists, not built)
- [ ] **Mobile input UX** — keyboard behaviour on iOS is janky
- [ ] **Tests** — zero test coverage right now

If you want to pick something up, open an issue first and say what you're planning. Don't submit a PR for something not on this list without discussing it — it'll likely be closed.

### How to Contribute

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/emotune.git

# Create a branch with a clear name
git checkout -b fix/gemini-error-handling

# Make your changes, then open a PR against main
```

**PR checklist before submitting:**
- Does the feature/fix actually work locally?
- Did you test on mobile viewport (375px)?
- Is your branch up to date with `main`?
- Did you write a clear PR description explaining *why*, not just *what*?

PRs with vague descriptions ("fixed bug", "added feature") will be closed and asked to resubmit.

### Code Style

- Functional components only, no class components
- Tailwind for all styling — no inline styles, no separate CSS files unless absolutely necessary
- Descriptive variable names — no `data2`, `res`, `temp`
- One component per file

---

## Known Issues

- Gemini free tier has rate limits — if you hit one, wait 60 seconds and retry
- Spotify embeds don't autoplay due to browser policies — this is intentional, not a bug
- Some mood descriptions produce irrelevant results; improving the Gemini prompt is an ongoing effort

---

## Roadmap

- [ ] Save and share mood playlists via URL
- [ ] Mood journal (log your daily emotional state + music)  
- [ ] Multi-language mood input support
- [ ] Replace Spotify embeds with full Spotify Web Playback SDK (requires Spotify Premium auth)
- [ ] Animation between mood states

---

## About the Developer

Built by **Muskan Mishra** — frontend developer, BCA 2026 graduate, and GSSoC contributor.

This is one of two portfolio projects built to demonstrate real-world React development with AI API integration. The other is [Climora](https://github.com/muskanm07/climora), a deployed weather app.

- GitHub: [@muskanm07](https://github.com/muskanm07)
- LinkedIn: [Muskan Mishra](https://linkedin.com/in/muskanmishra)

---

## License

MIT — use it, fork it, build on it. Credit appreciated but not required.

---

<div align="center">

**If Emotune helped you find the right song at the right moment, give it a ⭐**

*It takes 2 seconds and means a lot for a fresher's open-source portfolio.*

</div>
