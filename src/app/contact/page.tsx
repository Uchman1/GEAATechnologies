import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import EnquirySection from "@/components/contact/EnquirySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Tell GEAA Technologies what your business needs \u2014 request a quote, talk to the team, or request IT support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        headlineLines={["Tell us what your", "business needs."]}
        supporting="Whether it's a quote, a question, or technical support, tell us what you're working with and we'll point it to the right person."
        readoutLeft="Contact GEAA"
        readoutRight="Surulere, Lagos, Nigeria"
      />
      <EnquirySection />
    </>
  );
}
