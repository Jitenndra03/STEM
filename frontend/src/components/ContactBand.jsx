import React from "react";
import { styles } from "../styles";

export default function ContactBand({ phone }) {
  return (
    <div style={styles.contact}>
      Contact us:-<br />
      <strong>{phone}</strong>
    </div>
  );
}
