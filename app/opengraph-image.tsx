import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Michael Cretu — Composer and solo double bassist, Manchester";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const mark = await readFile(join(process.cwd(), "public/images/logo-mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#7A99D1",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={markSrc} width={72} height={72} alt="" />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#7A99D1",
            }}
          >
            The new album
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.9 }}>Johnny</div>
          <div style={{ marginTop: 16, fontSize: 36, color: "#9BB4D9" }}>
            Michael Cretu Trio
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#9BB4D9" }}>
          Composer · Solo Double Bass · Manchester
        </div>
      </div>
    ),
    size,
  );
}
