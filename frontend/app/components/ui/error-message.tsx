function ErrorMessage({ error }: { error: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-muted-foreground text-xs">Erro:</span>
      <p className="text-sm">{error}</p>
    </div>
  );
}

export { ErrorMessage };
