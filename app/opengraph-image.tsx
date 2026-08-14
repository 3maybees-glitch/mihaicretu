import { ImageResponse } from "next/og";

export const alt = "Michael Cretu — Composer and solo double bassist, Manchester";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0907",
          color: "#f3ead8",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#c9a36a",
          }}
        >
          The new album
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.9 }}>Johnny</div>
          <div style={{ marginTop: 16, fontSize: 36, color: "#e4c48a" }}>
            Michael Cretu Trio
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#c9b89a" }}>
          Composer · Solo Double Bass · Manchester
        </div>
      </div>
    ),
    size,
  );
}
