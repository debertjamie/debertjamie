"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { Session } from "next-auth";
import type { FormEvent } from "react";

enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

interface FormState {
  state: Form;
  message?: string;
}

export function GuestbookForm({ session }: { session: Session | null }) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef<HTMLInputElement | null>(null);

  async function leaveEntry(e: FormEvent) {
    e.preventDefault();
    setForm({ state: Form.Loading });

    if (inputEl?.current === null) {
      setForm({ state: Form.Error });
      return;
    }

    if (inputEl.current.value.trim().length === 0) {
      setForm({
        state: Form.Error,
        message: "An error occured. Please try again later.",
      });
      return;
    }

    const res = await fetch("/api/guestbook", {
      body: JSON.stringify({
        value: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = (await res.json()) as { error: string };
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    setForm({
      state: Form.Success,
      message: "Hey, thanks for leaving a comment 😄",
    });

    router.refresh();
  };

  return (
    <>
      <div className="my-4 rounded-xl space-y-4 bg-cyan-100 dark:bg-zinc-900 p-6">
        {!session && (
          <div className="flex flex-wrap gap-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-indigo-700 text-cyan-50 mb-4 rounded-lg"
              onClick={() => {
                void signIn("discord");
              }}
            >
              Sign In With Discord
            </button>
            <p className="text-base font-semibold select-none">
              Note: Your email and possibly other confidentials will remain
              private 🔒
            </p>
          </div>
        )}
        {session?.user && (
          <form className="space-y-2" onSubmit={(e) => leaveEntry(e)}>
            <p className="text-lg select-none">
              Hi <span className="font-semibold">{session.user.name}</span>, be
              sure to leave a comment 😄
            </p>
            <input
              ref={inputEl}
              aria-label="Your message"
              placeholder="Hello World!"
              required
              maxLength={100}
              type="text"
              disabled={form.state === Form.Loading}
              className="mt-1 py-2 pl-2 block w-full rounded-lg focus:outline-none text-lg bg-cyan-50 dark:bg-zinc-950"
            />
            <div className="flex justify-end gap-x-6 font-semibold *:flex *:items-center *:justify-center *:rounded-md">
              <button className="" type="button" onClick={() => signOut()}>
                LOGOUT
              </button>
              <button
                className="bg-blue-800 text-cyan-50 px-2 py-1"
                type="submit"
              >
                {form.state === Form.Loading ? "Hold on..." : "Submit"}
              </button>
            </div>
          </form>
        )}
        <div className="*:flex *:items-center *:text-base *:font-semibold">
          {form.state === Form.Error && (
            <p className="text-red-800 dark:text-red-500">{form.message!}</p>
          )}
          {form.state === Form.Success && (
            <>
              <p className="text-green-700 dark:text-green-400">
                {form.message!}
              </p>
              <p>You can delete it if you want to</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
