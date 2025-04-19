import os

from beanie import init_beanie
from dotenv import load_dotenv
from models.bio_model import BioModel
from models.experience_model import ExperienceModel
from models.user_model import UserModel
from motor.motor_asyncio import AsyncIOMotorClient

load_dotenv()


async def db_init(MONGO_DB_URI, DB_NAME):
    MONGO_DB_URI = os.getenv("MONGO_DB_URI", "")

    if len(MONGO_DB_URI) == 0:
        raise Exception("unable to load MONGO_DB_URI from environment")

    client = AsyncIOMotorClient(MONGO_DB_URI)

    db = client[DB_NAME]
    if db is None:
        raise Exception(f"unable to find {DB_NAME} database in the given environment")

    await init_beanie(
        database=db, document_models=[UserModel, BioModel, ExperienceModel]
    )
