import { useEffect, useRef, useState } from 'react';

export default function DeclassifyMachine({ rootRef, onToggle }) {
  const [isOn, setIsOn] = useState(false);
  const barRef = useRef(null);
  const stampRef = useRef(null);

  useEffect(() => {
    onToggle?.(isOn);
    const bar = barRef.current;
    const stamp = stampRef.current;
    const root = rootRef.current || document;
    const redacts = () => [...root.querySelectorAll('.redact')];

    if (isOn) {
      const H = root.scrollHeight;
      const items = redacts().map((el) => ({ el, top: el.getBoundingClientRect().top + window.scrollY }));
      bar.style.opacity = '1';
      const dur = 2100;
      const t0 = performance.now();
      let raf;
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const y = p * H;
        bar.style.transform = `translateY(${y}px)`;
        items.forEach((it) => {
          if (it.top <= y + 30) {
            it.el.style.background = 'rgba(123,92,255,.14)';
            it.el.style.color = '#26200f';
            it.el.style.textShadow = '0 0 12px rgba(123,92,255,.35)';
          }
        });
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          bar.style.opacity = '0';
          stamp.style.display = 'block';
          const stampEl = stamp.firstElementChild;
          stampEl.style.animation = 'none';
          void stampEl.offsetWidth;
          stampEl.style.animation = 'stamp .5s forwards, shake .5s .5s';
        }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }

    bar.style.opacity = '0';
    bar.style.transform = 'translateY(0)';
    stamp.style.display = 'none';
    redacts().forEach((el) => {
      el.style.background = '';
      el.style.color = '';
      el.style.textShadow = '';
    });
  }, [isOn, rootRef, onToggle]);

  return (
    <>
      <button
        data-hit
        className="mono"
        onClick={() => setIsOn((v) => !v)}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 90,
          background: '#b23a2e',
          color: '#f3e7d4',
          border: 0,
          padding: '15px 20px',
          borderRadius: 3,
          fontSize: 12,
          letterSpacing: '.14em',
          cursor: 'none',
          boxShadow: '0 14px 30px -10px rgba(178,58,46,.7)',
          display: 'flex',
          alignItems: 'center',
          gap: 9,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#f3e7d4',
            animation: isOn ? 'none' : 'blink 1.2s infinite',
          }}
        />
        {isOn ? 'RE-CLASSIFY' : 'RUN DECLASSIFICATION'}
      </button>

      <div
        ref={barRef}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 90,
          zIndex: 60,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity .3s',
          mixBlendMode: 'screen',
          background: 'linear-gradient(transparent,rgba(123,92,255,.35),rgba(51,255,153,.7),rgba(123,92,255,.35),transparent)',
        }}
      >
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#33ff99', boxShadow: '0 0 18px 3px rgba(51,255,153,.9)' }} />
      </div>

      <div ref={stampRef} style={{ position: 'fixed', top: '34%', left: 0, right: 0, zIndex: 85, textAlign: 'center', pointerEvents: 'none', display: 'none' }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: "'Archivo',sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(48px,9vw,130px)',
            color: '#b23a2e',
            border: '7px solid #b23a2e',
            padding: '8px 30px',
            borderRadius: 8,
            letterSpacing: '-.01em',
            background: 'rgba(230,224,209,.35)',
            textShadow: '0 2px 0 rgba(0,0,0,.1)',
          }}
        >
          DECLASSIFIED
        </span>
        <div className="mono" style={{ fontSize: 13, letterSpacing: '.3em', color: '#b23a2e', marginTop: 14 }}>
          FILE FV-024 · CLEARED 07 / 2026
        </div>
      </div>
    </>
  );
}
