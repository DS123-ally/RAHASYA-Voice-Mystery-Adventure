# Rahasya

**Rahasya** is an interactive, browser-based 3D street simulation and language-learning game. Set across various culturally rich districts of India, the game invites players to navigate vibrant streets, complete localized errands, and learn conversational Indian languages by interacting with local NPCs.

## Features

- **Procedural 3D Environments:** Dynamically generated street blocks featuring authentic regional architecture, colors, and clutter (built with Three.js / React Three Fiber).
- **Interactive Language Learning:** Complete tasks by conversing with NPCs using integrated phrasebooks for regional languages (Marathi, Telugu, Malayalam, etc.).
- **Dynamic Dialogue System:** Engaging dialogue trees and a "clue" system that requires interacting with the environment to solve street mysteries.
- **Rich Audio Experience:** Spatial ambience and localized background music.

## Available Districts

Explore these diverse neighborhoods:
- **Deccan Pune** (Marathi) - *Historic streets, legendary Misal Pav, and a missing scooter near Shaniwar Wada.*
- **Charminar Lane, Hyderabad** (Telugu)
- **Fort Kochi** (Malayalam)
- **Dadar Chowk, Mumbai**
- **Manek Chowk, Ahmedabad**
- **Hall Bazaar, Amritsar**
- **Lingaraj Lane, Bhubaneswar**

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **3D Rendering:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & Three.js
- **Database & Auth:** [Supabase](https://supabase.com/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites
Make sure you have Node.js installed. You will also need a Supabase project set up.

### Installation

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment Variables:**
   Copy the `.env.example` file to `.env.local` and populate it with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **Play the Game:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to explore the streets of Rahasya.

## Contributing

Contributions, district ideas, and new language phrasebooks are welcome! Feel free to open issues or submit pull requests.
