import type { Metadata } from "next";
import LegalDocument, { LegalSection } from "@/components/legal/LegalDocument";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms governing use of the GEAA Technologies Limited website.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <LegalDocument title="Terms of Use" lastUpdated="6 September 2026">
      <LegalSection heading="About These Terms">
        <p>
          These Terms of Use govern your use of the geaatech.com website, operated by GEAA
          Technologies Limited (&ldquo;GEAA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using this
          website, you agree to these terms. These terms govern use of the website itself &mdash; they
          are not the commercial contract for purchasing GEAA&rsquo;s products or services, which are
          agreed separately through a quotation and order process.
        </p>
      </LegalSection>

      <LegalSection heading="Website Use">
        <p>
          You may use this website to learn about GEAA&rsquo;s services and products, and to submit
          enquiries. You agree not to use the website in any way that could damage, disable, or impair
          it, or interfere with anyone else&rsquo;s use of it.
        </p>
      </LegalSection>

      <LegalSection heading="Website Content">
        <p>
          The content on this website &mdash; including text, descriptions of services and products,
          and page designs &mdash; is provided for general information purposes.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          GEAA&rsquo;s logo, branding, original website copy and original graphics belong to GEAA or
          are used under licence. Third-party manufacturer and vendor names and logos referenced on
          this website &mdash; including but not limited to Microsoft, Google, Zoho, Sophos, Dell, HP,
          Lenovo, Cisco and other manufacturers named in the product catalogue &mdash; are the
          trademarks of their respective owners, referenced for descriptive purposes only.
        </p>
      </LegalSection>

      <LegalSection heading="Product and Service Information">
        <p>
          Product and service information on this website &mdash; including specifications, categories
          and pricing status &mdash; is provided for general information and enquiry purposes. Hardware
          pricing is market-dependent and may change; vendor/software pricing shown as a reference
          price reflects the vendor&rsquo;s published pricing and is not GEAA&rsquo;s final quotation.
          Listing a product or service on this website does not constitute a binding offer to sell, and
          does not guarantee availability, configuration or current pricing. Specific commercial terms
          are agreed separately through a quotation and order process.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Links">
        <p>
          This website may reference or link to third-party websites, including manufacturer or vendor
          pricing pages. GEAA is not responsible for the content or accuracy of third-party websites.
        </p>
      </LegalSection>

      <LegalSection heading="Website Availability">
        <p>
          GEAA does not guarantee that this website will always be available, uninterrupted, or free of
          errors.
        </p>
      </LegalSection>

      <LegalSection heading="No Reliance / Information Accuracy">
        <p>
          While GEAA aims to keep website content accurate and current, information on this website is
          provided &ldquo;as is&rdquo; without warranty of any kind. You should confirm specific
          requirements, specifications and pricing directly with GEAA before relying on them.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          To the extent permitted by applicable law, GEAA is not liable for any indirect or
          consequential loss arising from your use of this website. Nothing in these terms limits any
          liability that cannot be limited or excluded under applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to the Website or Terms">
        <p>
          GEAA may update this website and these Terms of Use from time to time. The date at the top of
          this page shows when these terms were last updated.
        </p>
      </LegalSection>

      <LegalSection heading="Governing Law">
        <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          GEAA Technologies Limited
          <br />
          80 Akin Olowolagbe Street, Surulere, Lagos, Nigeria
          <br />
          Phone: 0807 469 6508
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
