import { useEffect, useState } from "react";

export default function NoticesPage() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("/api/notices")
      .then((res) => res.json())
      .then((data) => setNotices(data));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Community Notices</h1>
      {notices.length === 0 ? (
        <p>Loading notices...</p>
      ) : (
        <ul>
          {notices.map((notice) => (
            <li key={notice.id} style={styles.notice}>
              <strong>{notice.title}</strong> <br />
              <span>Date: {notice.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#2c3e50",
  },
  notice: {
    marginBottom: "15px",
    backgroundColor: "#ecf0f1",
    padding: "10px",
    borderRadius: "8px",
  },
};
