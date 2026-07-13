import Reveal from './Reveal';

export default function Channel() {
  return (
    <section
      id="channel"
      style={{
        position: 'relative',
        background: '#14110b',
        color: '#e6e0d1',
        padding: '120px 6vw 90px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'repeating-linear-gradient(transparent 0 2px,rgba(0,0,0,.4) 2px 4px)',
          opacity: 0.4,
        }}
      />
      <Reveal style={{ position: 'relative' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.3em', color: '#7b5cff' }}>
          § 04 — ESTABLISH CONTACT
        </div>
        <h2 className="disp" style={{ fontSize: 'clamp(44px,8vw,120px)', lineHeight: 0.9, margin: '16px 0 8px' }}>
          OPEN A CHANNEL
          <span
            style={{
              display: 'inline-block',
              width: '.5ch',
              height: '.82em',
              background: '#33ff99',
              marginLeft: 6,
              animation: 'blink 1s step-end infinite',
              verticalAlign: '-6px',
            }}
          />
        </h2>
        <p className="mono" style={{ fontSize: 13, color: '#8a7c5c', maxWidth: 520, margin: '10px auto 34px', lineHeight: 1.8 }}>
          Alan &mdash; codename Fuveo24. 14, based in Germany. Agents and employers only. Transmission read within
          the hour.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:alantopik11@gmail.com"
            data-hit
            className="mono"
            style={{ background: '#33ff99', color: '#0a0a0a', padding: '16px 26px', borderRadius: 2, fontSize: 14, letterSpacing: '.08em' }}
          >
            alantopik11@gmail.com
          </a>
          <a
            href="https://github.com/Fuveo24"
            target="_blank"
            rel="noopener"
            data-hit
            className="mono"
            style={{ border: '1.5px solid #e6e0d1', color: '#e6e0d1', padding: '15px 24px', borderRadius: 2, fontSize: 14, letterSpacing: '.08em' }}
          >
            @Fuveo24 · github
          </a>
          <a
            href="tel:+491621324239"
            data-hit
            className="mono"
            style={{ border: '1.5px solid #e6e0d1', color: '#e6e0d1', padding: '15px 24px', borderRadius: 2, fontSize: 14, letterSpacing: '.08em' }}
          >
            +49 162 132 4239
          </a>
        </div>
        <div
          className="mono"
          style={{
            marginTop: 70,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 10,
            letterSpacing: '.16em',
            color: '#5c5038',
            borderTop: '1px solid #2a241a',
            paddingTop: 20,
          }}
        >
          <span>FILE FV-024</span>
          <span>PAGE 1 OF 1</span>
          <span>DESTROY AFTER READING</span>
        </div>
      </Reveal>
    </section>
  );
}
