import schemas.bio_schema as BioSchema
import schemas.user_schema as UserSchema
from beanie import Document, Link, PydanticObjectId
from beanie.operators import Or
from fastapi import HTTPException, status
from pydantic import EmailStr, Field

from .bio_model import BioModel


# MongoDB User Model
class UserModel(Document):
    userId: PydanticObjectId = Field(default_factory=PydanticObjectId, alias="_id")
    username: str
    email: EmailStr
    password: str
    bio: Link[BioModel]
    # links: List[Link[BioLinkModel]] = Field(default_factory=list)
    # experiences: List[Link[ExperienceModel]] = Field(default_factory=list)
    # projects: List[Link[ProjectModel]] = Field(default_factory=list)
    # education: List[Link[EducationModel]] = Field(default_factory=list)
    # skills: List[Link[SkillModel]] = Field(default_factory=list)
    # achievements: List[Link[AchievementModel]] = Field(default_factory=list)
    # certifications: List[Link[CertificationModel]] = Field(default_factory=list)

    class Settings:
        name = "users"

    class Config:
        populate_by_name = True

    @classmethod
    async def create_with_defaults(cls, username: str, email: EmailStr, password: str):
        bio = await BioModel(dob=None).insert()
        user = cls(
            username=username,
            email=email,
            password=password,
            bio=bio,
            # links=[],
            # experiences=[],
            # projects=[],
            # education=[],
            # skills=[],
            # achievements=[],
            # certifications=[],
        )
        return await user.insert()

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
        print(self.bio)
        return UserSchema.UserResponse(
            userId=str(self.userId),
            username=self.username,
            email=self.email,
            # Bio - return an empty BioResponse object if bio is None
            bio=BioSchema.BioResponse(**self.bio.dict())
            if self.bio
            else BioSchema.BioResponse(),
            # Experiences - return an empty list if experiences is None
            # experiences=[
            #     ExperienceSchema.ExperienceResponse(**exp.dict())
            #     for exp in self.experiences
            # ]
            # if self.experiences
            # else [],
            # # Projects - return an empty list if projects is None
            # projects=[
            #     ProjectSchema.ProjectResponse(**proj.dict()) for proj in self.projects
            # ]
            # if self.projects
            # else [],
            # # Education - return an empty list if education is None
            # education=[
            #     EducationSchema.EducationResponse(**edu.dict())
            #     for edu in self.education
            # ]
            # if self.education
            # else [],
            # # Skills - return an empty list if skills is None
            # skills=[SkillSchema.SkillResponse(**skill.dict()) for skill in self.skills]
            # if self.skills
            # else [],
            # # Achievements - return an empty list if achievements is None
            # achievements=[
            #     AchievementSchema.AchievementResponse(**achv.dict())
            #     for achv in self.achievements
            # ]
            # if self.achievements
            # else [],
            # # Certifications - return an empty list if certifications is None
            # certifications=[
            #     CertificationSchema.CertificationResponse(**cert.dict())
            #     for cert in self.certifications
            # ]
            # if self.certifications
            # else [],
        )
