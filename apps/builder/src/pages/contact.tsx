import { ContactForm } from "@/features/contact/components/ContactForm";
import { Seo } from "@/components/Seo";
import { toast } from "@/lib/toast";

export default function ContactPage() {
  const handleFormSubmit = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Form submitted:", data);
    toast({
      type: "success",
      title: "Message sent!",
      description: `Thank you ${data.name}, we'll get back to you soon.`,
    });
  };

  return (
    <div className="flex flex-col gap-4 h-dvh justify-center items-center">
      <Seo title="Contact Us" />
      <div className="flex flex-col p-8 rounded-lg gap-6 bg-gray-1">
        <div className="flex flex-col gap-4">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}
