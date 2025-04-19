from typing import List, Optional

from beanie import Document, PydanticObjectId


# MongoDB Bio Model
class ExperienceModel(Document):
    user_id: PydanticObjectId
    role: str
    company: str
    startMonth: str  # update to date
    startYear: str
    endMonth: Optional[str]  # update to date
    endYear: Optional[str]
    isWorkingHere: bool
    highlights: List[str]

    class Settings:
        name = "experience"
