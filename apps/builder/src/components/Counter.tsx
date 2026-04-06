import { NumberField } from "@typebot.io/ui/components/NumberField";
import { cn } from "@typebot.io/ui/lib/cn";
import { useState } from "react";

type Props = {
  /**
   * The initial value of the counter
   * @default 0
   */
  defaultValue?: number;

  /**
   * Callback function triggered when the counter value changes
   */
  onValueChange?: (value: number) => void;

  /**
   * Minimum allowed counter value
   */
  min?: number;

  /**
   * Maximum allowed counter value
   */
  max?: number;

  /**
   * Increment/decrement step value
   * @default 1
   */
  step?: number;

  /**
   * Whether the counter is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Placeholder text displayed in the input field
   */
  placeholder?: string;

  /**
   * Additional CSS class names to apply
   */
  className?: string;
};

/**
 * Counter Component
 * A numeric counter component with increment/decrement buttons.
 * Uses the NumberField from the UI package for consistent styling and behavior.
 */
export const Counter = ({
  defaultValue = 0,
  onValueChange,
  min,
  max,
  step = 1,
  disabled = false,
  placeholder,
  className,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<number | null>(defaultValue);

  const handleValueChange = (newValue: number | null) => {
    setValue(newValue);
    if (newValue !== null && onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <NumberField.Root
      onValueChange={handleValueChange}
      defaultValue={value ?? defaultValue}
      step={step}
      largeStep={step * 10}
      smallStep={step / 10}
      min={min}
      max={max}
      disabled={disabled}
      className={className}
    >
      <NumberField.Group
        data-focus={isFocused}
        className={cn(
          "data-[focus=true]:outline-none data-[focus=true]:ring-orange-8 data-[focus=true]:ring-2 data-[focus=true]:border-transparent rounded-md transition-[box-shadow,border-color]",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <NumberField.Decrement />
        <NumberField.Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="focus:outline-none focus:ring-0 focus:border-gray-6"
          placeholder={placeholder}
        />
        <NumberField.Increment />
      </NumberField.Group>
    </NumberField.Root>
  );
};
