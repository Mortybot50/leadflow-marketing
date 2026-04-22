// Generate the OG image at build time as a static PNG.
// Output: public/og.png (1200x630). Referenced in index.html and rewritten at /api/og.
import sharp from 'sharp'
import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '..', 'public', 'og.png')

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="amber" cx="25%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.4"/>
      <stop offset="55%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="violet" cx="80%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#a78bfa" stop-opacity="0.22"/>
      <stop offset="50%" stop-color="#a78bfa" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#09090b"/>
  <rect width="1200" height="630" fill="url(#amber)"/>
  <rect width="1200" height="630" fill="url(#violet)"/>

  <!-- Wordmark top-left -->
  <g transform="translate(80, 96)">
    <rect x="0" y="0" width="56" height="56" rx="12" fill="#09090b" stroke="#f59e0b" stroke-width="2"/>
    <path d="M22 10 L18 28 L30 28 L22 46 L38 22 L26 22 Z" fill="#f59e0b"/>
    <text x="78" y="40" font-family="Inter Tight, Inter, -apple-system, Segoe UI, Arial, sans-serif" font-weight="800" font-size="42" fill="#fafafa" letter-spacing="-0.02em">lead<tspan fill="#f59e0b">flow</tspan></text>
  </g>

  <!-- Eyebrow -->
  <text x="80" y="340" font-family="Inter, -apple-system, Segoe UI, Arial, sans-serif" font-weight="600" font-size="24" fill="#f59e0b" letter-spacing="4">AI SALES AGENT FOR B2B TEAMS</text>

  <!-- Headline -->
  <text x="80" y="420" font-family="Inter Tight, Inter, -apple-system, Segoe UI, Arial, sans-serif" font-weight="800" font-size="72" fill="#fafafa" letter-spacing="-0.03em">
    The AI sales agent that
  </text>
  <text x="80" y="500" font-family="Inter Tight, Inter, -apple-system, Segoe UI, Arial, sans-serif" font-weight="800" font-size="72" fill="#f59e0b" letter-spacing="-0.03em">
    actually books meetings.
  </text>

  <!-- Subcopy -->
  <text x="80" y="560" font-family="Inter, -apple-system, Segoe UI, Arial, sans-serif" font-weight="400" font-size="26" fill="#a1a1aa">Research. Draft. Reply. Book. — getleadflow.com</text>
</svg>
`

await mkdir(dirname(OUT), { recursive: true })
await sharp(Buffer.from(svg)).png().toFile(OUT)
console.log(`[og] wrote ${OUT}`)
