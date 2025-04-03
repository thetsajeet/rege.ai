from fastapi import FastAPI
import api.users.routes as user_router

app = FastAPI()

app.include_router(user_router.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "resume generator backend", "status": "ok"}
