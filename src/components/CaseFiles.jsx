import Reveal from './Reveal';
import { files } from '../data';

export default function CaseFiles() {
  return (
    <section id="files" style={{ position: 'relative', padding: '110px 6vw 90px' }}>
      <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 44 }}>
        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.3em', color: '#b23a2e' }}>
            § 02 — RECOVERED CASE FILES
          </div>
          <h2 className="disp" style={{ fontSize: 'clamp(36px,5vw,68px)', lineHeight: 0.95, margin: '12px 0 0' }}>
            EVIDENCE OF WORK
          </h2>
        </div>
        <div className="mono" style={{ fontSize: 11, color: '#8a7c5c', maxWidth: 280, lineHeight: 1.7 }}>
          Four artifacts recovered from the subject's environment. Hover a file to declassify ·{' '}
          <span style={{ color: '#b23a2e' }}>ACCESS FILE opens the real thing</span>.
        </div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 28 }}>
        {files.map((f) => (
          <div key={f.no} className="case">
            <div
              className="mono"
              style={{ position: 'absolute', top: -11, left: 22, background: '#d9cfb4', border: '1px solid #cdc4ad', borderBottom: 0, padding: '5px 16px', borderRadius: '5px 5px 0 0' }}
            >
              <span style={{ fontSize: 10, letterSpacing: '.18em', color: '#5c5038' }}>{f.no}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '18px 20px 0' }}>
              <span
                className="mono"
                style={{
                  fontSize: 9,
                  letterSpacing: '.14em',
                  border: `1.5px solid ${f.stampColor}`,
                  color: f.stampColor,
                  padding: '4px 8px',
                  borderRadius: 2,
                  transform: 'rotate(4deg)',
                }}
              >
                {f.stamp}
              </span>
            </div>
            <div style={{ padding: '6px 20px 0' }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '.2em', color: '#8a7c5c' }}>
                {f.tag}
              </div>
              <h3 className="disp" style={{ fontSize: 30, lineHeight: 1, margin: '8px 0 12px', color: '#1a150d' }}>
                {f.name}
              </h3>
              <p className="mono" style={{ fontSize: 12, lineHeight: 1.7, color: '#3a3222', minHeight: 76 }}>
                {f.blurb}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '14px 0 16px' }}>
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="mono"
                    style={{ fontSize: 9, letterSpacing: '.1em', background: '#1a150d', color: '#e6e0d1', padding: '3px 7px', borderRadius: 2 }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className="mono"
                style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, borderTop: '1px dashed #cdc4ad', paddingTop: 12, color: '#5c5038' }}
              >
                <span>{f.metric}</span>
                <a href={f.link} target="_blank" rel="noopener" data-hit style={{ color: '#b23a2e' }}>
                  ACCESS FILE →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
