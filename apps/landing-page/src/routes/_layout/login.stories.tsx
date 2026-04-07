import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@typebot.io/ui/components/Button";
import { Checkbox } from "@typebot.io/ui/components/Checkbox";
import { Field } from "@typebot.io/ui/components/Field";
import { Input } from "@typebot.io/ui/components/Input";
import { Mail01Icon } from "@typebot.io/ui/icons/Mail01Icon";
import { SquareLock01Icon } from "@typebot.io/ui/icons/SquareLock01Icon";
import { ViewIcon } from "@typebot.io/ui/icons/ViewIcon";
import { ViewOffSlashIcon } from "@typebot.io/ui/icons/ViewOffSlashIcon";
import { GithubIcon } from "@typebot.io/ui/icons/GithubIcon";
import { Card } from "@/components/Card";
import { ContentPageWrapper } from "@/components/ContentPageWrapper";
import { TextLink } from "@/components/link";
import { TypebotLogo } from "@/components/TypebotLogo";

// Extract the visual content from the route component for Storybook
const LoginPageContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const signinUrl = "#";
  const registerUrl = "#";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <ContentPageWrapper className="flex items-center justify-center min-h-screen pt-0 pb-0">
      <Card className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <TypebotLogo className="size-12 text-orange-9" />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Sign in to Typebot</h1>
          <p className="text-gray-11 text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email Field */}
          <Field.Root>
            <Field.Label className="font-medium text-sm">
              Email address
            </Field.Label>
            <div className="relative">
              <Mail01Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-9 pointer-events-none" />
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                size="lg"
              />
            </div>
          </Field.Root>

          {/* Password Field */}
          <Field.Root>
            <Field.Label className="font-medium text-sm">
              Password
            </Field.Label>
            <div className="relative">
              <SquareLock01Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-9 pointer-events-none" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                size="lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-9 hover:text-gray-11 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <ViewOffSlashIcon className="size-4" />
                ) : (
                  <ViewIcon className="size-4" />
                )}
              </button>
            </div>
          </Field.Root>

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-sm text-gray-11">Remember me</span>
            </label>
            <TextLink
              href="#"
              size="sm"
              hideExternalIcon
              className="text-orange-9 hover:text-orange-10"
            >
              Forgot password?
            </TextLink>
          </div>

          {/* Sign in button */}
          <Button
            render={(props) => <a href={signinUrl} {...props} />}
            variant="default"
            size="default"
            className="w-full"
          >
            Sign in
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-6" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-gray-11">Or continue with</span>
          </div>
        </div>

        {/* Social login buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href={`${signinUrl}?provider=github`}
            className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md bg-gray-3 hover:bg-gray-4 active:bg-gray-5 transition-colors"
          >
            <GithubIcon className="size-4" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href={`${signinUrl}?provider=google`}
            className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md bg-gray-3 hover:bg-gray-4 active:bg-gray-5 transition-colors"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <title>Google</title>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-sm font-medium">Google</span>
          </a>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-11">
          Don't have an account?{" "}
          <TextLink
            href={registerUrl}
            hideExternalIcon
            className="text-orange-9 hover:text-orange-10 font-medium"
          >
            Sign up
          </TextLink>
        </p>
      </Card>
    </ContentPageWrapper>
  );
};

const meta: Meta<typeof LoginPageContent> = {
  title: "Routes/Login",
  component: LoginPageContent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LoginPageContent>;

export const Default: Story = {};
