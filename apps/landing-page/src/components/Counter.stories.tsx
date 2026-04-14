import { Counter } from "./Counter";

export const Default = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-1 p-4">
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-12">Counter - Default</h2>
        <Counter />
      </div>
    </div>
  );
};

export const CustomStart = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-1 p-4">
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-12">Counter - Custom Start (10)</h2>
        <Counter initialCount={10} />
      </div>
    </div>
  );
};

export const DisabledState = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-1 p-4">
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-12">Counter - Disabled State</h2>
        <Counter disabled initialCount={5} />
      </div>
    </div>
  );
};
