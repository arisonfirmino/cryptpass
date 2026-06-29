function PasswordStrength({ strength }: { strength: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-muted-foreground text-xs">Nível da senha:</span>
      <p className="text-sm">{strength}</p>
    </div>
  );
}

export { PasswordStrength };
