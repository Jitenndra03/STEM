import React from "react";
import { styles } from "../../styles";

export default function SidebarTOC() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarHeader}>Table of contents</div>
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} style={styles.tocItem} />
      ))}
    </aside>
  );
}
