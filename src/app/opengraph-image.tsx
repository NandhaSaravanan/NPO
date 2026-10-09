import { ImageResponse } from "next/og";
import { site } from "@content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: 96, background: "#fffdf8", color: "#251f17",
        }}
      >
        <div style={{ display: "flex", width: 96, height: 96, borderRadius: 48, background: "#f2b01e" }} />
        <div style={{ fontSize: 112, fontWeight: 700, marginTop: 40 }}>{site.name}</div>
        <div style={{ fontSize: 52, marginTop: 16, color: "#5c5345" }}>{site.tagline}</div>
        <div style={{ fontSize: 32, marginTop: 40, color: "#8a5808" }}>Union County and the Charlotte area, NC</div>
      </div>
    ),
    size,
  );
}
