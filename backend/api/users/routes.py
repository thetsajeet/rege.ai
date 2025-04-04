from fastapi import APIRouter, HTTPException, status
import schemas.user_schema as UserSchema
from typing import List
import services.user_service as UserService

router = APIRouter(prefix="/users", tags=["User"])

users: List[UserSchema.UserResponse] = [
  { "id": "1", "username": "john_doe", "email": "john.doe@example.com", "password": "123" },
  { "id": "2", "username": "jane_smith", "email": "jane.smith@example.com", "password": "123" },
  { "id": "3", "username": "alice_wonder", "email": "alice@example.com", "password": "123" },
  { "id": "4", "username": "bob_builder", "email": "bob.builder@example.com", "password": "123" },
  { "id": "5", "username": "charlie_brown", "email": "charlie.brown@example.com", "password": "123" }
]

@router.get("/", response_model=UserSchema.UserGetAllResponse, status_code=status.HTTP_200_OK)
def get_all_users():
    return {"users": [UserSchema.UserResponse(id=user["id"], username=user["username"], email=user["email"]) for user in users]}

@router.get("/{user_id}", response_model=UserSchema.UserResponse, status_code=status.HTTP_200_OK)
def get_user(user_id: str):
    for user in users:
        if user["id"] == user_id:
            return UserSchema.UserResponse(id=user["id"], email=user["email"], username=user["username"])
    
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="user not found")

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=UserSchema.UserResponse)
async def create_user(body: UserSchema.UserCreateRequest):
    user = await UserService.register_user(body)
    return user.to_response()

@router.put("/{user_id}", status_code=status.HTTP_200_OK, response_model=UserSchema.UserResponse)
def update_user(user_id: str, updated_user: UserSchema.UserUpdateRequest):
    for user in users:
        if user["id"] == user_id:
            for k, v in updated_user.model_dump().items():
                if v is not None:
                    user[k] = v
            return user
    
    return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="user not found")

@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(user_id: str):
    for i in range(len(users)):
        if users[i]["id"] == user_id:
            users.pop(i)
            return
    
    return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="user not found")