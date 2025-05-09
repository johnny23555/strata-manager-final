export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method === 'POST') {
    const body = await req.json();
    console.log("Received maintenance request:", body);

    return new Response("Request received", { status: 200 });
  }

  return new Response("Only POST allowed", { status: 405 });
}
