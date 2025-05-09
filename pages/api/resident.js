export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const unit = url.searchParams.get("unit");

  const residents = {
    "101": "Alice Zhang",
    "102": "Bob Lee",
    "201": "Charlie Wang",
  };

  const name = residents[unit] || "Unknown unit";
  return new Response(`Resident of unit ${unit}: ${name}`);
}
