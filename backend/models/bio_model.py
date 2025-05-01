from datetime import date
from typing import Optional

from beanie import Document, PydanticObjectId
from pydantic import Field


# MongoDB Bio Model
class BioModel(Document):
    bioId: PydanticObjectId = Field(default_factory=PydanticObjectId, alias="_id")
    fullName: Optional[str] = ""
    profession: Optional[str] = ""
    location: Optional[str] = ""
    imageUrl: Optional[str] = ""
    dob: Optional[date] = None

    class Settings:
        name = "bio"

    class Config:
        populate_by_name = True
