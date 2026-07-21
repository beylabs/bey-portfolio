import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0d2137',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: '#facc15',
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          The Intersection of Governance &amp; AI
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Khalid Sani Umar
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#94a3b8',
            textAlign: 'center',
          }}
        >
          Digital Transformation Architect
        </div>
      </div>
    ),
    size
  );
}
