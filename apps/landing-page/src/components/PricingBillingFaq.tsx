import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { type ReactNode, useState } from "react";

const data = [
  {
    title: "What is considered a monthly chat?",
    content: (
      <>
        A chat is counted whenever a user starts a discussion. It is independent
        of the number of messages they send and receive. For example, if a user
        starts a discussion and sends 10 messages to the bot, it will count as 1
        chat. If the user chats again later and their session is remembered, it
        will not be counted as a new chat. <br />
        <br />
        An easy way to think about it: 1 chat equals one row in your Results
        table.
      </>
    ),
  },
  {
    title: "What happens once I reach the included chats limit?",
    content: (
      <>
        That's amazing! Your bots are working at full speed. 🚀
        <br />
        <br />
        You will first receive a heads-up email when you reach 80% of your
        included limit. Once you have reached 100%, you will receive another
        email notification.
        <br />
        <br />
        After that, your chat limit will be automatically upgraded to the next
        tier.
      </>
    ),
  },
  {
    title: "Can I cancel or change my subscription at any time?",
    content: (
      <>
        Yes, you can cancel, upgrade, or downgrade your subscription at any
        time. There is no minimum time commitment or lock-in period.
        <br />
        <br />
        When you upgrade or downgrade your subscription, you'll get access to
        the new options right away. Your next invoice will have a prorated
        amount based on your usage.
      </>
    ),
  },
  {
    title: "Do you offer annual payment plans?",
    content: (
      <>
        Currently, we offer monthly subscription plans only. Since our pricing
        is based on chat usage, we focus on flexible monthly billing to match
        your actual usage patterns.
        <br />
        <br />
        Contact our sales team if you have specific annual billing requirements
        for your business.
      </>
    ),
  },
  {
    title: "How does billing work if my usage varies month to month?",
    content: (
      <>
        Our billing system is designed to accommodate variable usage. You pay
        only for what you use based on your actual chat volume each month.
        <br />
        <br />
        If you exceed your plan's included chats, you'll be automatically
        upgraded and charged accordingly. When you upgrade mid-month, your
        invoice will reflect a prorated charge for the remainder of the billing
        period.
      </>
    ),
  },
];

export const PricingBillingFaq = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl w-full">
      <h2>FAQ</h2>
      <div className="flex flex-col gap-2">
        {data.map(({ title, content }) => (
          <Question key={title} title={title}>
            {content}
          </Question>
        ))}
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="p-4 rounded-xl bg-white border border-border cursor-pointer"
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="font-display font-medium text-2xl flex justify-between list-none md:gap-12">
        {title}
        <span
          className={cn(
            buttonVariants({ variant: "secondary", size: "icon" }),
            "shrink-0 [&_svg]:size-6",
          )}
        >
          {isOpen ? <ArrowUp01Icon className="size-8" /> : <ArrowDown01Icon />}
        </span>
      </summary>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
      >
        <hr className="my-4" />
        {children}
      </motion.div>
    </details>
  );
};
