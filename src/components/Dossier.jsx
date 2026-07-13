import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import SkillBars from './SkillBars';
import { skills } from '../data';

export default function Dossier() {
  const sectionRef = useRef(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setLit(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-lit={lit ? '1' : undefined}
      style={{
        position: 'relative',
        background: '#14110b',
        color: '#e6e0d1',
        padding: '110px 6vw',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
      }}
    >
      <Reveal>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.3em', color: '#7b5cff' }}>
          § 01 — SUBJECT PROFILE
        </div>
        <h2 className="disp" style={{ fontSize: 'clamp(34px,4vw,58px)', lineHeight: 1, margin: '14px 0 24px', color: '#e6e0d1' }}>
          The parts they
          <br />
          tried to hide.
        </h2>
        <p className="mono" style={{ fontSize: 14, lineHeight: 1.9, color: '#c9c3b4' }}>
          Analysts note a subject operating years ahead of file age. Trains{' '}
          <span className="redact">transformer models from scratch</span>, ships{' '}
          <span className="redact">production software solo</span>, and navigates ambiguity by{' '}
          <span className="redact">instinct rather than instruction</span> — a trait cross-referenced with{' '}
          <span className="redact">elite competitive athletes</span>. Social, fast, and difficult to categorize.
          Recommendation: <span className="redact">make contact before a rival agency does.</span>
        </p>
      </Reveal>
      <Reveal style={{ alignSelf: 'center' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.3em', color: '#8a7c5c', marginBottom: 20 }}>
          CLEARANCE INVENTORY
        </div>
        <SkillBars skills={skills} />
      </Reveal>
    </section>
  );
}
