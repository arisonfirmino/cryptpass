from fastapi import APIRouter, HTTPException

from schema import PasswordResponse, PasswordRequest

router = APIRouter(prefix="/passwords", tags=["passwords"])


@router.get("/generate", response_model=PasswordResponse)
def generate(data: PasswordRequest):
    try:
        password = "abcd1234"

        return {"password": password}
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error))
