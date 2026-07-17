"use client";

import {useCallback, useEffect, useRef, useState} from "react";
import type {ChangeEvent, FormEvent, MouseEvent} from "react";
import {DropdownIcon} from "@/ui/icons";

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

const subjectOptions = [
  "General inquiry (I have a question)",
  "Work (contract or employment)",
  "Event invitation",
  "Off topic (hi how are you?)",
];

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
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [subjectDirection, setSubjectDirection] = useState<"above" | "below">("below");
  const subjectRef = useRef<HTMLDivElement>(null);
  const subjectMenuRef = useRef<HTMLDivElement>(null);

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

  const handleSubjectSelect = useCallback((subject: string) => {
    setFormData((current) => ({
      ...current,
      subject,
    }));
    setFormErrors((current) => ({
      ...current,
      subject: undefined,
    }));
    setIsSubjectOpen(false);
  }, []);

  const handleSubjectToggle = useCallback(() => {
    setIsSubjectOpen((current) => !current);
  }, []);

  const handleSubjectMouseDown = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubjectToggle();
  }, [handleSubjectToggle]);

  useEffect(() => {
    function handleOutsideClick(event: globalThis.MouseEvent) {
      if (subjectRef.current && !subjectRef.current.contains(event.target as Node)) {
        setIsSubjectOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSubjectOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isSubjectOpen) {
      return;
    }

    function updateSubjectDirection() {
      const triggerElement = subjectRef.current;
      const menuElement = subjectMenuRef.current;

      if (!triggerElement || !menuElement) {
        return;
      }

      const triggerRect = triggerElement.getBoundingClientRect();
      const menuHeight = menuElement.scrollHeight;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      if (spaceBelow < menuHeight && spaceAbove > spaceBelow) {
        setSubjectDirection("above");
      } else {
        setSubjectDirection("below");
      }
    }

    updateSubjectDirection();

    window.addEventListener("resize", updateSubjectDirection);
    window.addEventListener("scroll", updateSubjectDirection, true);

    return () => {
      window.removeEventListener("resize", updateSubjectDirection);
      window.removeEventListener("scroll", updateSubjectDirection, true);
    };
  }, [isSubjectOpen]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setForm({state: Form.Loading});

    const subjectError = formData.subject ? undefined : "subject is a required field";
    const errors = Object.values(formErrors).some((err) => err) || Boolean(subjectError);

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
        if (subjectError) {
          setFormErrors((current) => ({
            ...current,
            subject: subjectError,
          }));
        }
        setForm({state: Form.Error});
        setTimeout(() => setForm({state: Form.Initial}), 5000);
      }
    } else {
      if (subjectError) {
        setFormErrors((current) => ({
          ...current,
          subject: subjectError,
        }));
      }
      setForm({state: Form.Error});
      setTimeout(() => setForm({state: Form.Initial}), 5000);
    }
  }

  const disabledSubmit =
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim() ||
    Object.values(formErrors).some((err) => err);

  const allFieldsEmpty =
    !formData.name.trim() &&
    !formData.email.trim() &&
    !formData.subject.trim() &&
    !formData.message.trim();
  const allFieldsFilled =
    Boolean(formData.name.trim()) &&
    Boolean(formData.email.trim()) &&
    Boolean(formData.subject.trim()) &&
    Boolean(formData.message.trim());
  const submitLabel =
    form.state === Form.Loading
      ? "Sending..."
      : allFieldsEmpty || allFieldsFilled
        ? "Send"
        : "Fill out the empty fields";

  return (
    <form onSubmit={handleSubmit} className="text-lg mt-4 space-y-2">
      <div className="flex gap-x-4">
        <input
          className="block w-full rounded-lg bg-porcelain-dark dark:bg-steel-grey focus:outline-none p-2"
          type="text"
          placeholder="Name*"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="block w-full rounded-lg bg-porcelain-dark dark:bg-steel-grey focus:outline-none p-2"
          type="email"
          placeholder="Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div ref={subjectRef} className="relative">
        <input type="hidden" name="subject" value={formData.subject} />
        <button
          className="block w-full rounded-lg bg-porcelain-dark dark:bg-steel-grey focus:outline-none px-3 py-2 text-left shadow-sm shadow-transparent transition-all duration-200 hover:bg-porcelain-dark/80 dark:hover:bg-steel-grey/80 focus:ring-2 focus:ring-olivine/40 dark:focus:ring-olivine-dark/40"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isSubjectOpen}
          onMouseDown={handleSubjectMouseDown}
        >
          <span className={formData.subject ? "text-steel-grey dark:text-porcelain" : "text-steel-grey/60 dark:text-porcelain/60"}>
            {formData.subject || "Subject*"}
          </span>
          <DropdownIcon className={`absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-steel-grey dark:text-porcelain duration-200 ${isSubjectOpen ? "rotate-180" : ""}`} />
        </button>
        <div
          ref={subjectMenuRef}
          className={`absolute left-0 right-0 z-20 overflow-hidden rounded-xl border border-steel-grey/10 bg-porcelain shadow-lg shadow-steel-grey/10 transition-all duration-200 dark:border-porcelain/10 dark:bg-steel-grey dark:shadow-black/20 ${subjectDirection === "above" ? "bottom-full mb-2 origin-bottom" : "top-full mt-2 origin-top"} ${isSubjectOpen ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"}`}
        >
          <div className="max-h-72 overflow-auto p-1">
            {subjectOptions.map((option) => {
              const isSelected = formData.subject === option;

              return (
                <button
                  key={option}
                  className={`block w-full rounded-md px-3 py-2 text-left transition-colors duration-150 ${isSelected ? "bg-gray-300 text-steel-grey dark:bg-gray-500 dark:text-porcelain" : "hover:bg-porcelain-dark dark:hover:bg-steel-grey-dark"}`}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSubjectSelect(option)}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <textarea
        className="block w-full resize-none rounded-lg bg-porcelain-dark dark:bg-steel-grey focus:outline-none p-2"
        placeholder="Hi I'd like to reach out to you about..."
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
      />
      <button
        className="bg-olivine dark:bg-olivine-dark px-2 py-1 rounded-lg w-full enabled:hover:bg-olivine-dark enabled:hover:dark:bg-olivine enabled:hover:scale-95 duration-200 delay-75 *:disabled:bg-olivine/80 disabled:dark:bg-olivine-dark/80 disabled:cursor-not-allowed"
        type="submit"
        disabled={disabledSubmit}
      >
        {submitLabel}
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