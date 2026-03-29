import { Box, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../assets/Arrow.svg";

type FaqItem = {
  label: string;
  path?: string;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const PAGE_MAX_W = 1240;

const faqSections: FaqSection[] = [
  {
    title: "About Suprebase",
    items: [
      { label: "What is Suprebase?", path: "" },
      { label: "What countries is Suprebase available in?", path: "" },
      { label: "About us", path: "" },
    ],
  },
  {
    title: "Getting Started on Suprebase",
    items: [
      { label: "How to sign up on Suprebase", path: "" },
      { label: "What Next After Sign Up?", path: "" },
      { label: "Is KYC important?", path: "" },
    ],
  },
  {
    title: "Deposits & Withdrawals",
    items: [
      { label: "How do i deposit money into my Suprebase wallet?", path: "" },
      { label: "How long do deposits take to reflect?", path: "" },
      { label: "What is the minimum deposit amount?", path: "" },
      { label: "What payment options are available?", path: "" },
      { label: "What are the deposit fees?", path: "" },
      { label: "Can i deposit from a USD account?", path: "" },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      { label: "I am having issues making a deposit", path: "" },
      { label: "Why can’t i withdraw my funds?", path: "" },
      { label: "Identity Verification Issues", path: "" },
      { label: "Sign up & Login issues", path: "" },
      { label: "Deposit issues", path: "" },
      { label: "My withdrawal was rejected, why?", path: "" },
    ],
  },
];

function FaqRow({ item }: { item: FaqItem }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => item.path && navigate(item.path)}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 24,
        background: "transparent",
        border: "none",
        padding: "6px 0",
        cursor: item.path ? "pointer" : "default",
        textAlign: "left",
      }}
    >
      <span
        style={{
          fontFamily: "Poppins, system-ui, sans-serif",
          fontWeight: 350,
          fontSize: 16,
          lineHeight: "24px",
          color: "#000000",
        }}
      >
        {item.label}
      </span>

      <img
        src={arrowIcon}
        alt=""
        aria-hidden="true"
        style={{
          width: 18,
          height: 18,
          objectFit: "contain",
          flexShrink: 0,
          display: "block",
        }}
      />
    </button>
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
    <Box
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#FFFFFF",
      }}
    >
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
          Suprebase
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
          All questions related to suprebase
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