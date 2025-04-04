from pydantic import EmailStr
from beanie import Document
import schemas.user_schema as UserSchema

# MongoDB User Model
class UserModel(Document):
    username: str
    email: EmailStr
    password: str

    class Settings:
        name = "users"

    @classmethod
    async def user_exists(cls, email: EmailStr, username: str) -> bool:
        user = await cls.find_one(
            {
                "$or":[
                    {"email": email}, 
                    {"username": username}
                ]
            }
        ) 
        print(user)
        return user != None
    
    def to_response(self):
        return UserSchema.UserResponse(id=str(self.id), username=self.username, email=self.email)