import React from "react";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

export default function TopBar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div style={styles.topbar}>
      <div>STEM</div>
      <div style={{ display: "flex", gap: 10 }}>
        {user ? (
          <>
            <button style={styles.pillBtn} onClick={() => navigate("/")}>Home</button>
            <button style={styles.pillBtn} onClick={logout}>Logout</button>
            <button style={styles.pillBtn} onClick={() => navigate("/classroom")}>Classroom</button>
          </>
        ) : (
          <>
            <button style={styles.pillBtn} onClick={() => navigate("/login")}>Login</button>
            <button style={styles.pillBtn} onClick={() => navigate("/")}>Home</button>
          </>
        )}
      </div>
    </div>
  );
}

