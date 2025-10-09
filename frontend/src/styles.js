// Simple shared style objects so components stay tiny
export const styles = {
  page: {
    fontFamily: "system-ui, Arial, sans-serif",
    background: "#dbe3ee",
    minHeight: "100vh",
    padding: 0,
    margin: 0,
  },
  card: {
    width: "90%",
    maxWidth: "1400px",
    margin: "0 auto",
    background: "#e9f0f8",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    border: "1px solid #c9d4e4",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  topbar: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    background: "#90a8bf", borderRadius: 12, padding: "10px 14px",
    color: "#0b2942", fontWeight: 700,
  },
  pillBtn: {
    background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: 999, padding: "8px 18px", cursor: "pointer",
    fontWeight: 700, color: "#0a58ca",
  },
  section: { background: "#cfdced", borderRadius: 14, padding: 12, marginTop: 16 },
  title: {
    display: "flex", background: "#fff", borderRadius: 12,
    border: "2px solid rgba(255,255,255,0.8)", padding: "10px 14px",
    fontSize: 26, fontWeight: 900, color: "#0f172a",margin:'20px',justifyContent:'center'
  },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  grid1: { display: "grid", gridTemplateColumns: "1fr", gap: 16 },
  panel: {
    background: "#dbe6f4", borderRadius: 10, padding: 10,
    border: "1px solid #eef3f9", minHeight: 120,
    color: "#0a3a7a", fontWeight: 700, fontSize: 20,height:'300px',width:'550px',margin:'17px'
  },
  circle: {
    width: 325, height: 325, borderRadius: "50%", background: "#fff",
    border: "1px solid #cbd5e1", boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
    margin: "0 auto",
  },
  contact: {
    background: "#dbe6f4", borderRadius: 10, padding: 14,
    border: "1px solid #eef3f9", minHeight: 60,
    color: "#334155", fontSize: 14, fontWeight: 600,
  },
  footer: { textAlign: "center", marginTop: 16, color: "#64748b", fontSize: 13 },

  // ==== Classroom layout ====
  classroomShell: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: 12,
    height: "calc(100vh - 16px - 16px)", // account for card padding
    marginTop: 12,
  },
  sidebar: {
    background: "#7fa0b6",
    borderRadius: 8,
    padding: 8,
    color: "#0b2942",
    overflowY: "auto",
    border: "1px solid #a6bfd1",
  },
  sidebarHeader: {
    fontSize: 12,
    textDecoration: "underline",
    marginBottom: 8,
  },
  tocItem: {
    background: "rgba(255,255,255,0.15)",
    height: 26,
    borderRadius: 4,
    marginBottom: 6,
    border: "1px solid rgba(255,255,255,0.25)",
  },
  contentCol: {
    display: "grid",
    gridTemplateRows: "1fr auto",
    gap: 12,
  },
  whiteboard: {
    background: "#e7e1e5",
    borderRadius: 8,
    border: "1px solid #e6edf7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    color: "#0f172a",
  },
  captions: {
    background: "#bcd0e6",
    borderRadius: 8,
    border: "1px solid #d7e2ee",
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 22,
    color: "white",
    letterSpacing: 0.5,
  },
};

