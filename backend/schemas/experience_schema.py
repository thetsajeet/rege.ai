from typing import List, Optional

from beanie import PydanticObjectId
from pydantic import BaseModel


class ExperienceResponse(BaseModel):
    id: Optional[PydanticObjectId] = None
    role: str
    company: str
    startMonth: str  # update to date
    startYear: str
    endMonth: Optional[str]  # update to date
    endYear: Optional[str]
    isWorkingHere: bool
    highlights: List[str]


class UpdateExperiences(BaseModel):
    items: List[ExperienceResponse]


class UpdateExperiencesSuccess(BaseModel):
    message: str
