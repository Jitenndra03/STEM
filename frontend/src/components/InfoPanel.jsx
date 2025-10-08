import React from "react";
import { styles } from "../styles";

export default function InfoPanel({ children }) {
  return <div style={styles.panel}>{children}</div>;
}
