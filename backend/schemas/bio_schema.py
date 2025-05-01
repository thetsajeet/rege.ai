from datetime import date
from typing import Optional

from beanie import PydanticObjectId
from pydantic import BaseModel


class BioResponse(BaseModel):
    bioId: PydanticObjectId  # MongoDB _id alias for the bio model
    fullName: Optional[str] = None
    location: Optional[str] = None
    profession: Optional[str] = None
    dob: Optional[date] = None
    imageUrl: Optional[str] = None
    phone: Optional[str] = None
