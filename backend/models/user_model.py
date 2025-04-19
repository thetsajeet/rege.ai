from typing import List, Optional

import schemas.bio_schema as BioSchema
import schemas.experience_schema as ExperienceSchema
import schemas.user_schema as UserSchema
from beanie import Document, Link
from beanie.operators import Or
from fastapi import HTTPException, status
from models.bio_model import BioModel
from models.experience_model import ExperienceModel
from pydantic import EmailStr, Field


# MongoDB User Model
class UserModel(Document):
    username: str
    email: EmailStr
    password: str
    bio: Optional[Link[BioModel]] = None
    experiences: List[Link[ExperienceModel]] = Field(default_factory=list)

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
            experiences=[
                ExperienceSchema.ExperienceResponse(**exp.dict())
                for exp in self.experiences
            ]
            if self.experiences
            else None,
        )
