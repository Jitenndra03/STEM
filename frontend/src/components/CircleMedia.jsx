import React from "react";
import { styles } from "../styles";

export default function CircleMedia({ imageUrl }) {
  const circle = imageUrl
    ? { ...styles.circle, backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
    : styles.circle;

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={circle} />
    </div>
  );
}
