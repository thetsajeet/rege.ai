import os
from contextlib import asynccontextmanager

import api.users.routes as user_router
from config.db import db_init
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()


@asynccontextmanager
async def lifespan(app: FastAPI):
    await db_init(os.getenv("MONGO_DB_URI"), os.getenv("DB_NAME"))

    yield

    print("shutting down")
    # TODO: db_close


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router.router, prefix="/api/v1")


@app.get("/")
def read_root():
    return {"message": "resume generator backend", "status": "ok"}
