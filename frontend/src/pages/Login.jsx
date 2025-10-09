import React, { useState } from "react";
import { styles } from "../styles";
import TopBar from "../components/TopBar";
import { useAuth } from "../auth";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/classroom";

  function handleSubmit(e) {
    e.preventDefault();
    const ok = login(username.trim(), password);
    if (ok) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid credentials. Try 'student' / '1234'.");
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <TopBar />
        <div style={{ ...styles.section, maxWidth: 520, margin: "24px auto" }}>
          <h2 style={{ margin: 0, marginBottom: 12 }}>Login</h2>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: 10, borderRadius: 8, border: "1px solid #b6c3d4" }}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: 10, borderRadius: 8, border: "1px solid #b6c3d4" }}
            />
            {error && (
              <div style={{ color: "#b91c1c", fontWeight: 600 }}>{error}</div>
            )}
            <button type="submit" style={styles.pillBtn}>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}
