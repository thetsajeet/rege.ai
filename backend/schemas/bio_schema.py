from pydantic import BaseModel


class BioUpdateRequest(BaseModel):
    fullName: str
    profession: str
    dob: str
    location: str


class BioUpdateSuccessResponse(BaseModel):
    message: str


class BioResponse(BaseModel):
    fullName: str
    profession: str
    dob: str
    location: str
