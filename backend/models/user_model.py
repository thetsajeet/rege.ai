from typing import Optional

import schemas.bio_schema as BioSchema
import schemas.user_schema as UserSchema
from beanie import Document, Link
from beanie.operators import Or
from fastapi import HTTPException, status
from models.bio_model import BioModel
from pydantic import EmailStr


# MongoDB User Model
class UserModel(Document):
    username: str
    email: EmailStr
    password: str
    bio: Optional[Link[BioModel]] = None

    class Settings:
        name = "users"

    @classmethod
    async def user_exists(cls, email: EmailStr, username: str):
        return await cls.find(
            Or(cls.username == username), (cls.email == email)
        ).first_or_none()

    @classmethod
    async def find_by_id(cls, user_id: str, fetch_links: bool = False):
        user = await cls.get(user_id, fetch_links=fetch_links)
        if user is None:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "user not found")
        return user

    def to_response(self):
        return UserSchema.UserResponse(
            id=str(self.id),
            username=self.username,
            email=self.email,
            bio=BioSchema.BioResponse(**self.bio.dict()) if self.bio else None,
        )
