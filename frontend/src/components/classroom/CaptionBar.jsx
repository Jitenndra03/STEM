import React from "react";
import { styles } from "../../styles";

export default function CaptionBar({ text = "Captions" }) {
  return <div style={styles.captions}>{text}</div>;
}
