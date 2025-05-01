# rege.ai

Rege.ai stands for Resume Generator AI

## Tech Stack

- UI: Next@15, React@19
- Stlying: Tailwindcss@4, Magicui, acternity
- Backend: FastAPI, MongoDB, Beanie

## Setup

```bash
git clone https://github.com/thetsajeet/rege.ai

# ui
cd rege.ai-ui/
pnpm install
pnpm run dev

# backend

# db
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongo-data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME= \
  -e MONGO_INITDB_ROOT_PASSWORD= \
  mongo
```
