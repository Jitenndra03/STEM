import React from "react";
import { styles } from "../styles";
import TopBar from "../components/TopBar";
import SidebarTOC from "../components/classroom/SidebarTOC";
import Whiteboard from "../components/classroom/Whiteboard";
import CaptionBar from "../components/classroom/CaptionBar";

export default function Classroom() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <TopBar />

        <div style={styles.classroomShell}>
          <SidebarTOC />
          <div style={styles.contentCol}>
            <Whiteboard>Whiteboard used by AI to teach</Whiteboard>
            <CaptionBar text="Captions" />
          </div>
        </div>
      </div>
    </div>
  );
}
