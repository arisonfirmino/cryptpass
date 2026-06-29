import { Slider } from "@/app/components/ui/slider";

function LengthSlider({
  length,
  setLength,
}: {
  length: number;
  setLength: (value: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Comprimento</span>
        <span className="font-medium">{length}</span>
      </div>

      <Slider
        value={[length]}
        onValueChange={(value) => setLength(value[0])}
        defaultValue={[8]}
        max={16}
        step={1}
      />
    </div>
  );
}

export { LengthSlider };
