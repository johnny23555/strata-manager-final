export default function DownloadsPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Downloadable Resources</h1>

      <div style={styles.file}>
        <h3>🧾 By-Laws Document (PDF)</h3>
        <a href="/file.svg" download>
          <button>Download PDF</button>
        </a>
      </div>

      <div style={styles.file}>
        <h3>📷 Building Photo</h3>
        <a href="/building.jpg" download>
          <button>Download Image</button>
        </a>
      </div>
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
    marginBottom: "20px",
  },
  file: {
    marginBottom: "30px",
    backgroundColor: "#f5f5f5",
    padding: "15px",
    borderRadius: "8px",
  },
};
