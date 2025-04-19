from beanie import Document, PydanticObjectId


# MongoDB Bio Model
class BioModel(Document):
    user_id: PydanticObjectId
    fullName: str = ""
    profession: str = ""
    location: str = ""
    dob: str = ""  # update to date

    class Settings:
        name = "bio"
