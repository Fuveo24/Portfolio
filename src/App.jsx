import { useEffect, useRef } from 'react';
import Cursor from './components/Cursor';
import Overlays from './components/Overlays';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Dossier from './components/Dossier';
import CaseFiles from './components/CaseFiles';
import FieldReportMarquee from './components/FieldReportMarquee';
import FieldLog from './components/FieldLog';
import Channel from './components/Channel';
import DeclassifyMachine from './components/DeclassifyMachine';

function App() {
  const rootRef = useRef(null);
  const declassifiedRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const heroSection = root.querySelector('section');
    const spans = [...heroSection.querySelectorAll('.redact')];

    const onMove = (e) => {
      if (declassifiedRef.current) return;
      spans.forEach((r) => {
        const b = r.getBoundingClientRect();
        const d = Math.hypot(b.left + b.width / 2 - e.clientX, b.top + b.height / 2 - e.clientY);
        if (d < 90) {
          r.style.background = 'rgba(123,92,255,.16)';
          r.style.color = '#26200f';
          r.style.textShadow = '0 0 12px rgba(123,92,255,.3)';
        } else {
          r.style.background = '';
          r.style.color = '';
          r.style.textShadow = '';
        }
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div ref={rootRef} style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Overlays />
      <Cursor />
      <Ticker />
      <Hero />
      <Dossier />
      <CaseFiles />
      <FieldReportMarquee />
      <FieldLog />
      <Channel />
      <DeclassifyMachine rootRef={rootRef} onToggle={(isOn) => (declassifiedRef.current = isOn)} />
    </div>
  );
}

export default App;
