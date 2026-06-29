import { Button } from "@/app/components/ui/button";

import { CopyIcon } from "lucide-react";

import { toast } from "sonner";

function CopyButton({ password }: { password: string | undefined }) {
  const copyPassword = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      toast("Senha copiada para a área de transferência.");
    }
  };

  return (
    <Button
      onClick={copyPassword}
      disabled={!password}
      variant="outline"
      size="icon"
      className="hover:text-primary"
    >
      <CopyIcon />
    </Button>
  );
}

export { CopyButton };
