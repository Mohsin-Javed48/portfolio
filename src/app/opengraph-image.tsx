import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mohsin Javed — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          backgroundImage:
            "linear-gradient(to right, rgba(17,24,39,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#2563eb",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          mohsin-javed.online
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 72,
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Mohsin Javed
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 36,
            fontWeight: 500,
            color: "#374151",
          }}
        >
          Full-Stack Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "#6b7280",
          }}
        >
          React.js · Next.js · Nest.js · TypeScript · PostgreSQL
        </div>
      </div>
    ),
    { ...size }
  );
}
