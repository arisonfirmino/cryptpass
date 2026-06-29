import { Switch } from "@/app/components/ui/switch";

function PasswordOption({
  label,
  checked,
  onCheckedChange,
}: {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="text-muted-foreground flex items-center justify-between text-sm">
      <span>{label}</span>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

export { PasswordOption };
