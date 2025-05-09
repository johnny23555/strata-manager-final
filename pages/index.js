export default function Home() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Default Site";

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Welcome to {siteName}</h1>

      <img
        src="/building.jpg"
        alt="Apartment Building"
        width={300}
        style={{ borderRadius: '16px' }}
      />

      <p>This website is designed for the Owners Corporation to manage:</p>
      <ul>
        <li>📢 Community Announcements</li>
        <li>🛠 Maintenance Requests</li>
        <li>🗂 File Downloads</li>
      </ul>
    </div>
  );
}
