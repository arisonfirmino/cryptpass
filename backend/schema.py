from pydantic import BaseModel


class PasswordResponse(BaseModel):
    password: str


class PasswordRequest(BaseModel):
    length: int
    lowercase: bool = True
    uppercase: bool = True
    numbers: bool = True
    symbols: bool = True
