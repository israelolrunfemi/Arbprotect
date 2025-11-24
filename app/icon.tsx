import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// Icon metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Image generation
export default function Icon() {
  // Read the uploaded file from your app folder
  const filePath = path.join(process.cwd(), "app", "ARB W.png");
  const fileBuffer = fs.readFileSync(filePath);
  const base64 = fileBuffer.toString("base64");

  return new ImageResponse(
    (
      <img
        src={`data:image/png;base64,${base64}`}
        alt="ARBprotect icon"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ),
    {
      ...size,
    }
  );
}
