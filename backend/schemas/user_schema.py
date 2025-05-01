from typing import List, Optional

from beanie import PydanticObjectId
from pydantic import BaseModel, EmailStr

from .bio_schema import BioResponse


class UserCreateRequest(BaseModel):
    username: str
    email: EmailStr
    password: str

    model_config = {
        "json_schema_extra": {
            "example": {
                "username": "ad1",
                "email": "ad1@gmail.com",
                "password": "1234forad1",
            }
        }
    }


class UserResponse(BaseModel):
    userId: PydanticObjectId
    username: str
    email: str
    bio: BioResponse
    # experiences: List[ExperienceResponse]
    # projects: List[ProjectResponse]
    # education: List[EducationResponse]
    # skills: List[SkillResponse]
    # achievements: List[AchievementResponse]
    # certifications: List[CertificationResponse]


class UserGetAllResponse(BaseModel):
    users: List[UserResponse]


class UserUpdateRequest(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None
