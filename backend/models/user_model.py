from typing import List

from beanie import Document, Link, PydanticObjectId
from beanie.operators import Or
from bson import ObjectId
from fastapi import HTTPException, status
from pydantic import EmailStr, Field
from schemas import *

from .achievement_model import AchievementModel
from .bio_link_model import BioLinkModel
from .bio_model import BioModel
from .certification_model import CertificationModel
from .education_model import EducationModel
from .experience_model import ExperienceModel
from .project_model import ProjectModel
from .skill_model import SkillModel


# MongoDB User Model
class UserModel(Document):
    userId: PydanticObjectId = Field(default_factory=PydanticObjectId, alias="_id")
    username: str
    email: EmailStr
    password: str
    bio: Link[BioModel]
    links: List[Link[BioLinkModel]] = Field(default_factory=list)
    experiences: List[Link[ExperienceModel]] = Field(default_factory=list)
    projects: List[Link[ProjectModel]] = Field(default_factory=list)
    education: List[Link[EducationModel]] = Field(default_factory=list)
    skills: List[Link[SkillModel]] = Field(default_factory=list)
    achievements: List[Link[AchievementModel]] = Field(default_factory=list)
    certifications: List[Link[CertificationModel]] = Field(default_factory=list)

    class Settings:
        name = "users"

    class Config:
        populate_by_name = True

    @classmethod
    async def create_with_defaults(cls, username: str, email: EmailStr, password: str):
        bio = await BioModel(dob=None).insert()
        standard_links_data = [
            {
                "label": "LinkedIn",
                "prefix": "linkedin.com/in/",
                "value": "",
                "custom": False,
            },
            {"label": "GitHub", "prefix": "github.com/", "value": "", "custom": False},
            {"label": "Portfolio", "value": "", "custom": False},
            {"label": "Twitter", "prefix": "x.com/", "value": "", "custom": False},
        ]

        standard_links = [BioLinkModel(**link) for link in standard_links_data]
        result = await BioLinkModel.insert_many(standard_links)
        inserted_ids = result.inserted_ids
        links = await BioLinkModel.find_many({"_id": {"$in": inserted_ids}}).to_list()

        user = cls(
            username=username,
            email=email,
            password=password,
            bio=bio,
            links=links,
            experiences=[],
            projects=[],
            education=[],
            skills=[],
            achievements=[],
            certifications=[],
        )
        return await user.insert()

    @classmethod
    async def user_exists(cls, email: EmailStr, username: str):
        return await cls.find(
            Or(cls.username == username), (cls.email == email)
        ).first_or_none()

    @classmethod
    async def find_by_id_or_username(cls, user_id: str, fetch_links: bool = False):
        object_id = None
        if ObjectId.is_valid(user_id):
            object_id = PydanticObjectId(user_id)

        query = {"$or": []}

        if object_id:
            query["$or"].append({"_id": object_id})
        query["$or"].append({"username": user_id})

        user = await cls.find_one(query)
        if user is None:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "user not found")
        return user

    async def to_response(self):
        await self.fetch_all_links()

        res = UserResponse(
            userId=str(self.userId),
            username=self.username,
            email=self.email,
            bio=BioResponse(**self.bio.dict()) if self.bio else BioResponse(),
            links=[BioLinkResponse(**link.dict()) for link in self.links]
            if self.links
            else [],
            experiences=[ExperienceResponse(**exp.dict()) for exp in self.experiences]
            if self.experiences
            else [],
            projects=[ProjectResponse(**proj.dict()) for proj in self.projects]
            if self.projects
            else [],
            education=[EducationResponse(**edu.dict()) for edu in self.education]
            if self.education
            else [],
            skills=[SkillResponse(**skill.dict()) for skill in self.skills]
            if self.skills
            else [],
            achievements=[
                AchievementResponse(**achv.dict()) for achv in self.achievements
            ]
            if self.achievements
            else [],
            certifications=[
                CertificationResponse(**cert.dict()) for cert in self.certifications
            ]
            if self.certifications
            else [],
        )

        print(res)

        return res
