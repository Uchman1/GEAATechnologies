import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";

export default function EnquirySection() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
          <div className="lg:col-span-4">
            <ContactDetails />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
