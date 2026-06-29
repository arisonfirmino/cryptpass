function PasswordSuggestions({ suggestions }: { suggestions: string[] }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-muted-foreground text-xs">Sugestões:</span>

      {suggestions.map((suggestion, index) => (
        <p key={index} className="text-sm">
          {suggestion}
        </p>
      ))}
    </div>
  );
}

export { PasswordSuggestions };
