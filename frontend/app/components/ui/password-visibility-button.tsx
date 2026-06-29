import { Button } from "@/app/components/ui/button";

import { EyeIcon, EyeOffIcon } from "lucide-react";

function PasswordVisibilityButton({
  password,
  isHidden,
  setIsHidden,
}: {
  password: string | undefined;
  isHidden: boolean;
  setIsHidden: (value: boolean) => void;
}) {
  return (
    <Button
      onClick={() => setIsHidden(!isHidden)}
      disabled={!password}
      variant="outline"
      size="icon"
      className="hover:text-primary"
    >
      {isHidden ? <EyeOffIcon /> : <EyeIcon />}
    </Button>
  );
}

export { PasswordVisibilityButton };
