import { useEffect, useRef, useState } from 'react';

export default function SkillBars({ skills }) {
  const wrapRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setTriggered(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {skills.map((s, i) => (
        <div key={s.k}>
          <div
            className="mono"
            style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, letterSpacing: '.06em', marginBottom: 7, color: '#c9c3b4' }}
          >
            <span>{s.k}</span>
            <span style={{ color: '#7b5cff' }}>{s.v}%</span>
          </div>
          <div style={{ height: 6, background: '#2a241a', borderRadius: 3, overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: triggered ? `${s.v}%` : 0,
                background: 'linear-gradient(90deg,#7b5cff,#b23a2e)',
                borderRadius: 3,
                transition: `width 1.1s cubic-bezier(.2,.8,.2,1) ${triggered ? 120 * i : 0}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
