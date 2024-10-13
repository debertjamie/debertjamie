const EMAIL_URL = "https://api.web3forms.com/submit";

export async function sendEmail(formData: FormData) {
  const res = await fetch(EMAIL_URL, {
    body: formData,
    method: "POST",
  });

  if(res.status >= 400) {
    return {status: res.status, message: res.statusText}
  }

  const data = await res.json();
  return {status: res.status, data};
}