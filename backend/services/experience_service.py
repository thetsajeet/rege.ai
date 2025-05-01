# import schemas.experience_schema as ExperienceSchema
# from beanie import PydanticObjectId
# from fastapi import HTTPException
# from models.experience_model import ExperienceModel
# from models.user_model import UserModel
#
#
# # update user's bio
# async def update_experience(user_id: str, body: ExperienceSchema.UpdateExperiences):
#     user_obj_id = PydanticObjectId(user_id)
#     user = await UserModel.get(user_obj_id)
#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")
#
#     items = body.items
#
#     existing_items = await ExperienceModel.find(
#         ExperienceModel.user_id == user_obj_id
#     ).to_list()
#     existing_map = {str(exp.id): exp for exp in existing_items}
#
#     incoming_ids = set()
#     latest_experiences = []
#
#     for item in items:
#         item_data = item.dict(exclude_unset=True)
#
#         if item.id is not None and str(item.id) in existing_map:
#             exp = existing_map[str(item.id)]
#
#             for k, v in item_data.items():
#                 if k != "id":
#                     setattr(exp, k, v)
#             await exp.save()
#
#             incoming_ids.add(str(item.id))
#             latest_experiences.append(exp)
#         else:
#             new_exp = ExperienceModel(**item_data, user_id=user_obj_id)
#             await new_exp.insert()
#             latest_experiences.append(new_exp)
#
#     to_delete = [
#         exp for exp_id, exp in existing_map.items() if exp_id not in incoming_ids
#     ]
#     for exp in to_delete:
#         await exp.delete()
#
#     user.experiences = latest_experiences
#     await user.save()
#
#     return ExperienceSchema.UpdateExperiencesSuccess(message="Success")
