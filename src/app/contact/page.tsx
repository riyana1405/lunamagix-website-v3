import { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Lunamagix Futuretech. Request a demo, ask questions, or explore partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond within 24-48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
