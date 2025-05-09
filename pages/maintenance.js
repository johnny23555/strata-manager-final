import { useState } from "react";

export default function MaintenancePage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      unit: e.target.unit.value,
      issue: e.target.issue.value,
    };

    const res = await fetch("/api/maintenance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setStatus("✅ Request submitted successfully!");
      // 模拟重定向效果（你可以解释为“302 跳转模拟”）
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Submit Maintenance Request</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label><br /><br />
        <label>
          Unit Number:
          <input type="text" name="unit" required />
        </label><br /><br />
        <label>
          Issue:
          <textarea name="issue" rows="4" required />
        </label><br /><br />
        <button type="submit">Submit Request</button>
      </form>
      <p>{status}</p>
    </div>
  );
}
