import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bookings, press and collaborations with Michael Cretu, composer and solo double bassist in Manchester.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid items-start gap-16 md:grid-cols-2">
        <div>
          <PageIntro eyebrow="Write" title="Contact">
            <p>
              For concerts, collaborations, teaching, and press. A dedicated
              booking address can be added here; until then, please use the form
              or the channels below.
            </p>
          </PageIntro>
          <ul className="mt-10 space-y-3">
            {social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-amber hover:text-amber-bright"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
