const PHRASE = 'TOP SECRET · EYES ONLY · SUBJECT FV-024 · CLEARANCE TEMPORARY · DO NOT DUPLICATE · ';

export default function Ticker() {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 70,
        background: '#1a150d',
        color: '#e6e0d1',
        overflow: 'hidden',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #b23a2e',
      }}
    >
      <div
        className="mono"
        style={{ whiteSpace: 'nowrap', fontSize: 10, letterSpacing: '.34em', animation: 'tick 26s linear infinite' }}
      >
        {PHRASE.repeat(5)}
      </div>
    </div>
  );
}
