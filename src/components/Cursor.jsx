import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const move = (e) => {
      c.style.opacity = '1';
      c.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    };
    const big = () => {
      c.style.width = '150px';
      c.style.height = '150px';
      c.style.margin = '-75px 0 0 -75px';
    };
    const small = () => {
      c.style.width = '120px';
      c.style.height = '120px';
      c.style.margin = '-60px 0 0 -60px';
    };
    const over = (e) => {
      if (e.target.closest('[data-hit]')) big();
    };
    const out = (e) => {
      if (e.target.closest('[data-hit]')) small();
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    window.addEventListener('pointerout', out);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      window.removeEventListener('pointerout', out);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 120,
        height: 120,
        margin: '-60px 0 0 -60px',
        pointerEvents: 'none',
        zIndex: 99,
        opacity: 0,
        transition: 'width .18s, height .18s, margin .18s',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(123,92,255,.24),transparent 62%)',
          mixBlendMode: 'screen',
        }}
      />
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(123,92,255,.75)' }} />
      <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(123,92,255,.75)' }} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 16,
          height: 16,
          margin: '-8px 0 0 -8px',
          border: '1px solid rgba(123,92,255,.9)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
