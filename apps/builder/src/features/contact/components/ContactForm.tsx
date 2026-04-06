"use client";

import { Button } from "@typebot.io/ui/components/Button";
import { Field } from "@typebot.io/ui/components/Field";
import { Input } from "@typebot.io/ui/components/Input";
import { Textarea } from "@typebot.io/ui/components/Textarea";
import type { FormEvent } from "react";
import { useState } from "react";

type Props = {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
  className?: string;
};

export const ContactForm = ({ onSubmit, className }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      onSubmit?.(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={`flex flex-col gap-4 w-full max-w-md${className ? ` ${className}` : ""}`}
      onSubmit={handleSubmit}
    >
      <Field.Root>
        <Field.Label>Name</Field.Label>
        <Input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onValueChange={(value) => handleInputChange("name", value)}
          required
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onValueChange={(value) => handleInputChange("email", value)}
          required
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Message</Field.Label>
        <Textarea
          placeholder="Your message here..."
          value={formData.message}
          onValueChange={(value) => handleInputChange("message", value)}
          required
        />
      </Field.Root>

      <Button
        type="submit"
        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
        className="self-start"
        style={{
          backgroundColor: "#2563eb",
        }}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};
