"use client";

import { useState } from "react";

import axios from "axios";

import { PasswordDisplay } from "@/app/components/ui/password-display";
import { LengthSlider } from "@/app/components/ui/length-slider";
import { PasswordOption } from "@/app/components/ui/password-option";

import { Button } from "@/app/components/ui/button";

import { PasswordStrength } from "@/app/components/ui/password-strength";
import { PasswordSuggestions } from "@/app/components/ui/password-suggestions";
import { ErrorMessage } from "@/app/components/ui/error-message";

import { LoaderCircleIcon, LockKeyholeIcon } from "lucide-react";

type PasswordResponse = {
  password: string;
  score: number;
  strength: {
    feedback: {
      suggestions: string[];
      warning: string;
    };
    level: string;
    score: number;
  };
};

function PasswordGenerator() {
  const [password, setPassword] = useState<PasswordResponse | null>(null);

  const [length, setLength] = useState(4);

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const generatePassword = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await axios.post(
        "https://cryptpass.onrender.com/passwords/generate",
        {
          length: length,
          lowercase: lowercase,
          uppercase: uppercase,
          numbers: numbers,
          symbols: symbols,
        },
      );

      setPassword(response.data);
      setIsLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.detail || "Ocorreu um erro ao gerar a senha.",
        );
      } else {
        setError("Ocorreu um erro inesperado.");
      }

      setIsLoading(false);
    }
  };

  return (
    <section className="relative mr-10 flex h-full w-full max-w-87.5 flex-col gap-3 py-10">
      <p className="text-primary text-center text-xl font-bold uppercase">
        cryptpass
      </p>

      <PasswordDisplay password={password?.password} isLoading={isLoading} />

      <LengthSlider length={length} setLength={setLength} />

      <PasswordOption
        label="Letras minúsculas"
        checked={lowercase}
        onCheckedChange={setLowercase}
      />
      <PasswordOption
        label="Letras maiúsculas"
        checked={uppercase}
        onCheckedChange={setUppercase}
      />
      <PasswordOption
        label="Números"
        checked={numbers}
        onCheckedChange={setNumbers}
      />
      <PasswordOption
        label="Símbolos"
        checked={symbols}
        onCheckedChange={setSymbols}
      />

      <Button
        disabled={isLoading}
        onClick={generatePassword}
        className="justify-between"
      >
        {isLoading ? "Carregando" : "Gerar Senha"}
        {isLoading ? (
          <LoaderCircleIcon className="animate-spin" />
        ) : (
          <LockKeyholeIcon />
        )}
      </Button>

      {password?.password && (
        <PasswordStrength strength={password?.strength.level} />
      )}

      {password?.password &&
        password.strength.feedback.suggestions.length > 0 && (
          <PasswordSuggestions
            suggestions={password.strength.feedback.suggestions}
          />
        )}

      {error && <ErrorMessage error={error} />}

      <span className="text-muted-foreground absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-nowrap">
        © 2026 Arison Firmino. All Rights Reserved
      </span>
    </section>
  );
}

export { PasswordGenerator };
