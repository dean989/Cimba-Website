"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  message: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  message: "",
};

export default function DemoRequestForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(data.error || "Unable to submit right now.");
        return;
      }

      setSuccess(true);
      setForm(initialFormState);
    } catch {
      setError("Unable to submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-grey-700 mb-2"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-white/50 bg-white/55 backdrop-blur-md text-grey-900 placeholder-grey-500 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.58)] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-colors"
            placeholder="Jane"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-grey-700 mb-2"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-white/50 bg-white/55 backdrop-blur-md text-grey-900 placeholder-grey-500 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.58)] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-grey-700 mb-2"
        >
          Work email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-white/50 bg-white/55 backdrop-blur-md text-grey-900 placeholder-grey-500 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.58)] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-colors"
          placeholder="jane@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-grey-700 mb-2"
        >
          Your role
        </label>
        <select
          id="role"
          name="role"
          value={form.role}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg border border-white/50 bg-white/55 backdrop-blur-md text-grey-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-colors shadow-[inset_0_1.5px_0_rgba(255,255,255,0.58)]"
        >
          <option value="">Select your role</option>
          <option value="finance">Finance / FP&A</option>
          <option value="accounting">Accounting</option>
          <option value="data">Data / Analytics / BI</option>
          <option value="ai">AI Strategy</option>
          <option value="cs">Customer Success</option>
          <option value="ops">Business Operations</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-grey-700 mb-2"
        >
          What are you looking to solve?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg border border-white/50 bg-white/55 backdrop-blur-md text-grey-900 placeholder-grey-500 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.58)] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 transition-colors resize-none"
          placeholder="Tell us about your use case..."
        />
      </div>

      {error && <p className="text-[14px] text-red-600">{error}</p>}
      {success && (
        <p className="text-[14px] text-green-700">
          Thanks! Your demo request was sent. We&apos;ll reach out shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 px-10 py-0 text-base font-semibold btn-primary rounded-full transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Request Demo"}
        {!submitting && <ArrowRight size={18} />}
      </button>
    </form>
  );
}
