# Stock Images Search

A React app for searching and browsing photos from the Unsplash API.

## Tech Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TanStack React Query](https://tanstack.com/query) — data fetching & caching
- [Axios](https://axios-http.com/) — HTTP client

## Features

- Search Unsplash photos by keyword
- Responsive image grid (1 → 2 → 3 columns)
- Light / dark theme toggle

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Open `.env` and add your Unsplash API key:

   ```
   VITE_UNSPLASH_API_KEY=your_key_here
   ```

   Get a free key at [unsplash.com/developers](https://unsplash.com/developers).

3. **Start the dev server**

   ```bash
   npm run dev
   ```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
