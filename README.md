# Rahasya

**Rahasya** is an interactive, browser-based 3D street simulation and language-learning game **built on the AO workspace**. Powered by the **Agent Orchestrator (AO) agent** and the **Sarvam AI** model suite, the game drops players into vibrant Indian street districts where they navigate procedurally generated 3D environments, converse with intelligent NPCs in regional Indian languages, and solve localized street mysteries — all through voice.


# Video:


https://github.com/user-attachments/assets/0e5a48d2-6f7c-42d4-b971-9eb841c52388





















## Voice Pipeline

The real-time voice loop runs through Sarvam AI's full stack:

```
🎤 Mic → saaras:v3 (STT) → sarvam-105b (LLM) → bulbul:v3 (TTS) → 🔊 Speakers
```

Conversations are graded asynchronously against mission rubrics without blocking audio playback.

## Features

- **Agent Orchestrator (AO) Agent:** Advanced AI-driven orchestration handling NPC behavior, dynamic dialogues, mission grading, and personalized language learning interactions.
- **Sarvam AI Integration:** Full voice pipeline using `saaras:v3` for speech-to-text, `sarvam-105b` for NPC chat & grading, and `bulbul:v3` (37 voices) for text-to-speech across 10 Indian languages.
- **Procedural 3D Environments:** Dynamically generated street blocks with authentic regional architecture (Mughal, Dravidian, Colonial, Modern), colors, and clutter — built with Three.js / React Three Fiber.
- **Interactive Language Learning:** Complete tasks by conversing with NPCs using integrated phrasebooks for regional languages.
- **Dynamic Dialogue System:** Engaging dialogue trees and a "clue" system that requires interacting with the environment to solve street mysteries.
- **Real-Time Voice Sessions:** LiveKit WebRTC-powered voice conversations with NPCs, live subtitles, and barge-in support.
- **Rich Audio Experience:** Spatial ambience, footstep sounds, and localized background music.
- **Roznamcha:** A voice-first day-book sub-app for frontline health workers (see below).

## Available Districts

Explore **11 diverse neighborhoods** across **10 Indian languages**, each with unique architecture, storylines, and curated phrasebooks:

| District | City | Language | Arch Style | Story |
| :--- | :--- | :--- | :--- | :--- |
| **Purani Sadak** | Old Delhi | Hindi | Mughal | Raju Bhai's auto-rickshaw stolen from outside the chai stall before dawn. |
| **Marina Nagar** | Chennai | Tamil | Dravidian | Selvi Akka's fish tempo van vanished from shore road with the morning catch. |
| **Majestic Cross** | Bengaluru | Kannada | Modern | Manju's rented delivery scooter stolen during evening rain with cash under seat. |
| **Park Gully** | Kolkata | Bengali | Colonial | Bikash-da's 26-year-old yellow Ambassador taxi missing with father's photo on visor. |
| **Charminar Lane** | Hyderabad | Telugu | Mughal | Irfan Bhai's auto loaded with wedding biryani orders vanished from old city lane. |
| **Fort Kochi** | Kochi | Malayalam | Dravidian | Saji Chettan's fish auto hauling ice to Chinese nets gone from the waterfront. |
| **Dadar Chowk** | Mumbai | Marathi | Modern | Sunil's share-auto missing from Dadar stand before rush hour. |
| **Manek Chowk** | Ahmedabad | Gujarati | Mughal | Jignesh Bhai's sweet delivery scooter with wedding mithai boxes vanished. |
| **Hall Bazaar** | Amritsar | Punjabi | Mughal | Gurpreet Ji's cycle-cart with karah prasad tins taken before sangat arrives. |
| **Lingaraj Lane** | Bhubaneswar | Odia | Dravidian | Biju Bhai's flower tempo loaded with marigold garlands for Lingaraj missing before arati. |
| **Deccan Pune** | Pune | Marathi | Mughal | Prakash Dada's scooter vanished from outside his famous misal joint. |

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **3D Rendering:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & Three.js
- **AI Model:** [Sarvam AI](https://sarvam.ai/) — `sarvam-105b` (Chat & Grading), `saaras:v3` (STT), `bulbul:v3` (TTS)
- **Real-Time Voice:** [LiveKit](https://livekit.io/) (WebRTC agent sessions)
- **Database & Auth:** [Supabase](https://supabase.com/)
- **Observability:** [PostHog](https://posthog.com/)
- **Deployment:** Firebase Hosting
- **Language:** TypeScript / Python
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Next.js Frontend                   │
│  Three.js 3D Engine │ React Components │ Tailwind    │
│  ───────────────────┼──────────────────┼──────────── │
│  engine.ts          │ Game.tsx         │ PostHogInit  │
│  city.ts            │ Dialogue.tsx     │ AuthHeader   │
│  buildings.ts       │ Hud.tsx          │ VirtualJoy   │
│  people.ts          │ Title.tsx        │              │
│  vehicles.ts        │ FreeChat.tsx     │              │
└────────────┬────────┴────────┬─────────┴─────────────┘
             │  API Routes     │
             │  /api/talk      │  NPC dialogue + grading
             │  /api/speak     │  TTS via bulbul:v3
             │  /api/stt       │  STT via saaras:v3
             │  /api/voice     │  LiveKit token minting
             │  /api/districts │  District data sync
             │  /api/progress  │  User progress tracking
             │  /api/roz/*     │  Roznamcha endpoints
             ▼                 ▼
┌────────────────────┐  ┌────────────────────────────┐
│   Supabase         │  │   Python Worker (LiveKit)   │
│   PostgreSQL DB    │  │   agent.py   → Voice Agent  │
│   Auth / Middleware │  │   judge.py   → AI Grader    │
│   User Progress    │  │   token_server.py → JWT     │
└────────────────────┘  └────────────────────────────┘
             │                         │
             ▼                         ▼
        ┌──────────┐          ┌──────────────┐
        │ PostHog  │          │  Sarvam AI   │
        │ Analytics│          │  sarvam-105b │
        └──────────┘          │  saaras:v3   │
                              │  bulbul:v3   │
                              └──────────────┘
```

## Roznamcha — Voice Day-Book

**Roznamcha** is a voice-first sub-app integrated into Rahasya, built for frontline health workers (ASHA workers) in India.

- **Purpose:** Enables health workers to speak visit logs in natural Hindi or Kannada (with code-switched English terms) instead of manual data entry.
- **Barge-In Innovation:** While the agent reads back a filled record via TTS, the health worker can interrupt by speaking. The system halts TTS playback within **<200 ms** and transcribes the correction, updating only the specific field.
- **Architecture:** Browser → WebSocket relay server (port 8787) → Sarvam AI bidirectional audio streaming.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Python 3.10+](https://www.python.org/) (for the voice worker)
- A [Supabase](https://supabase.com/) project
- A [Sarvam AI](https://sarvam.ai/) API key
- A [PostHog](https://posthog.com/) account
- A [LiveKit](https://livekit.io/) server (for real-time voice)

### Installation

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment Variables:**
   Copy the `.env.example` file to `.env.local` and populate it with your credentials:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

   # Sarvam AI
   SARVAM_API_KEY=your-sarvam-api-key
   SARVAM_CHAT_MODEL=sarvam-105b
   SARVAM_GRADER_MODEL=sarvam-105b
   SARVAM_STT_MODEL=saaras:v3
   SARVAM_TTS_MODEL=bulbul:v3

   # LiveKit
   LIVEKIT_URL=your-livekit-url
   LIVEKIT_API_KEY=your-livekit-api-key
   LIVEKIT_API_SECRET=your-livekit-api-secret

   # PostHog
   NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key
   NEXT_PUBLIC_POSTHOG_HOST=your-posthog-host
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **Run the Voice Worker** (in a separate terminal):
   ```bash
   cd worker
   pip install -r requirements.txt
   python agent.py dev
   ```

5. **Play the Game:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to explore the streets of Rahasya.

## Contributing

Contributions, district ideas, new language phrasebooks, and architectural style modules are welcome! Feel free to open issues or submit pull requests.
