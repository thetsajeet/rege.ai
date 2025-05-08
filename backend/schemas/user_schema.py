from typing import List, Optional

from beanie import PydanticObjectId
from pydantic import BaseModel, EmailStr

from .achievement_schema import AchievementResponse
from .bio_link_schema import BioLinkResponse
from .bio_schema import BioResponse
from .certification_schema import CertificationResponse
from .education_schema import EducationResponse
from .experience_schema import ExperienceResponse
from .project_schema import ProjectResponse
from .skill_schema import SkillResponse


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
    links: List[BioLinkResponse]
    experiences: List[ExperienceResponse]
    projects: List[ProjectResponse]
    education: List[EducationResponse]
    skills: List[SkillResponse]
    achievements: List[AchievementResponse]
    certifications: List[CertificationResponse]


class UserGetAllResponse(BaseModel):
    users: List[UserResponse]


class UserUpdateRequest(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None


class LoginRequest(BaseModel):
    username: Optional[str] = None
    password: str = None
    email: Optional[EmailStr] = None
