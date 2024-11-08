import {sendEmail} from "@/lib/sendEmail";
import {emailApiKey} from "@/app/env.mjs";

export async function POST(req: Request) {
  const data = await req.json();
  const formData = new FormData();
  formData.append("access_key", emailApiKey!);

  for(const key in data) {
    if(key === "subject") {
      formData.append(key, `[EMAIL FORM SUBMISSION] ${data[key]}`);
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