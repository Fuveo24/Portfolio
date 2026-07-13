import Reveal from './Reveal';
import { logs } from '../data';

export default function FieldLog() {
  return (
    <section style={{ padding: '110px 6vw', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
      <Reveal>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.3em', color: '#b23a2e' }}>
          § 03 — FIELD REPORT
        </div>
        <h2 className="disp" style={{ fontSize: 'clamp(34px,4.4vw,60px)', lineHeight: 1, margin: '12px 0 22px' }}>
          Off the keyboard.
        </h2>
        <p className="mono" style={{ fontSize: 14, lineHeight: 1.9, color: '#3a3222', maxWidth: 520 }}>
          The same instinct that reads a defense reads a codebase. Surveillance notes a subject who competes on the
          field and computes off it — pattern recognition, split-second decisions, and an appetite for pressure.
          Social operator; the kind of teammate who makes the room faster.
        </p>
      </Reveal>
      <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {logs.map((l) => (
          <div
            key={l.time}
            className="mono"
            style={{ display: 'flex', gap: 14, alignItems: 'baseline', borderLeft: '2px solid #b23a2e', padding: '10px 16px', background: '#efe9db' }}
          >
            <span style={{ fontSize: 10, color: '#8a7c5c', letterSpacing: '.1em', flex: 'none', width: 70 }}>{l.time}</span>
            <span style={{ fontSize: 13, color: '#2a241a', lineHeight: 1.5 }}>{l.note}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
