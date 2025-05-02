from datetime import date
from typing import List, Optional

from beanie import PydanticObjectId
from pydantic import BaseModel, Field


class ExperienceResponse(BaseModel):
    expId: PydanticObjectId = Field(default_factory=PydanticObjectId, alias="_id")
    role: str = ""
    company: str = ""
    startDate: date = None
    endDate: Optional[date] = None
    isPursuing: bool
    points: List[str]


class UpdateExperiences(BaseModel):
    items: List[ExperienceResponse]


class UpdateExperiencesSuccess(BaseModel):
    message: str
