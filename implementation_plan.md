# Add Pune District

The goal is to add a new playable district for Pune to the game.

## User Review Required

Since your Supabase project isn't currently linked via the CLI (which prevents running automated database migrations), I will update the backend code to automatically serve new cities from the local codebase if they are missing from the database. This allows us to add Pune seamlessly!

## Proposed Changes

### Backend Enhancements

#### [MODIFY] load-district.ts
- Update `listDistricts` and `loadDistrictById` to seamlessly merge any new districts defined in code (`SEED_DISTRICTS` and `SEED_TASK_PACKS`) that aren't yet present in your Supabase database. This makes adding new content much easier.

### Assets & Landmarks

#### [MODIFY] cities.ts
- Add a new 3D landmark generator for Pune: `makeShaniwarWada`, which will generate a Maratha/Mughal-style gate structure.

#### [MODIFY] index.ts (assets)
- Map the new `deccan-pune` district ID to the `makeShaniwarWada` landmark.

### District & Content Definition

#### [MODIFY] districts-six.ts
- Define the `deccanPune` district.
- **Language**: Marathi (`mr-IN`).
- **Storyline**: A missing two-wheeler outside Shaniwar Wada.
- **Theme**: Stone, orange, and warm afternoon colors representing Pune.

#### [MODIFY] tasks-six.ts
- Define the 4 tasks for Pune:
  - **Auto**: Negotiating an auto fare to Deccan.
  - **Shop**: Ordering a spicy Misal Pav.
  - **Temple**: Buying prasad near Dagdusheth Halwai temple.
  - **Bus**: Buying a ticket.

#### [MODIFY] marathi.ts
- Add the Marathi dialogues and lesson steps for the Pune tasks, adapting them slightly from the Mumbai ones to fit Pune's culture (e.g., "Misal pav" instead of "Vada pav").

### Media

#### [NEW] deccan-pune.jpg
- Generate a new stylized cover image for the Pune district and place it in the `public/covers` directory.

## Verification Plan

### Manual Verification
- Start the development server.
- Verify that "Deccan Pune" shows up in the district selection menu alongside the other cities.
- Verify the 3D scene loads correctly with the new Shaniwar Wada landmark.
- Verify that interacting with NPCs correctly starts the Marathi dialogues for Pune tasks.
