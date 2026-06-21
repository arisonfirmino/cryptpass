from fastapi import APIRouter, HTTPException

from generate_password import generate_password

from schema import PasswordResponse, PasswordRequest

router = APIRouter(prefix="/passwords", tags=["passwords"])


@router.post("/generate", response_model=PasswordResponse)
def generate(data: PasswordRequest):
    try:
        password = generate_password(data=data)

        return {"password": password}
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error))
