import React from "react";
import { styles } from "../../styles";

export default function Whiteboard({ children }) {
  return <div style={styles.whiteboard}>{children}</div>;
}
