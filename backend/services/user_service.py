import schemas.user_schema as UserSchema
from fastapi import HTTPException, status
from models.bio_model import BioModel
from models.user_model import UserModel


# signup
async def register_user(body: UserSchema.UserCreateRequest):
    if await UserModel.user_exists(body.email, body.username) is not None:
        raise HTTPException(status.HTTP_400_BAD_REQUEST, "user already exists")
    user_dict = body.model_dump()
    user = UserModel(**user_dict)
    await user.insert()
    bio = BioModel(user_id=user.id)
    await bio.insert()
    user.bio = bio
    await user.save()
    return user.to_response()


# login
async def login_user():
    pass


# logout
async def logout_user():
    pass


# get all users
async def get_users():
    users = await UserModel.find(fetch_links=True).to_list()
    print(users)
    return {"users": [u.to_response() for u in users]}


# get a user
async def get_user(user_id: str):
    user = await UserModel.find_by_id(user_id, fetch_links=True)
    print(user)
    return user.to_response()


# update a user
async def update_user(user_id: str, body: UserSchema.UserUpdateRequest):
    user = await UserModel.find_by_id(user_id, fetch_links=True)
    for k, v in body.model_dump().items():
        if v is None:
            continue
        setattr(user, k, v)
    await user.save()
    return user.to_response()


# delete a user
async def delete_user(user_id: str):
    user = await UserModel.find_by_id(user_id)
    # TODO: Delete all linked entities
    await user.delete()
