import { ImageResponse } from "next/og";

export const alt = "Student Affairs Office — IIT Patna";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded Open Graph card — sampled institute palette (blue + saffron).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0C3F66 0%, #0F5C99 100%)",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "16px",
              height: "56px",
              background: "#F08020",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              fontSize: "30px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#cfe0ee",
            }}
          >
            Indian Institute of Technology Patna
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "82px", fontWeight: 700, lineHeight: 1.05 }}>
            Student Affairs
          </div>
          <div style={{ fontSize: "82px", fontWeight: 700, lineHeight: 1.05 }}>
            Office
          </div>
          <div style={{ marginTop: "20px", fontSize: "30px", color: "#cfe0ee" }}>
            Your campus, supported — every step of student life.
          </div>
        </div>

        <div style={{ fontSize: "24px", color: "#9db8cf" }}>
          विद्यार्थी लभते विद्याम् · One who aspires wisdom, attains it
        </div>
      </div>
    ),
    { ...size },
  );
}
