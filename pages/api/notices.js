export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const notices = [
    { id: 1, title: "Water shutoff on Friday", date: "2025-05-10" },
    { id: 2, title: "Annual meeting next week", date: "2025-05-15" }
  ];
  
  return new Response(JSON.stringify(notices), {
    headers: { "Content-Type": "application/json" },
  });
}
