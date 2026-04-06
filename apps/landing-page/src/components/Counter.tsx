import { cn } from "@typebot.io/ui/lib/cn";
import { cva, cx, type VariantProps } from "@typebot.io/ui/lib/cva";
import * as React from "react";

const counterVariants = cva(
  cx(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer select-none shrink-0",
    "focus-visible:ring-2 focus-visible:ring-orange-8 outline-hidden",
  ),
  {
    variants: {
      variant: {
        default: "bg-orange-9 hover:bg-orange-10 active:bg-orange-11 text-gray-1 dark:text-gray-12",
        secondary: "bg-gray-3 hover:bg-gray-4 active:bg-gray-5",
        outline: "bg-transparent border hover:bg-gray-2 active:bg-gray-3",
        ghost: "text-gray-12 bg-transparent hover:bg-gray-4 active:bg-gray-5 border border-transparent",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3",
        lg: "h-11 px-6 rounded-lg text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface CounterProps extends VariantProps<typeof counterVariants> {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  (
    {
      value,
      defaultValue = 0,
      onValueChange,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      variant = "default",
      size = "default",
      className,
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue);

    const currentValue = isControlled ? value : internalValue;

    const handleIncrement = () => {
      if (disabled) return;
      const newValue = Math.min(currentValue + step, max);
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const handleDecrement = () => {
      if (disabled) return;
      const newValue = Math.max(currentValue - step, min);
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value, 10);
      if (!isNaN(newValue)) {
        const clampedValue = Math.min(Math.max(newValue, min), max);
        if (!isControlled) {
          setInternalValue(clampedValue);
        }
        onValueChange?.(clampedValue);
      }
    };

    const buttonClassName = cn(
      counterVariants({ variant, size }),
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
    );

    return (
      <div ref={ref} className={cn("inline-flex gap-2 items-center", className)}>
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled || currentValue <= min}
          data-disabled={disabled || currentValue <= min}
          className={buttonClassName}
          data-slot="counter-decrement"
        >
          −
        </button>

        <input
          type="number"
          value={currentValue}
          onChange={handleInputChange}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          className={cn(
            "w-16 text-center h-9 px-2 py-1 rounded-md border border-input transition-[box-shadow,border-color]",
            "focus:outline-hidden focus:ring-orange-8 focus:ring-2 focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          )}
          data-slot="counter-input"
        />

        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled || currentValue >= max}
          data-disabled={disabled || currentValue >= max}
          className={buttonClassName}
          data-slot="counter-increment"
        >
          +
        </button>
      </div>
    );
  },
);

Counter.displayName = "Counter";

export { Counter };
