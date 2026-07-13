import Hologram from './Hologram';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        padding: '70px 6vw 60px',
        display: 'grid',
        gridTemplateColumns: '1.15fr .85fr',
        gap: 40,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.5,
          mixBlendMode: 'multiply',
          background: 'radial-gradient(120% 90% at 82% 4%,transparent 40%,rgba(90,78,55,.4) 100%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.28em', color: '#8a7c5c' }}>
          PERSONNEL FILE // NO. FV-024 // OPENED 07.2026
        </div>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.28em', color: '#8a7c5c', marginTop: 6 }}>
          SUBJECT — CODENAME
        </div>
        <h1 className="disp" style={{ fontSize: 'clamp(80px,12vw,190px)', lineHeight: 0.86, margin: '6px 0 0', color: '#1a150d' }}>
          FUVEO<span style={{ color: '#b23a2e' }}>24</span>
        </h1>
        <p className="mono" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: '26px 0 0', color: '#2a241a' }}>
          Age on file: <span className="redact">14 years</span>. Field of operation:{' '}
          <span className="redact">machine learning</span>, <span className="redact">software engineering</span>,
          and a method insiders call <span className="redact">&ldquo;vibe coding.&rdquo;</span> Off the record:{' '}
          <span className="redact">competitive athlete</span> who <span className="redact">thinks outside the box</span>.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 34, alignItems: 'center' }}>
          <a
            href="#files"
            data-hit
            className="mono"
            style={{ background: '#1a150d', color: '#e6e0d1', padding: '15px 24px', fontSize: 13, letterSpacing: '.12em', borderRadius: 2 }}
          >
            ACCESS CASE FILES →
          </a>
          <a
            href="#channel"
            data-hit
            className="mono"
            style={{ border: '1.5px solid #1a150d', padding: '14px 22px', fontSize: 13, letterSpacing: '.12em', borderRadius: 2, color: '#1a150d' }}
          >
            OPEN CHANNEL
          </a>
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: '#8a7c5c', marginTop: 22 }}>
          ↖ MOVE THE SCOPE ACROSS THE FILE TO DECLASSIFY
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 2, justifySelf: 'center' }}>
        <Hologram />
        <div className="mono" style={{ textAlign: 'center', fontSize: 10, color: '#8a7c5c', marginTop: 12, letterSpacing: '.14em' }}>
          FIG 1. — REAL-TIME STRUCTURAL SCAN OF SUBJECT
        </div>
      </div>
    </section>
  );
}
