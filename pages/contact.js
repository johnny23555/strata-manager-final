import { useState } from "react";

export default function ContactPage() {
  const [showPhone, setShowPhone] = useState(false);

  const togglePhone = () => {
    setShowPhone(!showPhone);
  };

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>You can reach us via email or phone.</p>

      <p>Email: <a href="mailto:strata@buildingcorp.com">strata@buildingcorp.com</a></p>

      <button onClick={togglePhone}>
        {showPhone ? "Hide Phone" : "Show Phone"}
      </button>

      {showPhone && (
        <p style={styles.phone}>📞 Phone: (02) 1234 5678</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
  },
  phone: {
    marginTop: "10px",
    color: "#2c3e50",
    fontWeight: "bold",
  },
};
