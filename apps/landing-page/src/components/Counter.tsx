import * as React from "react";
import { cn } from "@typebot.io/ui/lib/cn";

interface CounterProps {
  initialCount?: number;
  disabled?: boolean;
}

export const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ initialCount = 0, disabled = false }, ref) => {
    const [count, setCount] = React.useState(initialCount);

    const increment = () => !disabled && setCount((c) => c + 1);
    const decrement = () => !disabled && setCount((c) => c - 1);
    const reset = () => !disabled && setCount(initialCount);

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-6",
          disabled && "opacity-50"
        )}
      >
        <div className="border-2 border-blue-9 rounded-md px-6 py-2">
          <div className="text-4xl font-bold text-gray-12">{count}</div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={decrement}
            disabled={disabled}
            className={cn(
              "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-colors cursor-pointer select-none shrink-0",
              "focus-visible:ring-2 focus-visible:ring-orange-8 outline-hidden",
              "h-12 px-6 py-3",
              disabled
                ? "pointer-events-none opacity-50"
                : "bg-gray-3 hover:bg-gray-4 active:bg-gray-5"
            )}
            type="button"
          >
            -
          </button>

          <button
            onClick={reset}
            disabled={disabled}
            className={cn(
              "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-colors cursor-pointer select-none shrink-0",
              "focus-visible:ring-2 focus-visible:ring-orange-8 outline-hidden",
              "h-12 px-6 py-3",
              disabled
                ? "pointer-events-none opacity-50"
                : "bg-gray-3 hover:bg-gray-4 active:bg-gray-5"
            )}
            type="button"
          >
            Reset
          </button>

          <button
            onClick={increment}
            disabled={disabled}
            className={cn(
              "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-colors cursor-pointer select-none shrink-0",
              "focus-visible:ring-2 focus-visible:ring-orange-8 outline-hidden",
              "h-12 px-6 py-3",
              disabled
                ? "pointer-events-none opacity-50"
                : "bg-orange-9 hover:bg-orange-10 active:bg-orange-11 text-gray-1 dark:text-gray-12"
            )}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    );
  }
);

Counter.displayName = "Counter";
