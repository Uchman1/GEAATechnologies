import type { Metadata } from "next";
import LegalDocument, { LegalSection } from "@/components/legal/LegalDocument";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How GEAA Technologies Limited's website handles information submitted through its enquiry forms.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument title="Privacy Policy" lastUpdated="6 September 2026">
      <LegalSection heading="Introduction">
        <p>
          GEAA Technologies Limited (&ldquo;GEAA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates
          this website at geaatech.com. This Privacy Policy explains what information the website may
          collect through its enquiry forms, and how that information is used. It applies to this
          website only, not to any other communication you may have with GEAA outside of it.
        </p>
      </LegalSection>

      <LegalSection heading="Information You May Provide">
        <p>
          The website&rsquo;s enquiry, contact and support forms may invite you to provide information
          such as your name, company, email address, phone number, the service or product you&rsquo;re
          enquiring about, and any project requirements or other details you choose to include in your
          message. You only provide what you choose to enter into a form.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Information">
        <p>
          Information you provide through an enquiry may be used to respond to your enquiry, provide a
          quotation, discuss your technology requirements, provide support you&rsquo;ve requested, or
          follow up on your enquiry where appropriate. We do not use information submitted through this
          website for advertising, and we do not sell it to third parties.
        </p>
      </LegalSection>

      <LegalSection heading="How Information Is Submitted">
        <p>
          The forms on this website work by preparing an email using your own email client, pre-filled
          with the details you&rsquo;ve entered. The website itself does not transmit your form
          submission to a GEAA server or database &mdash; the information only exists once your email
          client sends the message, in the same way as if you&rsquo;d written GEAA an email directly.
          This means the handling of that message depends on the email service you use to send it, and
          on GEAA&rsquo;s own email systems once received, not on this website.
        </p>
      </LegalSection>

      <LegalSection heading="Communications">
        <p>
          If you contact GEAA through the website, we may reply to the email address you provide in
          order to respond to your enquiry, discuss your requirement, or provide the support or
          information you&rsquo;ve requested.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Services">
        <p>
          This website does not currently use any third-party analytics, advertising or tracking
          service. If that changes, this policy will be updated to reflect it.
        </p>
      </LegalSection>

      <LegalSection heading="Data Protection and Privacy Rights">
        <p>
          GEAA recognises its obligations under applicable Nigerian data protection law, including the
          Nigeria Data Protection Act 2023, where applicable. If you have questions about how your
          information is handled, or would like to discuss information you&rsquo;ve provided to GEAA,
          you can contact us using the details below.
        </p>
      </LegalSection>

      <LegalSection heading="Data Retention">
        <p>
          Information received through ordinary business communications, including enquiries submitted
          through this website, may be retained for as long as reasonably necessary for the relevant
          business, legal, accounting or operational purpose, subject to applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to This Privacy Policy">
        <p>
          GEAA may update this Privacy Policy from time to time to reflect changes to the website or
          how it operates. The date at the top of this page shows when it was last updated.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
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
