from pydantic import EmailStr
from beanie import Document
import schemas.user_schema as UserSchema
from beanie.operators import Or
from fastapi import HTTPException, status

# MongoDB User Model
class UserModel(Document):
    username: str
    email: EmailStr
    password: str

    class Settings:
        name = "users"

    @classmethod
    async def user_exists(cls, email: EmailStr, username: str):
        return await cls.find(
            Or(cls.username == username), (cls.email == email)
        ).first_or_none()
    
    @classmethod
    async def find_by_id(cls, user_id: str):
        user = await cls.get(user_id)
        if user is None:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "user not found")
        return user
    
    def to_response(self):
        return UserSchema.UserResponse(id=str(self.id), username=self.username, email=self.email)