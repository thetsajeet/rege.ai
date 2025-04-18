import models.bio_model as BioModel
import schemas.bio_schema as BioSchema
from fastapi import HTTPException


# update user's bio
async def update_bio(user_id: str, body: BioSchema.BioUpdateRequest):
    bio = await BioModel.find_one(BioModel.user_id == user_id)
    if bio is None:
        raise HTTPException(status_code=404, detail="User not found")

    for k, v in body.model_dump().items():
        if v is None:
            continue
        setattr(bio, k, v)
    await bio.save()
    return BioSchema.BioUpdateSuccessResponse(message="Update successful")
