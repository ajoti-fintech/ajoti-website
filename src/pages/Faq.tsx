import { useState } from "react";
import { Box, Stack, Text } from "@mantine/core";

type FaqItem = {
  label: string;
  answer: string;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const PAGE_MAX_W = 1240;

const faqSections: FaqSection[] = [
  {
    title: "About Ajoti",
    items: [
      {
        label: "What is Ajoti?",
        answer:
          "Ajoti is a community finance platform that helps groups of people save together, manage contributions, and organize payouts through rotating savings circles (also known as ROSCA). Our goal is to make community-based financial tools simple, transparent, and accessible to everyone.",
      },
      {
        label: "What countries is Ajoti available in?",
        answer:
          "Ajoti is currently available in Nigeria. We are actively working to expand our services to other African countries in the near future. Stay tuned for updates on new markets.",
      },
      {
        label: "About us",
        answer:
          "Ajoti was built with a mission to empower communities through structured savings and financial accountability. We believe that when people save together, they achieve more. Our platform combines modern technology with the trusted tradition of cooperative savings.",
      },
    ],
  },
  {
    title: "Getting Started on Ajoti",
    items: [
      {
        label: "How to sign up on Ajoti",
        answer:
          "Getting started is easy. Visit our website or download the Ajoti app, click 'Get Started', and follow the prompts to create your account. You'll need a valid email address and phone number to register.",
      },
      {
        label: "What Next After Sign Up?",
        answer:
          "After signing up, you can complete your profile, verify your identity (KYC), and either create a new savings circle or join an existing one. You can also explore the dashboard to understand your wallet, contribution history, and available features.",
      },
      {
        label: "Is KYC important?",
        answer:
          "Yes. KYC (Know Your Customer) verification is required to access full platform features including deposits, withdrawals, and circle participation. It helps us keep the platform safe and compliant with financial regulations. The process is quick and straightforward.",
      },
    ],
  },
  {
    title: "Deposits & Withdrawals",
    items: [
      {
        label: "How do I deposit money into my Ajoti wallet?",
        answer:
          "You can fund your Ajoti wallet via bank transfer or card payment. Simply go to your wallet, select 'Add Funds', choose your preferred payment method, and follow the instructions to complete the deposit.",
      },
      {
        label: "How long do deposits take to reflect?",
        answer:
          "Card payments typically reflect instantly. Bank transfers may take a few minutes to a few hours depending on your bank. If your deposit has not reflected after 24 hours, please contact our support team.",
      },
      {
        label: "What is the minimum deposit amount?",
        answer:
          "The minimum deposit amount is ₦500. This may vary depending on the savings circle you belong to. Please check the specific circle's contribution requirements for accurate amounts.",
      },
      {
        label: "What payment options are available?",
        answer:
          "Ajoti currently supports debit/credit card payments and direct bank transfers. We are working to add more payment options including USSD in the near future.",
      },
      {
        label: "What are the deposit fees?",
        answer:
          "Ajoti does not charge fees for standard deposits. However, your bank or card provider may apply their own transaction charges. We recommend checking with your bank for specific fee information.",
      },
      {
        label: "Can I deposit from a USD account?",
        answer:
          "Currently, Ajoti only supports deposits in Nigerian Naira (NGN). Deposits from foreign currency accounts are not supported at this time. We plan to introduce multi-currency support in future updates.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      {
        label: "I am having issues making a deposit",
        answer:
          "If you're experiencing deposit issues, please ensure your card or bank details are correct and that you have sufficient funds. Try a different payment method if the issue persists. For unresolved issues, contact our support team at admin@ajoti.com.",
      },
      {
        label: "Why can't I withdraw my funds?",
        answer:
          "Withdrawals may be restricted if your KYC verification is incomplete, if there is a pending transaction on your account, or if your savings circle has an active lock period. Please check your account status or reach out to support for assistance.",
      },
      {
        label: "Identity Verification Issues",
        answer:
          "If your identity verification is failing, ensure the document you submitted is valid, not expired, and that the photo is clear and readable. If the issue continues, contact our support team and we'll help resolve it manually.",
      },
      {
        label: "Sign up & Login issues",
        answer:
          "If you're unable to sign up or log in, check that you're using the correct email address and password. Use the 'Forgot Password' option to reset your password if needed. For sign-up issues, ensure your email hasn't already been registered.",
      },
      {
        label: "Deposit issues",
        answer:
          "Common deposit issues include incorrect account details, network errors, or card restrictions. Please double-check your payment details, ensure your internet connection is stable, and try again. If the problem persists, contact us at admin@ajoti.com.",
      },
      {
        label: "My withdrawal was rejected, why?",
        answer:
          "Withdrawals can be rejected due to incomplete KYC, insufficient wallet balance, bank account verification failure, or a flagged transaction. Review your account details and ensure everything is up to date. Contact support if the rejection reason is unclear.",
      },
    ],
  },
];

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid #F3F3F3", paddingBottom: 16 }}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          background: "transparent",
          border: "none",
          padding: "6px 0",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: "#000000",
          }}
        >
          {item.label}
        </span>

        <span
          style={{
            fontSize: 20,
            color: "#066F5B",
            flexShrink: 0,
            lineHeight: 1,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>

      {open && (
        <p
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 14,
            lineHeight: "22px",
            color: "#555555",
            marginTop: 8,
            paddingRight: 32,
          }}
        >
          {item.answer}
        </p>
      )}
    </div>
  );
}

function FaqSectionCard({ section }: { section: FaqSection }) {
  return (
    <Box
      style={{
        width: "100%",
        background: "#FFFFFF",
        border: "1px solid #F3F3F3",
        boxShadow: "4px 4px 12px rgba(209, 217, 230, 0.25)",
        borderRadius: 6,
        padding: "36px 40px",
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins, system-ui, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "30px",
          color: "#000000",
        }}
      >
        {section.title}
      </Text>

      <Box
        style={{
          width: "100%",
          height: 1,
          background: "#D9D9D9",
          marginTop: 28,
          marginBottom: 26,
        }}
      />

      <Stack gap={18}>
        {section.items.map((item) => (
          <FaqRow key={item.label} item={item} />
        ))}
      </Stack>
    </Box>
  );
}

export default function Faq() {
  return (
    <Box style={{ width: "100%", minHeight: "100vh", background: "#FFFFFF" }}>
      <Box
        style={{
          maxWidth: PAGE_MAX_W,
          width: "100%",
          margin: "0 auto",
          paddingTop: 140,
          paddingBottom: 90,
          paddingLeft: 38,
          paddingRight: 38,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 24,
            lineHeight: "36px",
            color: "#000000",
          }}
        >
          Ajoti
        </Text>

        <Text
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: 18,
            lineHeight: "27px",
            color: "#000000",
            marginTop: 14,
          }}
        >
          All questions related to Ajoti
        </Text>

        <Box style={{ marginTop: 47 }}>
          {faqSections.map((section, index) => (
            <Box
              key={section.title}
              style={{ marginBottom: index === faqSections.length - 1 ? 0 : 48 }}
            >
              <FaqSectionCard section={section} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
