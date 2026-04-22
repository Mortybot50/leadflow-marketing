import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function handler(): Response {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(circle at 25% 20%, rgba(245,158,11,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(167,139,250,0.18) 0%, transparent 50%), #09090b',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '42px',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              background: '#09090b',
              border: '2px solid #f59e0b',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#f59e0b', fontSize: '30px', fontWeight: 800 }}>⚡</span>
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ color: '#fafafa' }}>lead</span>
            <span style={{ color: '#f59e0b' }}>flow</span>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '26px',
              fontWeight: 600,
              color: '#f59e0b',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            AI sales agent for B2B teams
          </div>
          <div
            style={{
              fontSize: '78px',
              fontWeight: 800,
              color: '#fafafa',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: '1040px',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <span>The AI sales agent that&nbsp;</span>
            <span style={{ color: '#f59e0b' }}>actually books meetings.</span>
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#a1a1aa',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Research. Draft. Reply. Book. — getleadflow.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
