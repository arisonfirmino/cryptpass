"use client";

import { useState } from "react";

import { cn } from "@/app/lib/utils";
import { CopyButton } from "@/app/components/ui/copy-button";
import { PasswordVisibilityButton } from "@/app/components/ui/password-visibility-button";

function PasswordDisplay({
  password,
  isLoading,
}: {
  password: string | undefined;
  isLoading: boolean;
}) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="flex w-full items-end gap-3">
      <div className="flex w-full flex-col gap-1 text-sm">
        <span className="text-muted-foreground">Senha</span>

        <div className="flex h-8 w-full items-center rounded-sm border px-3 py-2">
          <span
            className={cn(
              isLoading
                ? "text-muted-foreground"
                : password
                  ? "text-foreground font-medium"
                  : "text-muted-foreground",
            )}
          >
            {isLoading
              ? "Carregando"
              : isHidden
                ? "****************"
                : password
                  ? password
                  : "aF4!"}
          </span>
        </div>
      </div>

      <CopyButton password={password} />

      <PasswordVisibilityButton
        password={password}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
    </div>
  );
}

export { PasswordDisplay };
