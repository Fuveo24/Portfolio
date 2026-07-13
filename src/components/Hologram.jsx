import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hologram() {
  const canvasRef = useRef(null);
  const tsRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const w = cv.clientWidth || 420;
    const h = cv.clientHeight || 420;

    const renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 4.6;

    const geo = new THREE.IcosahedronGeometry(1.7, 1);
    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x7b5cff, transparent: true, opacity: 0.9 }),
    );
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.66, 1),
      new THREE.MeshBasicMaterial({ color: 0x140f22, transparent: true, opacity: 0.55 }),
    );
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x33ff99, size: 0.07 }));

    const grp = new THREE.Group();
    grp.add(inner, wire, pts);
    scene.add(grp);

    let mx = 0;
    let my = 0;
    const onMove = (e) => {
      const b = cv.getBoundingClientRect();
      mx = ((e.clientX - b.left) / b.width - 0.5) * 2;
      my = ((e.clientY - b.top) / b.height - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove);

    const onResize = () => {
      const nw = cv.clientWidth || 420;
      const nh = cv.clientHeight || 420;
      renderer.setSize(nw, nh, false);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    const t0 = Date.now();
    let rafId;
    const loop = () => {
      grp.rotation.y += 0.005;
      grp.rotation.x += 0.002;
      grp.rotation.x += my * 0.0006;
      grp.position.x += (mx * 0.25 - grp.position.x) * 0.05;
      grp.position.y += (-my * 0.25 - grp.position.y) * 0.05;
      renderer.render(scene, camera);
      if (tsRef.current) {
        const e = Math.floor((Date.now() - t0) / 1000);
        const ms = String(Date.now() % 1000).padStart(3, '0').slice(0, 2);
        tsRef.current.textContent = `00:${String(Math.floor(e / 60)).padStart(2, '0')}:${String(e % 60).padStart(2, '0')}:${ms}`;
      }
      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      inner.geometry.dispose();
      inner.material.dispose();
      pts.material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: 'min(440px,42vw)',
        height: 'min(440px,42vw)',
        background: '#0d0b07',
        borderRadius: 6,
        overflow: 'hidden',
        boxShadow: 'inset 0 0 60px rgba(0,0,0,.8),0 24px 50px -18px rgba(0,0,0,.6)',
        animation: 'flick 5s infinite',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'repeating-linear-gradient(transparent 0 2px,rgba(0,0,0,.35) 2px 4px)',
          opacity: 0.5,
        }}
      />
      <div style={{ position: 'absolute', top: 12, left: 12, width: 22, height: 22, borderTop: '2px solid #33ff99', borderLeft: '2px solid #33ff99' }} />
      <div style={{ position: 'absolute', top: 12, right: 12, width: 22, height: 22, borderTop: '2px solid #33ff99', borderRight: '2px solid #33ff99' }} />
      <div style={{ position: 'absolute', bottom: 12, left: 12, width: 22, height: 22, borderBottom: '2px solid #33ff99', borderLeft: '2px solid #33ff99' }} />
      <div style={{ position: 'absolute', bottom: 12, right: 12, width: 22, height: 22, borderBottom: '2px solid #33ff99', borderRight: '2px solid #33ff99' }} />
      <div className="mono" style={{ position: 'absolute', top: 14, left: 44, fontSize: 9, color: '#33ff99', letterSpacing: '.2em', display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff3b30', animation: 'blink 1.4s infinite' }} />
        LIVE FEED · CAM 24
      </div>
      <div ref={tsRef} className="mono" style={{ position: 'absolute', bottom: 16, right: 44, fontSize: 9, color: '#33ff99', letterSpacing: '.15em' }}>
        00:00:00:00
      </div>
      <div className="mono" style={{ position: 'absolute', bottom: 16, left: 44, fontSize: 9, color: '#33ff99', letterSpacing: '.15em' }}>
        ASSET // GEOMETRY LOCK
      </div>
    </div>
  );
}
