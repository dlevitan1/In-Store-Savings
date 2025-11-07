
# In-Store Savings Starter (Beginner Friendly)

This is a tiny starter so you can run something **without installing anything** on your computer.

## What you'll build
- A tiny API that fakes one endpoint for "activate offers" and a webhook endpoint you can call.
- A Postgres database (running in a container) you don't have to touch yet.

## Easiest path: GitHub Codespaces (zero installs)

### 0) You need
- A free **GitHub account**: https://github.com/join
- A phone or laptop browser

### 1) Create a repo and open Codespaces
1. Log into GitHub.
2. Click **New** repository → name it `in-store-savings` (public is fine).
3. Click **Upload files** and upload this entire zip (or drag the unzipped folder). Commit.
4. On the repo page, click the green **Code** button → **Create codespace on main**.

GitHub will open a browser VS Code with everything ready.

### 2) Start the database
In the Codespaces terminal (bottom of the page), run:
```bash
docker compose -f infra/docker-compose.yml up -d
```

### 3) Run the API
```bash
cd apps/api
npm install
npm run dev
```

You should see: `API on :3001`

### 4) Test the API
Open a new terminal tab and run:
```bash
curl -s localhost:3001/health
curl -s -X POST localhost:3001/v1/presence/enter -H "content-type: application/json" -d '{"store_id":"st_demo"}'
```

Expected output:
```json
{"ok":true}
{"activation_id":"act_demo","offers":[{"type":"percent","value":7}]}
```

### 5) What next?
- Change the fake percent to any number in `apps/api/src/index.js` and test again.
- When ready, add the **mobile app** later (Expo). For now, your API works!

---

## Local dev (optional)
If you later want to run locally:
- Install VS Code, Node 20+, Docker Desktop.
- Run the same commands as above.

## Project layout
```
in-store-savings-starter/
├─ apps/
│  └─ api/                  # Node/Fastify API
│     ├─ package.json
│     └─ src/index.js
├─ infra/
│  └─ docker-compose.yml    # Postgres + Adminer (DB UI)
└─ .devcontainer/
   └─ devcontainer.json     # Makes Codespaces work nicely
```

## Next features to add
- POST /v1/activations (create activation)
- Webhook endpoints (idempotent)
- Postgres connection and migrations
- Wallet ledger and simple rewards calc

You're set. Open Codespaces and press run. :)
