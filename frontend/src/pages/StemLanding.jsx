import React from "react";
import { styles } from "../styles";
import TopBar from "../components/TopBar";
import Section from "../components/Section";
import InfoPanel from "../components/InfoPanel";
import CircleMedia from "../components/CircleMedia";
import ContactBand from "../components/ContactBand";
import FooterNote from "../components/FooterNote";

export default function StemLanding() {
  const gridStyle = styles.grid2;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <TopBar />

        <Section>
          <div style={styles.title}>Smart Teaching Education Module</div>
          <div style={gridStyle}>
            <InfoPanel>
              An AI teacher that is designed to breakthrough in the field of AI
              in education. For the first version it is trained to teach
              Problem Solving by C.
            </InfoPanel>
            <CircleMedia />
          </div>
        </Section>

        <Section>
          <ContactBand phone="+91 8542950010" />
        </Section>

        <FooterNote />
      </div>
    </div>
  );
}
