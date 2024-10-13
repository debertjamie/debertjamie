"use client";

import {useState} from "react";
import type {ChangeEvent, FormEvent} from "react";

enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

interface FormState {
  state: Form;
}

interface FormDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormDataProps = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function EmailForm() {
  const [formData, setFormData] = useState<FormDataProps>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormDataProps>>({});
  const [form, setForm] = useState<FormState>({state: Form.Initial});

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? undefined : `${name} is a required field`,
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setForm({state: Form.Loading});

    const errors = Object.values(formErrors).some((err) => err);

    if (!errors) {
      const res = await fetch("/api/email", {
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (res.status === 200) {
        setFormData(initialFormData);
        setFormErrors({});
        setForm({state: Form.Success});
        setTimeout(() => setForm({state: Form.Initial}), 5000);
      } else {
        setForm({state: Form.Error});
        setTimeout(() => setForm({state: Form.Initial}), 5000);
      }
    } else {
      setForm({state: Form.Error});
      setTimeout(() => setForm({state: Form.Initial}), 5000);
    }
  }

  const disabledSubmit = Object.values(formErrors).some((err) => err);

  return (
    <form onSubmit={handleSubmit} className="text-lg mt-4 space-y-2">
      <div className="flex gap-x-4">
        <input
          className="block w-full rounded-lg bg-zinc-200 dark:bg-zinc-900 focus:outline-none p-2"
          type="text"
          placeholder="Your Name*"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="block w-full rounded-lg bg-zinc-200 dark:bg-zinc-900 focus:outline-none p-2"
          type="email"
          placeholder="Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <input
        className="block w-full rounded-lg bg-zinc-200 dark:bg-zinc-900 focus:outline-none p-2"
        type="text"
        placeholder="Subject (optional, max 100 characters)"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        maxLength={100}
      />
      <textarea
        className="block w-full resize-none rounded-lg bg-zinc-200 dark:bg-zinc-900 focus:outline-none p-2"
        placeholder="Hi there, I'd like to connect with you..."
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
      />
      <button
        className="bg-zinc-500 text-zinc-50 dark:bg-zinc-400 dark:text-zinc-950 px-2 py-1 rounded-lg w-full hover:bg-zinc-900 hover:dark:bg-zinc-200 hover:scale-105 duration-200 delay-75"
        type="submit"
        disabled={disabledSubmit}
      >
        {form.state === Form.Loading ? "Sending..." : "Send Email"}
      </button>
      {form.state === Form.Error && (
        <p className="text-red-800 dark:text-red-500">An error occurred. Make sure all required fields are filled.</p>
      )}
      {form.state === Form.Success && (
        <p className="text-green-800 dark:text-green-500">Thank you for reaching out! I'll respond to you ASAP</p>
      )}
    </form>
  )
}