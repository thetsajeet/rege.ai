from typing import List, Optional

import schemas.bio_schema as BioSchema
from pydantic import BaseModel, EmailStr


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
    id: str
    username: str
    email: EmailStr
    bio: Optional[BioSchema.BioResponse]


class UserGetAllResponse(BaseModel):
    users: List[UserResponse]


class UserUpdateRequest(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None
