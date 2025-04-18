from fastapi import APIRouter, status
from schemas.bio_schema import BioSchema
from services.bio_service import BioService

router = APIRouter(prefix="/bio", tags=["User Bio"])


@router.put(
    "/",
    status_code=status.HTTP_202_ACCEPTED,
    response_model=BioSchema.BioUpdateSuccessResponse,
)
async def update_bio(user_id: str, body: BioSchema.BioUpdateRequest):
    return await BioService.update_bio(user_id, body)
