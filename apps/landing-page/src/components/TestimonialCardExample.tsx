"use client";

import { TestimonialCard } from "./TestimonialCard";

export const TestimonialCardExample = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="space-y-12">
        {/* Section: Default Variant */}
        <div>
          <h2 className="text-2xl font-bold text-gray-12 mb-6">
            Default Variant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Typebot has transformed how we interact with customers. The drag-and-drop interface is intuitive, and the integrations are seamless. Highly recommended!"
              authorName="Sarah Johnson"
              authorRole="Product Manager"
              authorCompany="TechCorp Inc"
              logoPlaceholder={{ initials: "TC" }}
            />
            <TestimonialCard
              quote="I was able to build a fully functional chatbot in under an hour. The template library saved us so much time and development effort."
              authorName="Marcus Chen"
              authorRole="Founder & CEO"
              authorCompany="StartupXYZ"
              logoPlaceholder={{
                initials: "SX",
                backgroundColor: "bg-gradient-to-br from-blue-5 to-blue-6",
              }}
            />
          </div>
        </div>

        {/* Section: Elevated Variant */}
        <div>
          <h2 className="text-2xl font-bold text-gray-12 mb-6">
            Elevated Variant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              variant="elevated"
              quote="The best chatbot builder I've used. The feature set is incredible, and the support team is always there to help with any issues."
              authorName="Emily Rodriguez"
              authorRole="Marketing Director"
              authorCompany="Creative Studios"
              logoPlaceholder={{
                initials: "CS",
                backgroundColor: "bg-gradient-to-br from-purple-5 to-purple-6",
              }}
            />
            <TestimonialCard
              variant="elevated"
              quote="We integrated Typebot into our website and saw a 40% improvement in lead generation. It's a game-changer for customer engagement."
              authorName="David Thompson"
              authorRole="Head of Growth"
              authorCompany="Enterprise Solutions"
              logoPlaceholder={{
                initials: "ES",
                backgroundColor: "bg-gradient-to-br from-green-5 to-green-6",
              }}
            />
          </div>
        </div>

        {/* Section: Minimal Variant */}
        <div>
          <h2 className="text-2xl font-bold text-gray-12 mb-6">
            Minimal Variant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              variant="minimal"
              quote="Simple, powerful, and effective. Everything we needed to create professional chatbots without complexity."
              authorName="Jessica Lee"
              authorRole="Operations Manager"
              authorCompany="ServicePro"
              logoPlaceholder={{
                initials: "SP",
                backgroundColor: "bg-gradient-to-br from-red-5 to-red-6",
              }}
            />
            <TestimonialCard
              variant="minimal"
              quote="The best investment we made for our customer support infrastructure. Reduced response times significantly."
              authorName="Michael Park"
              authorRole="CTO"
              authorCompany="CloudTech"
              logoPlaceholder={{
                initials: "CT",
                backgroundColor: "bg-gradient-to-br from-yellow-400 to-yellow-500",
              }}
            />
          </div>
        </div>

        {/* Section: Featured Variant */}
        <div>
          <h2 className="text-2xl font-bold text-gray-12 mb-6">
            Featured Variant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              variant="featured"
              quote="This is the sickest open-source project I've ever seen. The feature richness and polish is incredible – feels like a mature product."
              authorName="Alex Thompson"
              authorRole="Full Stack Developer"
              authorCompany="Open Source Community"
              logoPlaceholder={{
                initials: "OS",
                backgroundColor: "bg-gradient-to-br from-orange-6 to-orange-7",
              }}
            />
            <TestimonialCard
              variant="featured"
              quote="Excellent product with fantastic support. The team implements suggestions quickly and truly listens to user feedback."
              authorName="Rachel Martinez"
              authorRole="Customer Success Lead"
              authorCompany="GrowthMetrics"
              logoPlaceholder={{
                initials: "GM",
                backgroundColor: "bg-gradient-to-br from-orange-5 to-orange-6",
              }}
            />
          </div>
        </div>

        {/* Section: With Custom Logo */}
        <div>
          <h2 className="text-2xl font-bold text-gray-12 mb-6">
            With Company Logo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Seamless integration with our existing tools. The API documentation is comprehensive and the support team is responsive."
              authorName="Robert Chang"
              authorRole="Lead Engineer"
              authorCompany="DataFlow Systems"
              logoSrc="https://via.placeholder.com/40?text=DF"
            />
            <TestimonialCard
              variant="elevated"
              quote="We've been using Typebot for over a year now. It's reliable, scalable, and keeps improving with each update."
              authorName="Amanda Foster"
              authorRole="Product Director"
              authorCompany="NeoSoft"
              logoSrc="https://via.placeholder.com/40?text=NS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
