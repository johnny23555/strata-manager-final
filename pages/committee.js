export default function CommitteePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Owners Corporation Committee</h1>
      <p style={styles.desc}>Meet the elected members responsible for managing the building:</p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Jane Smith</h3>
          <p>Chairperson</p>
        </div>
        <div style={styles.card}>
          <h3>David Lee</h3>
          <p>Treasurer</p>
        </div>
        <div style={styles.card}>
          <h3>Emily Johnson</h3>
          <p>Secretary</p>
        </div>
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
  },
  desc: {
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#ecf0f1",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
  },
};
