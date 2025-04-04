from models.user_model import UserModel
import schemas.user_schema as UserSchema
from fastapi import HTTPException, status

# signup
async def register_user(body: UserSchema.UserCreateRequest):
    if await UserModel.user_exists(body.email, body.username): 
        raise HTTPException(status.HTTP_400_BAD_REQUEST, "user already exists")
    user_dict = body.model_dump()
    user = UserModel(**user_dict)
    result = await user.insert_one(user)
    return result.to_response()
    
# login
async def login_user():
    pass

# logout
async def logout_user():
    pass

# get all users
async def get_users():
    users = await UserModel.find().to_list()
    return {"users": [u.to_response() for u in users]}

# get a user
async def get_user(user_id: str):
    user = await UserModel.get(user_id)
    if not user:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "user not found")
    return user.to_response()

# update a user
async def update_user():
    pass

# delete a user
async def delete_user():
    pass
