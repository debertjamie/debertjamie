import {sendEmail} from "@/lib/sendEmail";
import {emailApiKey} from "@/app/env.mjs";

export async function POST(req: Request) {
  const data = await req.json();
  const formData = new FormData();
  const message = [];
  formData.append("apiKey", emailApiKey!);

  for(const key in data) {
    if(key === "subject") {
      message.push(`SUBJECT: ${data[key]}`);
    } else if(key === "message") {
      message.push(data[key]);
      formData.append(key, message.join("\n\n"));
    } else {
      formData.append(key, data[key]);
    }
  }

  const res = await sendEmail(formData);

  return new Response(JSON.stringify(res), {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}