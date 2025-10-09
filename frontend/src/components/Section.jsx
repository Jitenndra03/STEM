import React from "react";
import { styles } from "../styles";

export default function Section({ children }) {
  return <section style={styles.section}>{children}</section>;
}
