# React + Express Starter — Connecting Frontend and Backend

![version](https://img.shields.io/badge/version-0.0.0-blue)
![license](https://img.shields.io/badge/license-ISC-lightgrey)

A small example project that demonstrates a React + Vite frontend talking to a simple Express backend. The frontend calls an API under `/api` (proxied to the backend during development). The intent is to be a minimal, easy-to-follow template for connecting a modern frontend to a Node/Express backend.

## What this project does

- Frontend: React (Vite) app located in `frontend/` that fetches jokes from `/api/jokes` using `axios`.
- Backend: Express server in `backend/` that serves a small JSON array at `GET /api/jokes` and a root route at `/`.
- Development proxy: `vite.config.js` forwards `/api` requests from the dev server to the backend (http://localhost:3000).

## Why this is useful

- Quick start: Minimal wiring to learn how frontends and backends communicate in development and production.
- Demonstrates common patterns: Vite proxy, axios in React, simple Express endpoints.
- Lightweight: easy to extend into a larger app or use as a learning scaffold.

## Features

- Vite dev server with React and HMR
- Proxying `/api` to the Express server in development
- Example Axios usage in `src/App.jsx`

## Quick start (developer)

Open two terminals (frontend and backend) and run the following (PowerShell shown):

1) Start the backend

```powershell
cd backend
npm install
npm start
```

By default the backend listens on port 3000. You should see a log like:

```
Server is running at http://localhost:3000
```

2) Start the frontend

```powershell
cd frontend
npm install
npm run dev
```

Vite will start (normally on port 5173). The frontend uses a proxy configured in `frontend/vite.config.js` so requests to `/api/*` are forwarded to the backend at `http://localhost:3000` during development.

3) Open the app

Visit the Vite dev URL printed in the terminal (e.g. `http://localhost:5173`). The React app will load and call `/api/jokes`.

## Build for production

Build the frontend bundle with:

```powershell
cd frontend
npm run build
```

Deploy the `dist/` output from the frontend to any static host. If you want the backend to serve the built frontend, you'll need to add static serving to `backend/server.js` (this project does not include static-serving wiring by default).

## Example usage / API

- Fetch jokes from the frontend (this exact call is used in `src/App.jsx`):

```js
import axios from 'axios'

axios.get('/api/jokes')
  .then(res => console.log(res.data))
  .catch(err => console.error(err))
```

- Directly call the backend API (bypassing proxy):

```powershell
curl http://localhost:3000/api/jokes
```

Response: JSON array of jokes (see `backend/server.js`).

## Where to get help

- Open an issue on this repository.
- For frontend-specific docs and tips, see `frontend/README.md`.
- For Vite docs: https://vitejs.dev
- For Express docs: https://expressjs.com/

## Contributing

Contributions are welcome. Please open an issue to discuss noteworthy changes. For code contributions:

1. Fork the repository
2. Create a branch for your feature: `git checkout -b feat/your-change`
3. Make changes and run both frontend and backend locally to validate
4. Open a pull request

If this repo does not yet contain a `CONTRIBUTING.md`, please follow the above flow and open an issue if you'd like a contribution guide added.

## Maintainers

- Repository owner: `Aayush5154` (see repo settings for contact details)

## Files of interest

- `backend/server.js` — Express API and server
- `frontend/src/App.jsx` — Example axios call to `/api/jokes`
- `frontend/vite.config.js` — Vite dev proxy config for `/api`
- `frontend/package.json` — Run scripts: `npm run dev`, `npm run build`, `npm run preview`
- `backend/package.json` — Run script: `npm start`

## License

This repository references a license in `backend/package.json` (ISC). See `LICENSE` if present in the repo for full terms.

---

If you'd like, I can also add a minimal `CONTRIBUTING.md` and a small note in `backend/server.js` showing how to serve static assets from `frontend/dist` for a single-server deployment. Would you like me to add those next?
