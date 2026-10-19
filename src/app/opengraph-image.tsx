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
          justifyContent: "center", padding: 96, background: "#e6eae5", color: "#173f35",
        }}
      >
        <div style={{ display: "flex", width: 96, height: 96, borderRadius: 8, background: "#8f315b" }} />
        <div style={{ fontSize: 112, fontWeight: 700, marginTop: 40 }}>{site.name}</div>
        <div style={{ fontSize: 52, marginTop: 16, color: "#46544d" }}>{site.tagline}</div>
        <div style={{ fontSize: 32, marginTop: 40, color: "#2b6682" }}>Union County and Charlotte, NC</div>
      </div>
    ),
    size,
  );
}
