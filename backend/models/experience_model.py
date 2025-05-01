from datetime import date
from typing import List, Optional

from beanie import Document, PydanticObjectId
from pydantic import Field


class ExperienceModel(Document):
    expId: PydanticObjectId = Field(default_factory=PydanticObjectId, alias="_id")
    role: str = ""
    company: str = ""
    startDate: date = None
    endDate: Optional[date] = None
    isPursuing: bool
    points: List[str]

    class Settings:
        name = "education"

    class Config:
        populate_by_name = True
