"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    if (site.contactEmail) {
      const subject = encodeURIComponent(`Enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <p className="border border-line bg-panel px-6 py-8 text-paper-muted">
        Thank you. If your mail application did not open, please write through
        Facebook or Instagram, and a booking address will be added here shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label className="grid gap-2 text-sm">
        <span className="uppercase tracking-[0.18em] text-paper-muted">Name</span>
        <input
          name="name"
          required
          className="border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-amber"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="uppercase tracking-[0.18em] text-paper-muted">Email</span>
        <input
          name="email"
          type="email"
          required
          className="border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-amber"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="uppercase tracking-[0.18em] text-paper-muted">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-amber"
        />
      </label>
      <button
        type="submit"
        className="justify-self-start border border-amber bg-amber px-6 py-3 text-sm uppercase tracking-[0.18em] text-ink hover:bg-amber-bright"
      >
        Send
      </button>
    </form>
  );
}
