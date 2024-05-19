export function BadReq(message?: string) {
  return new Response(JSON.stringify({ message: message || "Bad Request" }), {
    status: 400,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export function Unauthorized() {
  return new Response(JSON.stringify({ message: "Unauthorized" }), {
    status: 401,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
