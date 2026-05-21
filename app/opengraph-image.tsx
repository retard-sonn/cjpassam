import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F4EBD7',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          border: '24px solid #1A1108',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="200" height="200">
            <circle cx="32" cy="32" r="29" fill="none" stroke="#E0651E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
            <circle cx="32" cy="32" r="29" fill="none" stroke="#1F5A2E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
            <circle cx="32" cy="32" r="29" fill="none" stroke="#2A1A10" strokeWidth="0.8"></circle>
            <ellipse cx="32" cy="36" rx="11" ry="16" fill="#5A2F12"></ellipse>
            <ellipse cx="32" cy="25" rx="7" ry="6" fill="#5A2F12"></ellipse>
            <path d="M28 17 Q22 10 18 8 M36 17 Q42 10 46 8" stroke="#2A1A10" strokeWidth="1.6" fill="none" strokeLinecap="round"></path>
            <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#0a0807"></rect>
          </svg>
        </div>
        <div
          style={{
            fontSize: 72,
            fontFamily: 'serif',
            color: '#1A1108',
            fontWeight: 'bold',
            marginTop: 40,
            lineHeight: 1.1,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Cockroach Janta Party
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#B84915',
            marginTop: 20,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
          }}
        >
          Assam Wing
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
