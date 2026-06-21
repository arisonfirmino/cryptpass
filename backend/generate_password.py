import string
import secrets

from schema import PasswordRequest


def generate_password(data: PasswordRequest) -> str:
    chars = ""
    required_chars = []

    if data.length < 4:
        raise ValueError("O tamanho mínimo da senha é 4.")

    if data.length > 128:
        raise ValueError("O tamanho máximo da senha é 128.")

    if data.lowercase:
        chars += string.ascii_lowercase
        required_chars.append(secrets.choice(string.ascii_lowercase))

    if data.uppercase:
        chars += string.ascii_uppercase
        required_chars.append(secrets.choice(string.ascii_uppercase))

    if data.numbers:
        chars += string.digits
        required_chars.append(secrets.choice(string.digits))

    if data.symbols:
        chars += string.punctuation
        required_chars.append(secrets.choice(string.punctuation))

    if not chars:
        raise ValueError("Pelo menos um tipo de caractere deve ser selecionado.")

    if data.length < len(required_chars):
        raise ValueError(f"O tamanho mínimo deve ser {len(required_chars)}.")

    password = required_chars.copy()

    while len(password) < data.length:
        password.append(secrets.choice(chars))

    for i in range(len(password) - 1, 0, -1):
        j = secrets.randbelow(i + 1)
        password[i], password[j] = password[j], password[i]

    return "".join(password)
