export function BrandSymbol({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M7 8.5 18 29 29 8.5M12 8.5l6 11 6-11" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="18" cy="29" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function ArrowUpRight({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowRight({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9h11M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function LineGlyph({ type }) {
  return (
    <svg className={`line-glyph line-glyph--${type}`} viewBox="0 0 112 72" fill="none" aria-hidden="true">
      {type === 'fragment' && (
        <>
          <path d="M9 25a18 18 0 0 1 27-9M9 47a18 18 0 0 0 27 9M76 16a18 18 0 0 1 27 9M76 56a18 18 0 0 0 27-9" />
          <circle cx="56" cy="36" r="3" className="glyph-node" />
        </>
      )}
      {type === 'focus' && (
        <>
          <circle cx="56" cy="36" r="21" />
          <ellipse cx="56" cy="36" rx="43" ry="13" transform="rotate(-22 56 36)" className="glyph-accent" />
          <circle cx="91" cy="20" r="3" className="glyph-node" />
        </>
      )}
      {type === 'scatter' && (
        <>
          <path d="M18 52Q54 4 94 22" className="glyph-accent" />
          <circle cx="18" cy="52" r="4" />
          <circle cx="55" cy="23" r="6" className="glyph-node" />
          <circle cx="94" cy="22" r="3" />
        </>
      )}
      {type === 'portal' && (
        <>
          <path d="M16 10h80v52H16z" opacity=".45" />
          <circle cx="48" cy="36" r="15" className="glyph-accent" />
          <path d="M72 36h27m-5-5 5 5-5 5" />
        </>
      )}
      {type === 'facets' && (
        <>
          <path d="m30 25 26-15 26 15-26 15-26-15Z" className="glyph-accent" />
          <path d="M30 25v30l26 15 26-15V25M56 40v30" />
        </>
      )}
      {type === 'evidence' && (
        <>
          <path d="M18 36h76" opacity=".5" />
          <circle cx="18" cy="36" r="6" />
          <circle cx="56" cy="36" r="14" className="glyph-accent" />
          <circle cx="94" cy="36" r="6" />
          <path d="m50 36 4 4 9-10" className="glyph-accent" />
        </>
      )}
    </svg>
  );
}

export function HeroUniverse() {
  return (
    <div className="hero-visual" data-parallax="0.018" aria-hidden="true">
      <div className="visual-meta">
        <span>IDENTITY ATLAS</span>
        <span>FIG. 001</span>
      </div>
      <svg className="hero-universe" viewBox="0 0 600 600" fill="none">
        <g className="diagram-grid">
          <path d="M60 300h480M300 60v480" />
          <path d="M110 110h380v380H110z" />
          <circle cx="300" cy="300" r="190" />
        </g>
        <g className="orbit orbit--outer">
          <ellipse cx="300" cy="300" rx="242" ry="108" transform="rotate(-24 300 300)" />
          <circle cx="518" cy="202" r="4" className="diagram-node" />
        </g>
        <g className="orbit orbit--inner">
          <ellipse cx="300" cy="300" rx="198" ry="76" transform="rotate(56 300 300)" />
          <circle cx="203" cy="155" r="3" className="diagram-node diagram-node--muted" />
        </g>
        <g className="projection projection--back">
          <path d="m300 129 128 74v148l-128 74-128-74V203l128-74Z" />
          <path d="m300 129 54 111-54 185M172 203l182 37M428 203l-74 37-182 111M172 351l128-111 128 111" />
        </g>
        <g className="projection projection--front">
          <path d="m300 151 110 63v127l-110 64-110-64V214l110-63Z" />
          <path d="m300 151 46 95-46 159M190 214l156 32M410 214l-64 32-156 95M190 341l110-95 110 95" />
          <path d="m300 151 46 95-110-32 64-63Z" className="diagram-accent" />
          <path d="m346 246 64-32v127l-64-95Z" className="diagram-accent diagram-accent--soft" />
        </g>
        <g className="diagram-ticks">
          <path d="M300 48v18M300 534v18M48 300h18M534 300h18" />
          <path d="m120 80 8 8M472 512l8 8M80 480l8-8M512 88l8-8" />
          <circle cx="300" cy="300" r="4" className="diagram-node" />
        </g>
        <g className="diagram-labels">
          <text x="78" y="82">MULTIPLE FACETS</text>
          <text x="410" y="528">ONE ORIGIN</text>
          <text x="315" y="291">YOU</text>
        </g>
      </svg>
      <div className="visual-coordinates">
        <span>YOU / UNI / UNIVERSE</span>
        <span>ORIGIN: YOU</span>
      </div>
      <span className="visual-corner visual-corner--tl" />
      <span className="visual-corner visual-corner--br" />
    </div>
  );
}

export function OrbitSignature({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 240 180" fill="none" aria-hidden="true">
      <g className="orbit-signature__back">
        <ellipse cx="120" cy="90" rx="103" ry="31" transform="rotate(-20 120 90)" />
        <ellipse cx="120" cy="90" rx="76" ry="22" transform="rotate(56 120 90)" className="orbit-signature__secondary" />
      </g>
      <circle cx="120" cy="90" r="47" className="orbit-signature__planet" />
      <path d="M132 45a47 47 0 0 0 0 90 36 47 0 0 1 0-90Z" className="orbit-signature__crescent" />
      <g transform="rotate(-20 120 90)">
        <path d="M17 90a103 31 0 0 0 206 0" className="orbit-signature__front" />
        <circle cx="211" cy="73" r="5" className="orbit-signature__moon" />
      </g>
    </svg>
  );
}

export function AssetOrbit() {
  return (
    <div className="asset-orbit" data-parallax="0.02" data-parallax-x="0.004" aria-hidden="true">
      <svg viewBox="0 0 440 440" fill="none">
        <g className="asset-orbit__back">
          <ellipse cx="220" cy="220" rx="176" ry="56" transform="rotate(-24 220 220)" />
          <ellipse cx="220" cy="220" rx="135" ry="41" transform="rotate(58 220 220)" className="asset-orbit__secondary" />
        </g>
        <circle cx="220" cy="220" r="82" className="asset-orbit__planet" />
        <path d="M243 143a82 82 0 0 0 0 154 62 82 0 0 1 0-154Z" className="asset-orbit__crescent" />
        <g transform="rotate(-24 220 220)">
          <path d="M44 220a176 56 0 0 0 352 0" className="asset-orbit__front" />
          <circle cx="375" cy="199" r="7" className="asset-orbit__satellite" />
        </g>
        <text x="48" y="410">ACCUMULATE / GROW / BELONG</text>
      </svg>
    </div>
  );
}

export function CtaGeometry() {
  return (
    <svg className="cta-geometry" data-parallax="0.03" data-parallax-x="-0.008" viewBox="0 0 480 360" fill="none" aria-hidden="true">
      <g className="cta-geometry__back">
        <ellipse cx="240" cy="180" rx="207" ry="64" transform="rotate(-20 240 180)" />
        <ellipse cx="240" cy="180" rx="153" ry="43" transform="rotate(55 240 180)" className="cta-geometry__secondary" />
      </g>
      <circle cx="240" cy="180" r="91" className="cta-geometry__planet" />
      <path d="M267 96a91 91 0 0 0 0 168 69 91 0 0 1 0-168Z" className="cta-geometry__crescent" />
      <g transform="rotate(-20 240 180)">
        <path d="M33 180a207 64 0 0 0 414 0" className="cta-geometry__front" />
        <circle cx="424" cy="157" r="6" className="cta-geometry__moon" />
      </g>
    </svg>
  );
}

export function FacetFloat({ className = '', parallax, parallaxX }) {
  return (
    <svg
      className={`facet-float ${className}`}
      data-parallax={parallax}
      data-parallax-x={parallaxX || undefined}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
    >
      <path d="M80 12 148 80 80 148 12 80Z" />
      <path d="M80 12v136M12 80h136" opacity="0.4" />
      <circle cx="80" cy="80" r="30" opacity="0.35" />
    </svg>
  );
}
