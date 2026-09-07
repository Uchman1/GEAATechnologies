"use client";

import { useState, type FormEvent } from "react";
import { services, enquiryTypes, budgetOptions, timelineOptions, contactMethods } from "@/lib/site-data";

const serviceOptions = [...services.map((s) => s.title), "Other"];

function buildMailto(fields: Record<string, string>) {
  const enquiryLabel = enquiryTypes.find((t) => t.value === fields.enquiryType)?.label ?? "Enquiry";
  const subject = `${enquiryLabel} \u2014 ${fields.service || "General enquiry"} \u2014 ${fields.company}`;

  const bodyLines = [
    `Enquiry type: ${enquiryLabel}`,
    `Name: ${fields.name}`,
    `Company: ${fields.company}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Service / technology area: ${fields.service}`,
    fields.budget ? `Budget range: ${fields.budget}` : null,
    fields.timeline ? `Timeline: ${fields.timeline}` : null,
    `Preferred contact method: ${fields.contactMethod}`,
    "",
    "Requirement / project description:",
    fields.message,
  ].filter((line): line is string => line !== null);

  const body = bodyLines.join("\n");
  return `mailto:hello@geaatech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [enquiryType, setEnquiryType] = useState<string>("quote");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const contactMethodLabel = contactMethods.find((m) => m.value === contactMethod)?.label ?? contactMethod;
    window.location.href = buildMailto({
      enquiryType,
      name,
      company,
      email,
      phone,
      service,
      budget,
      timeline,
      contactMethod: contactMethodLabel,
      message,
    });
  }

  const inputClasses =
    "w-full border border-ink/15 bg-white px-4 py-3 text-base text-ink focus-ring focus:border-geaa-blue";
  const labelClasses = "text-sm font-medium text-ink";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <fieldset>
        <legend className={labelClasses}>What can we help with?</legend>
        <div role="radiogroup" aria-label="Type of enquiry" className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {enquiryTypes.map((opt) => (
            <label
              key={opt.value}
              className={`cursor-pointer border px-4 py-3 text-center text-sm transition-colors ${
                enquiryType === opt.value
                  ? "border-geaa-blue bg-geaa-blue/5 font-semibold text-geaa-blue"
                  : "border-ink/15 text-muted hover:border-ink/30"
              }`}
            >
              <input
                type="radio"
                name="enquiryType"
                value={opt.value}
                checked={enquiryType === opt.value}
                onChange={() => setEnquiryType(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {enquiryType === "support" && (
          <p className="mt-3 text-sm text-muted">
            Once GEAA Support launches, existing customers will be able to
            submit requests directly there. For now, this reaches our team
            the same way.
          </p>
        )}
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>Name</label>
          <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={`mt-2 ${inputClasses}`} />
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>Company</label>
          <input id="company" required value={company} onChange={(e) => setCompany(e.target.value)} className={`mt-2 ${inputClasses}`} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={`mt-2 ${inputClasses}`} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone</label>
          <input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className={`mt-2 ${inputClasses}`} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>Service / technology area</label>
        <select id="service" required value={service} onChange={(e) => setService(e.target.value)} className={`mt-2 ${inputClasses}`}>
          <option value="" disabled>Select an area</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClasses}>Budget range <span className="font-normal text-muted">(optional)</span></label>
          <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={`mt-2 ${inputClasses}`}>
            <option value="">Prefer not to say</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClasses}>Timeline <span className="font-normal text-muted">(optional)</span></label>
          <select id="timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)} className={`mt-2 ${inputClasses}`}>
            <option value="">Not sure yet</option>
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={labelClasses}>Preferred contact method</legend>
        <div role="radiogroup" aria-label="Preferred contact method" className="mt-3 flex gap-3">
          {contactMethods.map((opt) => (
            <label
              key={opt.value}
              className={`cursor-pointer border px-4 py-2 text-sm transition-colors ${
                contactMethod === opt.value
                  ? "border-geaa-blue bg-geaa-blue/5 font-semibold text-geaa-blue"
                  : "border-ink/15 text-muted hover:border-ink/30"
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={opt.value}
                checked={contactMethod === opt.value}
                onChange={() => setContactMethod(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className={labelClasses}>Requirement / project description</label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <button
          type="submit"
          className="focus-ring rounded-full bg-geaa-blue px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
        >
          Send Request
        </button>
        <p className="mt-3 text-xs text-muted">
          This opens your email client with your details filled in &mdash;
          nothing is sent automatically.
        </p>
      </div>
    </form>
  );
}
