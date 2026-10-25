import { useEffect, useRef } from 'react';
import { ArrowRight } from './Visuals.jsx';

export function SectionHeader({ kicker, title, intro, id, className = '' }) {
  return (
    <header className={`section-header reveal ${className}`}>
      <p className="kicker">{kicker}</p>
      <div className="section-header__content">
        <h2 id={id}>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </header>
  );
}

export function TextButton({ href, children, className = '', onClick }) {
  return (
    <a className={`button ${className}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight className="button__icon" />
    </a>
  );
}

export function SpotlightPanel({ children, className = '' }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const spot = root.querySelector('.spotlight-cursor');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');
    if (reducedMotion.matches || !finePointer.matches) return undefined;

    let frame = null;
    let initialized = false;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      spot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(loop);
    };
    frame = window.requestAnimationFrame(loop);

    const onMove = (event) => {
      const rect = root.getBoundingClientRect();
      tx = event.clientX - rect.left;
      ty = event.clientY - rect.top;
      if (!initialized) {
        x = tx;
        y = ty;
        initialized = true;
      }
      spot.classList.add('is-visible');
    };
    const onLeave = () => {
      spot.classList.remove('is-visible');
      initialized = false;
    };

    root.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('pointerleave', onLeave);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className={`spotlight-panel ${className}`} ref={rootRef}>
      {children}
      <div className="spotlight-cursor" aria-hidden="true" />
    </div>
  );
}
