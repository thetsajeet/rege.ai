from models.user_model import UserModel
import schemas.user_schema as UserSchema
from fastapi import HTTPException, status

# signup
async def register_user(body: UserSchema.UserCreateRequest):
    if await UserModel.user_exists(body.email, body.username) is None: 
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
    if user is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "user not found")
    return user.to_response()

# update a user
async def update_user(user_id: str, body: UserSchema.UserUpdateRequest):
    user = await UserModel.get(user_id)
    if user is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "user not found")
    for k, v in body.model_dump().items():
        if v is None:
            continue
        setattr(user, k, v)
    await user.save()
    return user.to_response()

# delete a user
async def delete_user():
    pass
