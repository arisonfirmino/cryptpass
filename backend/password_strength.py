from zxcvbn import zxcvbn


def password_strength(password: str):
    strength = zxcvbn(password)

    levels = {0: "Muito fraca", 1: "Fraca", 2: "Razoável", 3: "Forte", 4: "Muito forte"}

    return {
        "score": strength["score"],
        "level": levels[strength["score"]],
        "feedback": strength["feedback"],
    }
