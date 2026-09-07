import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://geaatech.com"),
  title: {
    default: "GEAA Technologies Limited | Enterprise Technology That Moves Business Forward",
    template: "%s | GEAA Technologies Limited",
  },
  description:
    "GEAA Technologies helps organisations acquire, deploy, secure, connect and support the technology infrastructure their businesses depend on.",
  openGraph: {
    title: "GEAA Technologies Limited",
    description:
      "Enterprise technology that moves business forward. Infrastructure, cloud, cybersecurity, networking, devices, and managed IT support.",
    url: "https://geaatech.com",
    siteName: "GEAA Technologies Limited",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-light text-ink">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
