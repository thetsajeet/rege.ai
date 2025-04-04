from fastapi import FastAPI
import api.users.routes as user_router
from config.db import db_init
from dotenv import load_dotenv
import os
from contextlib import asynccontextmanager

load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    await db_init(os.getenv("MONGO_DB_URI"), os.getenv("DB_NAME"))

    yield

    print("shutting down")
    # TODO: db_close

app = FastAPI(lifespan=lifespan)

app.include_router(user_router.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "resume generator backend", "status": "ok"}
