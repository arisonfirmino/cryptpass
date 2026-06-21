from fastapi import APIRouter, HTTPException

from generate_password import generate_password
from password_strength import password_strength

from schema import PasswordResponse, PasswordRequest

router = APIRouter(prefix="/passwords", tags=["passwords"])


@router.post("/generate", response_model=PasswordResponse)
def generate(data: PasswordRequest):
    try:
        password = generate_password(data=data)
        strength = password_strength(password)

        return {"password": password, "strength": strength}
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error))
