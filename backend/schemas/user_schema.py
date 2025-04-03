from pydantic import BaseModel, EmailStr
from typing import List, Optional

class UserCreateRequest(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: str
    username: str
    email: EmailStr

class UserGetAllResponse(BaseModel):
    users: List[UserResponse]

class UserUpdateRequest(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None