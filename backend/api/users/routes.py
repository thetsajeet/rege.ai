from fastapi import APIRouter, HTTPException, status
import schemas.user_schema as UserSchema
from typing import List
import services.user_service as UserService

router = APIRouter(prefix="/users", tags=["User"])

users = []

@router.get("/", response_model=UserSchema.UserGetAllResponse, status_code=status.HTTP_200_OK)
async def get_all_users():
    return await UserService.get_users() 

@router.get("/{user_id}", response_model=UserSchema.UserResponse, status_code=status.HTTP_200_OK)
async def get_user(user_id: str):
    return await UserService.get_user(user_id)

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=UserSchema.UserResponse)
async def create_user(body: UserSchema.UserCreateRequest):
    return await UserService.register_user(body)

@router.put("/{user_id}", status_code=status.HTTP_200_OK, response_model=UserSchema.UserResponse)
async def update_user(user_id: str, updated_user: UserSchema.UserUpdateRequest):
    for user in users:
        if user["id"] == user_id:
            for k, v in updated_user.model_dump().items():
                if v is not None:
                    user[k] = v
            return user
    
    return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="user not found")

@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: str):
    for i in range(len(users)):
        if users[i]["id"] == user_id:
            users.pop(i)
            return
    
    return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="user not found")