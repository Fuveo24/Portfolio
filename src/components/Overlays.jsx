const GRAIN_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/></svg>";

export default function Overlays() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 80,
          opacity: 0.5,
          mixBlendMode: 'multiply',
          backgroundImage: `url('${GRAIN_SVG}')`,
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          height: 120,
          pointerEvents: 'none',
          zIndex: 81,
          background: 'linear-gradient(transparent,rgba(123,92,255,.09),transparent)',
          animation: 'scan 7s linear infinite',
        }}
      />
    </>
  );
}
