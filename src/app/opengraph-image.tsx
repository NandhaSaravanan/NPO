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
          justifyContent: "center", padding: 96, background: "#e4e6da", color: "#173d30",
        }}
      >
        <div style={{ fontSize: 120, fontWeight: 800, letterSpacing: "-0.02em" }}>{site.name}</div>
        <div style={{ fontSize: 52, marginTop: 24, color: "#495249" }}>{site.tagline}</div>
        <div style={{ fontSize: 32, marginTop: 40, color: "#275ab9" }}>Union County and Charlotte, NC</div>
      </div>
    ),
    size,
  );
}
