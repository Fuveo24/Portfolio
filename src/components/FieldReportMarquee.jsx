const PHRASE = 'INTUITION · INSTINCT · SPEED · TASTE · OUTSIDE THE BOX · ';

export default function FieldReportMarquee() {
  return (
    <section style={{ background: '#b23a2e', color: '#f3e7d4', padding: '44px 0', overflow: 'hidden', borderTop: '1px solid #7a271e', borderBottom: '1px solid #7a271e' }}>
      <div className="disp" style={{ whiteSpace: 'nowrap', fontSize: 'clamp(40px,7vw,96px)', animation: 'tick 30s linear infinite', opacity: 0.96 }}>
        {PHRASE.repeat(2)}
      </div>
    </section>
  );
}
