import { EmailForm } from ".";

export function Connect() {
  return (
    <section className="text-xl">
      <h2 className="font-semibold">Send a Message</h2>
      <div>
          <EmailForm/>
      </div>
    </section>
  )
}