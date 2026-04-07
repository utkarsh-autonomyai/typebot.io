import type { Meta, StoryObj } from "@storybook/react-vite";
import { RouterProvider, createRouter, createRootRoute, createRoute, createMemoryHistory } from "@tanstack/react-router";

// Import the component - but it's tied to the route, so we'll extract the LoginPage
// We need to recreate the component standalone for Storybook

import { Button } from "@typebot.io/ui/components/Button";
import { Checkbox } from "@typebot.io/ui/components/Checkbox";
import { Field } from "@typebot.io/ui/components/Field";
import { Input } from "@typebot.io/ui/components/Input";
import { Label } from "@typebot.io/ui/components/Label";
import { GithubIcon } from "@typebot.io/ui/icons/GithubIcon";
import { Mail01Icon } from "@typebot.io/ui/icons/Mail01Icon";
import { SquareLock01Icon } from "@typebot.io/ui/icons/SquareLock01Icon";
import { ViewIcon } from "@typebot.io/ui/icons/ViewIcon";
import { ViewOffSlashIcon } from "@typebot.io/ui/icons/ViewOffSlashIcon";
import { useState, type FormEvent } from "react";
import { Card } from "@/components/Card";
import { TypebotLogoFull } from "@/components/TypebotLogo";

const registerUrl = "https://app.typebot.com/register";

const GoogleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <title>Google Logo</title>
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
    </g>
  </svg>
);

const DividerWithText = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center">
    <div className="flex-1"><div className="h-px bg-gray-6" /></div>
    <span className="px-3 text-gray-11 text-sm">{children}</span>
    <div className="flex-1"><div className="h-px bg-gray-6" /></div>
  </div>
);

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center gap-6">
          <TypebotLogoFull className="h-8" />
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Welcome back</h1>
            <p className="text-gray-11 mt-1">Sign in to your account</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <Field.Root>
            <Field.Label className="text-sm font-medium">Email</Field.Label>
            <div className="relative">
              <Mail01Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-11 size-4" />
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </Field.Root>

          <Field.Root>
            <Field.Label className="text-sm font-medium">Password</Field.Label>
            <div className="relative">
              <SquareLock01Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-11 size-4" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-11 hover:text-gray-12"
              >
                {showPassword ? <ViewOffSlashIcon className="size-4" /> : <ViewIcon className="size-4" />}
              </button>
            </div>
          </Field.Root>

          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2 cursor-pointer">
              <Checkbox checked={rememberMe} onCheckedChange={(checked) => setRememberMe(checked === true)} />
              <span className="text-sm">Remember me</span>
            </Label>
            <a href="/forgot-password" className="text-sm text-orange-9 hover:text-orange-10">
              Forgot password?
            </a>
          </div>

          <Button type="submit" size="lg" className="w-full mt-2" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="mt-6">
          <DividerWithText>or continue with</DividerWithText>
          <div className="mt-4 flex gap-3">
            <Button variant="outline" className="flex-1">
              <GoogleLogo className="size-4" />
              Google
            </Button>
            <Button variant="outline" className="flex-1">
              <GithubIcon className="size-4" />
              GitHub
            </Button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-11">
          Don't have an account?{" "}
          <a href={registerUrl} className="text-orange-9 hover:text-orange-10 font-medium">
            Sign up
          </a>
        </p>
      </Card>
    </div>
  );
}

const meta: Meta<typeof LoginPage> = {
  title: "Pages/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};

export const WithPrefilledEmail: Story = {
  render: () => {
    const [email, setEmail] = useState("user@example.com");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1000);
    };

    return (
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md p-8">
          <div className="flex flex-col items-center gap-6">
            <TypebotLogoFull className="h-8" />
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Welcome back</h1>
              <p className="text-gray-11 mt-1">Sign in to your account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <Field.Root>
              <Field.Label className="text-sm font-medium">Email</Field.Label>
              <div className="relative">
                <Mail01Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-11 size-4" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </Field.Root>

            <Field.Root>
              <Field.Label className="text-sm font-medium">Password</Field.Label>
              <div className="relative">
                <SquareLock01Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-11 size-4" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-11 hover:text-gray-12"
                >
                  {showPassword ? <ViewOffSlashIcon className="size-4" /> : <ViewIcon className="size-4" />}
                </button>
              </div>
            </Field.Root>

            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox checked={rememberMe} onCheckedChange={(checked) => setRememberMe(checked === true)} />
                <span className="text-sm">Remember me</span>
              </Label>
              <a href="/forgot-password" className="text-sm text-orange-9 hover:text-orange-10">
                Forgot password?
              </a>
            </div>

            <Button type="submit" size="lg" className="w-full mt-2" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="mt-6">
            <DividerWithText>or continue with</DividerWithText>
            <div className="mt-4 flex gap-3">
              <Button variant="outline" className="flex-1">
                <GoogleLogo className="size-4" />
                Google
              </Button>
              <Button variant="outline" className="flex-1">
                <GithubIcon className="size-4" />
                GitHub
              </Button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-11">
            Don't have an account?{" "}
            <a href={registerUrl} className="text-orange-9 hover:text-orange-10 font-medium">
              Sign up
            </a>
          </p>
        </Card>
      </div>
    );
  },
};
