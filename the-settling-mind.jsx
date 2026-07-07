import React, { useState, useEffect, useRef, useCallback } from "react";

/* ============================================================
   THE SETTLING MIND
   Saṁyama — dhāraṇā · dhyāna · samādhi — read through the
   spectral–temporal duality. Companion to "The Light & the Field."
   Shared palette & type system for series consistency.
   Signature: the dual view — one mind shown at once as a
   time-domain waveform AND its frequency spectrum, transforming
   together from the dispersed to the vṛtti-less.
   ============================================================ */

const C = {
  ink: "#070B16",
  mist: "#101830",
  line: "#24304F",
  parchment: "#E8E3D5",
  dim: "#9AA1B5",
  gold: "#E3B458",
  goldSoft: "rgba(227,180,88,0.14)",
  violet: "#8E7CF3",
  cyan: "#5BC8DD",
};

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
    * { box-sizing: border-box; }
    .sm-display { font-family: 'Cormorant Garamond', Georgia, serif; }
    .sm-body { font-family: 'Inter', -apple-system, sans-serif; }
    .sm-fade { animation: smFade 0.7s ease both; }
    @keyframes smFade { from { opacity: 0; transform: translateY(14px);} to { opacity: 1; transform: none; } }
    @media (prefers-reduced-motion: reduce) { .sm-fade { animation: none; } }
    .sm-navdot { transition: all 0.25s ease; cursor: pointer; }
    .sm-navdot:hover { background: ${C.gold} !important; }
    button:focus-visible { outline: 2px solid ${C.gold}; outline-offset: 3px; }
    input[type=range] { accent-color: ${C.gold}; }
  `}</style>
);

/* ---------- shared atoms ---------- */
const Eyebrow = ({ children }) => (
  <div className="sm-body" style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: C.gold, marginBottom: 18, fontWeight: 500 }}>{children}</div>
);
const SlideTitle = ({ children, size = 44 }) => (
  <h2 className="sm-display" style={{ fontSize: `clamp(27px, 5.2vw, ${size}px)`, lineHeight: 1.15, color: C.parchment, fontWeight: 500, margin: "0 0 20px 0", overflowWrap: "break-word" }}>{children}</h2>
);
const Body = ({ children, style }) => (
  <p className="sm-body" style={{ fontSize: 15.5, lineHeight: 1.75, color: C.dim, margin: "0 0 16px 0", maxWidth: 720, ...style }}>{children}</p>
);
const Gold = ({ children }) => <span style={{ color: C.gold }}>{children}</span>;
const Light = ({ children }) => <span style={{ color: C.parchment }}>{children}</span>;
const Card = ({ children, style }) => (
  <div style={{ background: C.mist, border: `1px solid ${C.line}`, borderRadius: 10, padding: "20px 22px", ...style }}>{children}</div>
);
const HonestyNote = ({ children }) => (
  <div className="sm-body" style={{ borderLeft: `2px solid ${C.gold}`, background: C.goldSoft, padding: "14px 18px", borderRadius: "0 8px 8px 0", fontSize: 13.5, lineHeight: 1.7, color: C.parchment, maxWidth: 720, marginTop: 8 }}>
    <span style={{ color: C.gold, fontWeight: 600, letterSpacing: "0.08em", fontSize: 11, textTransform: "uppercase" }}>The honesty line · </span>
    {children}
  </div>
);
const PlainWords = ({ children }) => (
  <div className="sm-body" style={{ borderLeft: `2px solid ${C.cyan}`, background: "rgba(91,200,221,0.08)", padding: "13px 17px", borderRadius: "0 8px 8px 0", fontSize: 13.5, lineHeight: 1.7, color: C.parchment, maxWidth: 720, marginTop: 12 }}>
    <span style={{ color: C.cyan, fontWeight: 600, letterSpacing: "0.08em", fontSize: 11, textTransform: "uppercase" }}>In plain words · </span>
    {children}
  </div>
);
const SpectrumBar = ({ labels }) => (
  <div style={{ margin: "10px 0 4px 0" }}>
    <div style={{ height: 10, borderRadius: 5, background: `linear-gradient(90deg, ${C.violet}, ${C.cyan}, ${C.gold})`, opacity: 0.85 }} />
    {labels && (
      <div className="sm-body" style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
        {labels.map((l, i) => <span key={i} style={{ fontSize: 11.5, color: C.dim, letterSpacing: "0.04em" }}>{l}</span>)}
      </div>
    )}
  </div>
);

/* ============================================================
   STAGE DEFINITIONS — the spine of the whole deck
   ============================================================ */
const STAGES = [
  {
    key: "viksipta", roman: "Vikṣipta", en: "The Dispersed Mind",
    sutra: "the ordinary condition", bhumi: "vikṣipta · distracted",
    gloss: "Attention scattered across countless competing vṛttis — pulled a hundred directions at once.",
    domainNote: "Time: jagged, restless. Spectrum: broadband — energy smeared across every frequency, no dominant tone.",
    rwf: "RWF reading: no single object-wave chosen; fₘ unstable, G(t) erratic, n(t) high. Beats everywhere at once.",
    noise: 1, coherence: 0, gated: false, flat: false,
    peakH: 0, peakW: 0.2, floor: 0.82, lumpy: true,
  },
  {
    key: "dharana", roman: "Dhāraṇā", en: "Binding to One Point",
    sutra: "YS 3.1 · deśa-bandhaś cittasya dhāraṇā", bhumi: "gathering the vikṣipta mind",
    gloss: "The mind is tied to a single object — but effortfully, and the hold keeps breaking and being renewed.",
    domainNote: "Time: one tone attempted, but chopped by interruption. Spectrum: a broad peak rising over a lowered floor.",
    rwf: "RWF reading: one object-wave chosen; tuning begins. Δf is still large — the beat at |fₛ − fₘ| is rapid, and contact feels effortful.",
    noise: 0.4, coherence: 0.55, gated: true, flat: false,
    peakH: 0.66, peakW: 0.14, floor: 0.34, lumpy: true,
  },
  {
    key: "dhyana", roman: "Dhyāna", en: "The Unbroken Flow",
    sutra: "YS 3.2 · tatra pratyaya-ekatānatā dhyānam", bhumi: "ekāgra · one-pointed",
    gloss: "The returning becomes unnecessary: cognition flows toward the object in one continuous thread (ekatānatā).",
    domainNote: "Time: a smooth, sustained tone. Spectrum: the line sharpens — because unbroken duration IS spectral purity.",
    rwf: "RWF reading: fₘ closing on fₛ — the beat slows and softens. Friction becomes flow; the envelope approaches constancy.",
    noise: 0.1, coherence: 0.9, gated: false, flat: false,
    peakH: 0.9, peakW: 0.05, floor: 0.1, lumpy: false,
  },
  {
    key: "samadhi", roman: "Samādhi", en: "Only the Object Shines",
    sutra: "YS 3.3 · svarūpa-śūnyam iva", bhumi: "ekāgra, deepened · sabīja",
    gloss: "The act of meditating vanishes; the object alone shines, 'as if empty of its own form.'",
    domainNote: "Time: a single pure frequency. Spectrum: one sharp line — fully delocalized in time, no waveform-shape left to point to.",
    rwf: "RWF reading: Δf = 0 and Δφ = 0 → R(t) = 2A·cos(2π fₛ t). The beat has ceased; the knowing runs at the rhythm of the known, at full gathered amplitude.",
    noise: 0, coherence: 1, gated: false, flat: false,
    peakH: 1, peakW: 0.017, floor: 0.02, lumpy: false,
  },
  {
    key: "nirodha", roman: "Nirodha", en: "The Vṛtti-less Mind",
    sutra: "YS 1.2 · yogaś citta-vṛtti-nirodhaḥ", bhumi: "niruddha · nirbīja",
    gloss: "Even the single pure vṛtti subsides. Not blankness — the luminous ground remains: prakāśa without a ripple.",
    domainNote: "Time: stillness. Spectrum: no oscillation — yet the field is not dark. The seeded gives way to the seedless.",
    rwf: "RWF reading: the substrate — the medium in which both waves arose, never a term in the equation. Beyond it lies the involution the equation can only point toward: 9 → 0.",
    noise: 0, coherence: 0, gated: false, flat: true,
    peakH: 0, peakW: 0, floor: 0, lumpy: false,
  },
];

/* deterministic lumpy broadband shape */
function lump(x) {
  const v = 0.5 + 0.28 * Math.sin(13.1 * x + 1.3) + 0.22 * Math.sin(7.7 * x + 4.1)
    + 0.16 * Math.sin(23.3 * x + 0.7) + 0.12 * Math.sin(3.9 * x + 2.2);
  return Math.max(0, Math.min(1, v));
}

/* ---------- time-domain waveform (animated) ---------- */
function Waveform({ stage, height = 120 }) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    const reduced = prefersReduced();

    const render = (phase) => {
      const w = cv.clientWidth || 320, h = height;
      cv.width = w * dpr; cv.height = h * dpr;
      const ctx = cv.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const mid = h / 2;

      // ground glow for nirodha
      if (stage.flat) {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, "rgba(227,180,88,0)");
        g.addColorStop(0.5, "rgba(227,180,88,0.10)");
        g.addColorStop(1, "rgba(227,180,88,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
        ctx.beginPath();
        ctx.moveTo(0, mid); ctx.lineTo(w, mid);
        ctx.strokeStyle = C.gold; ctx.lineWidth = 1.4;
        ctx.globalAlpha = 0.7; ctx.stroke(); ctx.globalAlpha = 1;
        return;
      }

      ctx.beginPath();
      for (let x = 0; x <= w; x++) {
        const nx = x / w;
        let y = 0;
        // coherent tone
        const gate = stage.gated
          ? (Math.sin(nx * Math.PI * 2 * 3 + 0.6) > -0.25 ? 1 : 0.08) // choppy on/off
          : 1;
        y += stage.coherence * gate * Math.sin(nx * Math.PI * 2 * 9 + phase);
        // noise: incommensurate layers + slow drift
        if (stage.noise > 0) {
          y += stage.noise * 0.55 * Math.sin(nx * Math.PI * 2 * 27 + phase * 1.7 + 1.1);
          y += stage.noise * 0.4 * Math.sin(nx * Math.PI * 2 * 41 + phase * 0.9 + 3.3);
          y += stage.noise * 0.3 * Math.sin(nx * Math.PI * 2 * 63 + phase * 2.3 + 0.5);
          y += stage.noise * 0.22 * Math.sin(nx * Math.PI * 2 * 17 + phase * 1.3 + 5.0);
        }
        const norm = (stage.coherence + stage.noise * 1.4) || 1;
        const yy = mid - (y / norm) * (h * 0.4);
        x === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
      }
      ctx.strokeStyle = C.gold;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.5 + 0.5 * Math.max(stage.coherence, 1 - stage.noise);
      ctx.stroke();
      ctx.globalAlpha = 1;

      // midline
      ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(w, mid);
      ctx.strokeStyle = "rgba(154,161,181,0.15)"; ctx.lineWidth = 1; ctx.stroke();
    };

    if (reduced) { render(0); return; }
    let start = null;
    const loop = (ts) => {
      if (!start) start = ts;
      render(((ts - start) / 1000) * 2.2);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [stage, height]);
  return <canvas ref={ref} style={{ width: "100%", height, display: "block" }} aria-hidden="true" />;
}

/* ---------- frequency-domain spectrum (static per stage) ---------- */
function Spectrum({ stage, height = 120 }) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    const w = cv.clientWidth || 320, h = height;
    cv.width = w * dpr; cv.height = h * dpr;
    const ctx = cv.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const base = h - 8;

    if (stage.flat) {
      // ground: a soft even luminance, no oscillation
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, "rgba(142,124,243,0.05)");
      g.addColorStop(0.5, "rgba(91,200,221,0.06)");
      g.addColorStop(1, "rgba(227,180,88,0.05)");
      ctx.fillStyle = g;
      ctx.fillRect(0, base - 4, w, 4);
      ctx.font = "italic 13px 'Cormorant Garamond', serif";
      ctx.fillStyle = C.dim;
      ctx.textAlign = "center";
      ctx.fillText("no vṛtti — the field at rest", w / 2, h / 2);
      return;
    }

    const nbars = 96;
    const bw = w / nbars;
    for (let i = 0; i < nbars; i++) {
      const x = i / (nbars - 1);
      const peak = stage.peakH * Math.exp(-((x - 0.5) ** 2) / (2 * stage.peakW * stage.peakW));
      const floor = stage.floor * (stage.lumpy ? (0.5 + 0.5 * lump(x)) : 1);
      const amp = Math.min(1, Math.max(peak, floor));
      const barH = amp * (h - 20);
      // color along spectral gradient
      const hue = 262 - x * 220; // violet→cyan→gold-ish
      ctx.fillStyle = `hsl(${hue}, 62%, ${58 - amp * 6}%)`;
      ctx.globalAlpha = 0.35 + amp * 0.5;
      ctx.fillRect(i * bw + bw * 0.15, base - barH, bw * 0.7, barH);
    }
    ctx.globalAlpha = 1;
  }, [stage, height]);
  return <canvas ref={ref} style={{ width: "100%", height, display: "block" }} aria-hidden="true" />;
}

/* dual view: time above, spectrum below */
function DualView({ stage, tall = false }) {
  const hh = tall ? 130 : 110;
  return (
    <Card style={{ padding: "16px 18px" }}>
      <div className="sm-body" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: C.dim, marginBottom: 4 }}>
        Time domain — the waveform of the mind
      </div>
      <Waveform stage={stage} height={hh} />
      <div style={{ height: 1, background: C.line, margin: "12px 0" }} />
      <div className="sm-body" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: C.dim, marginBottom: 4 }}>
        Frequency domain — its spectrum
      </div>
      <Spectrum stage={stage} height={hh} />
    </Card>
  );
}

/* ============================================================
   SLIDES
   ============================================================ */

const SlideCover = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (prefersReduced()) { setI(3); return; }
    let raf, start;
    const loop = (ts) => {
      if (!start) start = ts;
      const t = ((ts - start) / 9000) % 1;
      setI(Math.min(STAGES.length - 1, Math.floor(t * STAGES.length)));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="sm-fade" style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}>
      <Eyebrow>A Research Exploration · Ritam Wellbeing Framework</Eyebrow>
      <h1 className="sm-display" style={{ fontSize: "clamp(42px, 6.6vw, 70px)", lineHeight: 1.05, color: C.parchment, fontWeight: 500, margin: "0 0 10px 0" }}>
        The Settling Mind
      </h1>
      <p className="sm-display" style={{ fontSize: "clamp(17px, 2.5vw, 25px)", fontStyle: "italic", color: C.gold, margin: "0 0 30px 0", fontWeight: 400 }}>
        Saṁyama and the Spectral–Temporal Transformation
      </p>
      <div style={{ maxWidth: 560, margin: "0 auto 20px auto" }}>
        <DualView stage={STAGES[i]} />
        <div className="sm-display" style={{ fontSize: 24, fontStyle: "italic", color: C.gold, marginTop: 14 }}>
          {STAGES[i].roman}
        </div>
      </div>
      <p className="sm-body" style={{ fontSize: 13.5, color: C.dim, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
        One mind, watched two ways at once. As it settles from the <Light>dispersed</Light> to the
        <Light> one-pointed</Light> to the <Light>vṛtti-less</Light>, the restless waveform resolves into a
        single pure line — and then into stillness. Meditation, seen as a transformation between domains.
      </p>
    </div>
  );
};

const SlideProblem = () => (
  <div className="sm-fade">
    <Eyebrow>01 · The Starting Condition</Eyebrow>
    <SlideTitle>Yoga is the stilling of the mind's fluctuations</SlideTitle>
    <Body>
      Patañjali's second sūtra defines the whole path in four words: <Gold>yogaś citta-vṛtti-nirodhaḥ</Gold> —
      yoga is the <Light>nirodha</Light> (cessation, restraint) of the <Light>vṛttis</Light>, the whirls or
      modifications of the citta. Everything that follows is method for one movement: from a mind of many
      whirls to a mind of none.
    </Body>
    <Body>
      You know the starting condition from the inside. Watch any ordinary hour: a message arrives, a
      memory surfaces, a worry loops, a plan forms and dissolves — attention pulled from one small event
      to the next, each with a beginning and an end, none staying. That, precisely, is what the tradition
      means by a mind of many vṛttis.
    </Body>
    <Body>
      Classical Yoga names five conditions the citta can occupy — its <Gold>bhūmis</Gold>. The path runs
      through the last two:
    </Body>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, margin: "8px 0 20px 0", maxWidth: 760 }}>
      {[
        ["Kṣipta", "disturbed, thrown about"],
        ["Mūḍha", "dull, stupefied"],
        ["Vikṣipta", "distracted — occasionally gathered"],
        ["Ekāgra", "one-pointed"],
        ["Niruddha", "restrained — vṛtti-less"],
      ].map(([n, g], idx) => (
        <div key={idx} style={{
          background: idx >= 3 ? C.goldSoft : C.mist,
          border: `1px solid ${idx >= 3 ? C.gold : C.line}`, borderRadius: 8, padding: "12px 14px",
        }}>
          <div className="sm-display" style={{ fontSize: 19, color: idx >= 3 ? C.gold : C.parchment }}>{n}</div>
          <div className="sm-body" style={{ fontSize: 12, color: C.dim, marginTop: 3, lineHeight: 1.5 }}>{g}</div>
        </div>
      ))}
    </div>
    <Body>
      The question this presentation asks: what <em>is</em> that movement, from dispersed to one-pointed to
      still — described precisely? Our earlier inquiry gives the tool. A vṛtti is a
      <Light> temporal event</Light>; the settled mind approaches the <Light>spectral pole</Light>.
      The whole discipline of saṁyama is an <Gold>inverse transform</Gold>.
    </Body>
  </div>
);

const SlideDualIdea = () => (
  <div className="sm-fade">
    <Eyebrow>02 · Two Ways to See One Mind</Eyebrow>
    <SlideTitle>The waveform and the spectrum</SlideTitle>
    <Body>
      Any signal can be described two ways, equally completely: as a <Light>waveform in time</Light> (what
      happens, moment to moment) and as a <Light>spectrum of frequencies</Light> (what steady tones compose
      it). They are bound by an uncertainty principle — and the two poles are exact opposites:
    </Body>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, margin: "6px 0 20px 0" }}>
      <Card>
        <div className="sm-display" style={{ fontSize: 22, color: C.parchment, marginBottom: 6 }}>The temporal pole</div>
        <p className="sm-body" style={{ fontSize: 13.5, color: C.dim, lineHeight: 1.7, margin: 0 }}>
          A sharp, momentary event — a single vṛtti. To build something so localized in time requires
          <Light> many frequencies at once</Light>. The dispersed mind lives here: countless brief whirls,
          spread across the whole spectrum. <Gold>Busy in time, scattered in frequency.</Gold>
        </p>
      </Card>
      <Card>
        <div className="sm-display" style={{ fontSize: 22, color: C.parchment, marginBottom: 6 }}>The spectral pole</div>
        <p className="sm-body" style={{ fontSize: 13.5, color: C.dim, lineHeight: 1.7, margin: 0 }}>
          A pure single frequency — unchanging, spanning all time without beginning or end. It has
          <Light> no temporal "shape" </Light>to point to. The settled mind approaches this:
          one steady tone. <Gold>Still in time, single in frequency.</Gold>
        </p>
      </Card>
    </div>
    <PlainWords>
      If you have ever sat in a bhajan hall, you already know both poles by ear. A <Light>tablā
      stroke</Light> is a temporal event: sharp, located, gone. The <Light>tanpurā drone</Light> is a
      spectral being: one unbroken tone that seems to come from nowhere and never moves. Every moment of
      your mental life is woven of both kinds — events that pass, and a steadiness they pass within.
    </PlainWords>
    <Body style={{ marginTop: 16 }}>
      So the arc of meditation has a precise signal-shape: <Gold>move the mind from the temporal pole toward
      the spectral pole</Gold> — from many scattered whirls toward one pure, unbroken tone. But before we
      walk that path, we must meet the law that governs it — because the two poles cannot be held at once,
      and that impossibility is the deepest reason the path works.
    </Body>
  </div>
);

/* ---------- The Gabor limit explorer ---------- */
function GaborCanvas({ sigma, height = 130 }) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    const w = cv.clientWidth || 320, h = height;
    cv.width = w * dpr; cv.height = h * dpr;
    const ctx = cv.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const mid = h / 2, s = sigma * w * 0.5, freq = 20;
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const g = Math.exp(-((x - w / 2) ** 2) / (2 * s * s));
      const y = mid - g * (h * 0.4);
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    for (let x = w; x >= 0; x--) {
      const g = Math.exp(-((x - w / 2) ** 2) / (2 * s * s));
      ctx.lineTo(x, mid + g * (h * 0.4));
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(227,180,88,0.06)";
    ctx.fill();
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const g = Math.exp(-((x - w / 2) ** 2) / (2 * s * s));
      const y = mid - Math.sin((x / w) * Math.PI * 2 * freq) * g * (h * 0.4);
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = C.gold; ctx.lineWidth = 1.6; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(w, mid);
    ctx.strokeStyle = "rgba(154,161,181,0.18)"; ctx.lineWidth = 1; ctx.stroke();
  }, [sigma, height]);
  return <canvas ref={ref} style={{ width: "100%", height, display: "block" }} aria-hidden="true" />;
}

const SlideGabor = () => {
  const [s, setS] = useState(0.35);
  const dt = s;
  const df = Math.min(1, 0.0625 / s);
  const label =
    s < 0.12 ? "Sharp in time, spread in frequency — the mode of the momentary event." :
    s > 0.8 ? "Spread in time, sharp in frequency — the mode of the changeless tone." :
    "Between the poles: every gain on one side is paid for on the other.";
  return (
    <div className="sm-fade">
      <Eyebrow>03 · The Law of the Trade-off</Eyebrow>
      <SlideTitle>The Gabor limit — why you cannot have both</SlideTitle>
      <Body>
        In 1946 the physicist <Light>Dennis Gabor</Light> proved something remarkable about every possible
        signal: sharpness in time and sharpness in frequency <Gold>cannot both be had</Gold>. Formally,
        <Gold> Δt · Δf ≥ 1/4π</Gold>. Localize an event more precisely in time, and its frequency content
        necessarily spreads; define a tone more purely in frequency, and it must extend longer in time.
        This is not a limitation of our instruments — it is the geometry of the two descriptions themselves.
        (The following year, Gabor invented <Light>holography</Light>, the physics at the heart of our
        companion presentation. Both decks descend from one mind.)
      </Body>
      <Card style={{ maxWidth: 760 }}>
        <GaborCanvas sigma={s} />
        <input type="range" min={0.06} max={1} step={0.01} value={s}
          onChange={(e) => setS(parseFloat(e.target.value))}
          style={{ width: "100%", marginTop: 14 }}
          aria-label="Move the wave packet along the time-frequency trade-off" />
        <div className="sm-body" style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: C.dim, marginTop: 6 }}>
          <span>← the momentary event</span><span>the changeless tone →</span>
        </div>
        <div style={{ marginTop: 16 }}>
          <div className="sm-body" style={{ fontSize: 11.5, color: C.dim, marginBottom: 3 }}>Δt — spread in time</div>
          <div style={{ height: 10, borderRadius: 5, background: C.line }}>
            <div style={{ height: 10, borderRadius: 5, width: `${Math.max(4, dt * 100)}%`, background: C.gold, transition: "width 0.15s ease" }} />
          </div>
          <div className="sm-body" style={{ fontSize: 11.5, color: C.dim, margin: "10px 0 3px 0" }}>Δf — spread in frequency</div>
          <div style={{ height: 10, borderRadius: 5, background: C.line }}>
            <div style={{ height: 10, borderRadius: 5, width: `${Math.max(4, df * 100)}%`, background: C.cyan, transition: "width 0.15s ease" }} />
          </div>
        </div>
        <p className="sm-body" style={{ fontSize: 13, color: C.parchment, marginTop: 14, marginBottom: 0, lineHeight: 1.65 }}>
          {label} The product Δt · Δf never falls below the limit — and the smooth Gaussian packet shown here
          is the unique shape that holds it <em>exactly</em>. Gabor called these minimal packets
          <Gold> "logons"</Gold>: nature's own quanta of information.
        </p>
      </Card>
      <PlainWords>
        You cannot fully count the drumbeats and fully rest in the drone in the same act of attention.
        To know the changeless, the mind must loosen its grip on the momentary — not because tradition
        commands it, but because the mathematics of attention-as-signal permits nothing else.
      </PlainWords>
    </div>
  );
};

/* ---------- Aparā and Parā vidyā ---------- */
const SlideVidya = () => (
  <div className="sm-fade">
    <Eyebrow>04 · The Upaniṣadic Frame</Eyebrow>
    <SlideTitle>Two knowledges: aparā and parā</SlideTitle>
    <Body>
      The Muṇḍaka Upaniṣad (1.1.4–5) opens with a student asking: what is that, by knowing which, all this
      is known? The teacher's answer begins with a distinction — <Gold>dve vidye</Gold>, two knowledges are
      to be known: <Light>aparā</Light>, the lower, and <Light>parā</Light>, the higher, that by which the
      Imperishable (akṣara) is attained.
    </Body>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, margin: "6px 0 18px 0" }}>
      <Card>
        <div className="sm-display" style={{ fontSize: 22, color: C.parchment, marginBottom: 6 }}>Aparā vidyā — the temporal mode</div>
        <p className="sm-body" style={{ fontSize: 13.5, color: C.dim, lineHeight: 1.7, margin: 0 }}>
          Knowledge <em>of the many</em>: sciences, arts, skills, texts — everything learned by observing
          what changes. The Upaniṣad places even the Vedas, as recited texts, here. Indispensable, honourable
          — and structurally bound to the <Gold>temporal pole</Gold>: it knows by tracking events,
          differences, particulars.
        </p>
      </Card>
      <Card>
        <div className="sm-display" style={{ fontSize: 22, color: C.parchment, marginBottom: 6 }}>Parā vidyā — the spectral mode</div>
        <p className="sm-body" style={{ fontSize: 13.5, color: C.dim, lineHeight: 1.7, margin: 0 }}>
          Knowing turned toward <em>what does not change</em>. It is not gained by adding information but
          by <Gold>settling</Gold> — the mind relinquishing its grip on the momentary until the changeless
          stands revealed. Its direction is the <Gold>spectral pole</Gold>; its fulfilment, as we will see,
          lies even beyond it.
        </p>
      </Card>
    </div>
    <div style={{ maxWidth: 760 }}>
      <SpectrumBar labels={["parā · knowing the changeless", "aparā · knowing the changing"]} />
    </div>
    <Body style={{ marginTop: 18 }}>
      Here is what the Gabor limit contributes, and it is the hinge of this whole presentation: the two
      knowledges are <Gold>conjugate</Gold>. A mind maximally engaged with temporal particulars cannot, in
      the same act, rest in the changeless — not from weakness of will, but by the same law that binds every
      signal. The two modes trade off <Light>exactly</Light>. This transforms how we read meditation:
      saṁyama is not a withdrawal from knowledge but <Gold>a deliberate movement along the trade-off</Gold> —
      spending temporal sharpness to purchase spectral purity, step by step: dhāraṇā, dhyāna, samādhi.
    </Body>
    <Body style={{ fontSize: 13.5 }}>
      One refinement to hold: strictly, even the purest tone is still an object of knowledge — still aparā's
      outermost refinement. Parā vidyā <em>completes</em> only when the last tone is recognised as the medium
      it was always sounding in. That final step is where this presentation ends, at nirodha.
    </Body>
  </div>
);

/* ---------- The Ritam Mind Wave Equation ---------- */
const EQ_TERMS = [
  { sym: "ψₓ(t)", name: "the object-wave", gloss: "What is actually present in the world — the external signal with its own intrinsic frequency fₛ, before any mental engagement. The one factor you cannot directly change." },
  { sym: "∗ h(t)", name: "the saṁskāric filter", gloss: "Chitta's impulse response. Convolution (∗) means every arrival is reshaped by the echo of every arrival before it. Conditioning pre-shapes what a moment is allowed to look like." },
  { sym: "G(t)", name: "the gain", gloss: "Attention's intensity of engagement, modulated through the body — breath, arousal, posture. The most clinically accessible component of the equation." },
  { sym: "ψₘ(t)", name: "the attention wave", gloss: "Manas's tuning: the frequency fₘ of attention's engagement, and a phase carrying the standing tilt Δφ — ahaṁkāra brought to the meeting, not produced by it." },
  { sym: "n(t)", name: "the noise floor", gloss: "Drift from Ritam (anṛta) at the spectral level. When the system is well-fitted, n(t) is small and experience is signal-dominated; when misfitted, it grows." },
  { sym: "ψexp(t)", name: "the lived moment", gloss: "What you actually live through — the resultant of the meeting, plus noise: one vṛtti with a content layer (carrier) and a clarity layer (envelope)." },
  { sym: "R(t)", name: "the resultant — the vṛtti", gloss: "The whole wave-form that arises when knower and known meet. Patañjali's citta-vṛtti is exactly this: a wave of the mind-field. Nothing new is created in the meeting — the two waves remain fully themselves, and the felt structure is the pattern of their togetherness." },
  { sym: "carrier", name: "the content layer", gloss: "The fast oscillation at the mean frequency (fₛ + fₘ)/2. The content of every experience is jointly authored — never the object alone, never the mind alone, but their meeting point. As fₘ tunes toward fₛ, the content becomes progressively truer to what is actually there." },
  { sym: "envelope", name: "the clarity layer", gloss: "The slow modulation whose felt beat runs at |fₛ − fₘ| — the felt flicker of duality, subject and object not-quite-aligned. Large Δf: rapid beat, friction, effort. Small Δf: soft slow swell, flow. Δf = 0: constant fullness. Citta-vṛtti-nirodha is the stilling of exactly this fluctuation." },
  { sym: "Δφ", name: "the standing tilt — ahaṁkāra", gloss: "Not produced by the meeting but brought to it: the habitual posture of 'I and mine' the attention wave carries into every encounter. It scales the resultant's fullness by cos(Δφ/2) — the larger the tilt of self-reference, the less of the world is allowed to arrive." },
];

function decompRow(ctx, w, h, mode) {
  const mid = h / 2, amp = h * 0.38;
  const fbeat = 1.5, fcarr = 14;
  ctx.clearRect(0, 0, w, h);
  ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(w, mid);
  ctx.strokeStyle = "rgba(154,161,181,0.15)"; ctx.lineWidth = 1; ctx.stroke();
  if (mode === "resultant") {
    // envelope fill + dashed outline
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const nx = x / w;
      const env = Math.abs(Math.cos(Math.PI * fbeat * nx)) * amp;
      x === 0 ? ctx.moveTo(x, mid - env) : ctx.lineTo(x, mid - env);
    }
    for (let x = w; x >= 0; x--) {
      const nx = x / w;
      const env = Math.abs(Math.cos(Math.PI * fbeat * nx)) * amp;
      ctx.lineTo(x, mid + env);
    }
    ctx.closePath(); ctx.fillStyle = "rgba(227,180,88,0.07)"; ctx.fill();
    ctx.setLineDash([5, 4]);
    [1, -1].forEach(sign => {
      ctx.beginPath();
      for (let x = 0; x <= w; x++) {
        const nx = x / w;
        const env = Math.abs(Math.cos(Math.PI * fbeat * nx)) * amp;
        const y = mid - sign * env;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(227,180,88,0.65)"; ctx.lineWidth = 1.1; ctx.stroke();
    });
    ctx.setLineDash([]);
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const nx = x / w;
      const env = Math.abs(Math.cos(Math.PI * fbeat * nx));
      const y = mid - Math.cos(2 * Math.PI * fcarr * nx) * env * amp;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#E3B458"; ctx.lineWidth = 1.6; ctx.stroke();
  } else if (mode === "envelope") {
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const nx = x / w;
      const y = mid - Math.abs(Math.cos(Math.PI * fbeat * nx)) * amp;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#E3B458"; ctx.lineWidth = 1.6; ctx.stroke();
    // mirrored, faint
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const nx = x / w;
      const y = mid + Math.abs(Math.cos(Math.PI * fbeat * nx)) * amp;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(227,180,88,0.35)"; ctx.lineWidth = 1.1; ctx.stroke();
  } else {
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const nx = x / w;
      const y = mid - Math.cos(2 * Math.PI * fcarr * nx) * amp;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(232,227,213,0.9)"; ctx.lineWidth = 1.3; ctx.stroke();
  }
}

function DecompRow({ mode, height = 76 }) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    const w = cv.clientWidth || 320, h = height;
    cv.width = w * dpr; cv.height = h * dpr;
    const ctx = cv.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    decompRow(ctx, w, h, mode);
  }, [mode, height]);
  return <canvas ref={ref} style={{ width: "100%", height, display: "block" }} aria-hidden="true" />;
}

const SlideEquation = () => {
  const [sel, setSel] = useState(null);
  return (
    <div className="sm-fade">
      <Eyebrow>05 · The Course's Own Instrument</Eyebrow>
      <SlideTitle>The Ritam Mind Wave Equation</SlideTitle>
      <Body>
        Modules 3 and 4 of this course develop a precise instrument for reading any moment of mental
        life — the <Gold>Ritam Mind Wave Equation</Gold>, developed by Swami Tadananda at the Ramakrishna
        Vedanta Centre, New Zealand, as the centrepiece of the Ritam Wellbeing Framework. It has two
        sides: the <Light>inputs that meet</Light>, and the <Light>resultant their meeting forms</Light>.
      </Body>
      <PlainWords>
        Don't let the symbols intimidate you — the equation says something you already know: what you
        experience is never the world by itself. It is the world (ψₓ), coloured by your past (h), met by
        your attention (ψₘ) at whatever intensity your body allows (G), with some static (n) on the line.
        The mathematics simply makes each of these ingredients precise enough to work with.
      </PlainWords>

      <div className="sm-body" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: C.dim, margin: "6px 0 6px 0" }}>
        The inputs — two waves meeting in one field
      </div>
      <Card style={{ maxWidth: 760, textAlign: "center", padding: "20px 18px" }}>
        <div className="sm-display" style={{ fontSize: "clamp(17px, 3vw, 25px)", color: C.parchment, letterSpacing: "0.02em" }}>
          ψ<sub style={{ fontSize: "0.6em" }}>exp</sub>(t) = [ψₓ(t) ∗ h(t)] + G(t) · ψₘ(t) + n(t)
        </div>
        <div className="sm-body" style={{ fontSize: 12, color: C.dim, marginTop: 8 }}>
          the conditioned object-wave S(t), meeting the attention wave A(t), with noise
        </div>
      </Card>

      <div className="sm-body" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: C.dim, margin: "18px 0 6px 0" }}>
        The output — one resultant, two nested layers (equal-amplitude teaching case)
      </div>
      <Card style={{ maxWidth: 760, padding: "20px 18px" }}>
        <div className="sm-display" style={{ fontSize: "clamp(14px, 2.5vw, 21px)", color: C.parchment, textAlign: "center", letterSpacing: "0.02em", marginBottom: 16 }}>
          R(t) = 2A · <span style={{ color: C.gold }}>cos(2π·(fₛ − fₘ)/2·t)</span> · <span style={{ color: C.parchment }}>cos(2π·(fₛ + fₘ)/2·t)</span>
        </div>

        <div className="sm-body" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 12, marginBottom: 2, gap: 8, flexWrap: "wrap" }}>
          <span style={{ color: C.parchment, fontWeight: 500 }}>R(t) — the resultant: the vṛtti</span>
          <span style={{ color: C.dim }}>the whole wave-form of the meeting</span>
        </div>
        <DecompRow mode="resultant" height={86} />

        <div className="sm-display" style={{ textAlign: "center", color: C.dim, fontSize: 18, margin: "6px 0", fontStyle: "italic" }}>=</div>

        <div className="sm-body" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 12, marginBottom: 2, gap: 8, flexWrap: "wrap" }}>
          <span style={{ color: C.gold, fontWeight: 500 }}>envelope — the clarity layer</span>
          <span style={{ color: C.dim }}>beat felt at |fₛ − fₘ| · the flicker of duality</span>
        </div>
        <DecompRow mode="envelope" height={64} />

        <div className="sm-display" style={{ textAlign: "center", color: C.dim, fontSize: 18, margin: "6px 0", fontStyle: "italic" }}>×</div>

        <div className="sm-body" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 12, marginBottom: 2, gap: 8, flexWrap: "wrap" }}>
          <span style={{ color: C.parchment, fontWeight: 500 }}>carrier — the content layer</span>
          <span style={{ color: C.dim }}>at the mean frequency (fₛ + fₘ)/2 · jointly authored</span>
        </div>
        <DecompRow mode="carrier" height={64} />
      </Card>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "18px 0 14px 0", maxWidth: 760 }}>
        {EQ_TERMS.map((t, i) => (
          <button key={i} onClick={() => setSel(sel === i ? null : i)}
            className="sm-body"
            style={{
              background: sel === i ? C.goldSoft : "transparent",
              border: `1px solid ${sel === i ? C.gold : C.line}`,
              color: sel === i ? C.parchment : C.dim,
              padding: "8px 16px", borderRadius: 22, fontSize: 13.5, cursor: "pointer",
              transition: "all 0.2s ease",
            }}>{t.sym}</button>
        ))}
      </div>
      <Card style={{ maxWidth: 760, minHeight: 96 }}>
        {sel === null ? (
          <p className="sm-body" style={{ fontSize: 13.5, color: C.dim, margin: 0, lineHeight: 1.7 }}>
            Tap any term to read it. The resultant R(t) as a whole is <Light>the vṛtti</Light>: not a
            layer of the experience but the entire wave-form of the meeting. Its two layers are the two
            dimensions you can feel in any mental event — <Gold>what it is about</Gold> (the carrier)
            and <Gold>how clearly it is being met</Gold> (the envelope). These two layers are the thread
            we follow through every stage of saṁyama in the slides ahead.
          </p>
        ) : (
          <div>
            <div className="sm-display" style={{ fontSize: 22, color: C.gold, marginBottom: 6 }}>
              {EQ_TERMS[sel].sym} — {EQ_TERMS[sel].name}
            </div>
            <p className="sm-body" style={{ fontSize: 13.5, color: C.dim, margin: 0, lineHeight: 1.7 }}>{EQ_TERMS[sel].gloss}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

/* ---------- The Beat of Duality explorer ---------- */
function BeatCanvas({ df, dphi, height = 150 }) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    const w = cv.clientWidth || 320, h = height;
    cv.width = w * dpr; cv.height = h * dpr;
    const ctx = cv.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const mid = h / 2;
    const fs = 11; // object-wave cycles across width
    const fm = fs - df; // attention wave frequency
    const amp = h * 0.22;

    // envelope: 2|cos(π·Δf·x − Δφ/2)| scaled
    if (df > 0.001 || dphi > 0.001) {
      ctx.beginPath();
      for (let x = 0; x <= w; x++) {
        const nx = x / w;
        const env = 2 * Math.abs(Math.cos(Math.PI * df * nx * 6 - dphi / 2)) * amp;
        const y = mid - env;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      for (let x = w; x >= 0; x--) {
        const nx = x / w;
        const env = 2 * Math.abs(Math.cos(Math.PI * df * nx * 6 - dphi / 2)) * amp;
        ctx.lineTo(x, mid + env);
      }
      ctx.closePath();
      ctx.fillStyle = "rgba(227,180,88,0.07)";
      ctx.fill();
    }

    // faint component waves
    ctx.globalAlpha = 0.28;
    [["rgba(142,124,243,1)", fs, 0], ["rgba(91,200,221,1)", fm, dphi]].forEach(([col, f, ph]) => {
      ctx.beginPath();
      for (let x = 0; x <= w; x++) {
        const nx = x / w;
        const y = mid - Math.cos(2 * Math.PI * f * nx * 0.6 + ph) * amp;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.stroke();
    });
    ctx.globalAlpha = 1;

    // resultant R = sum
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const nx = x / w;
      const y = mid - (Math.cos(2 * Math.PI * fs * nx * 0.6) + Math.cos(2 * Math.PI * fm * nx * 0.6 + dphi)) * amp;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = C.gold; ctx.lineWidth = 1.7; ctx.stroke();

    // midline
    ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(w, mid);
    ctx.strokeStyle = "rgba(154,161,181,0.15)"; ctx.lineWidth = 1; ctx.stroke();
  }, [df, dphi, height]);
  return <canvas ref={ref} style={{ width: "100%", height, display: "block" }} aria-hidden="true" />;
}

const SlideBeat = () => {
  const [df, setDf] = useState(1.6);   // Δf, in canvas units
  const [dphi, setDphi] = useState(1.0); // Δφ, radians
  const resonant = df < 0.06 && dphi < 0.08;
  const fullness = Math.cos(dphi / 2);
  const feltDf =
    df > 1.2 ? "rapid beat — friction, mismatch, effort" :
    df > 0.4 ? "slowing beat — steadying, warming" :
    df > 0.06 ? "soft slow swell — flow, intimacy with the object" :
    "no beat — constant fullness";
  return (
    <div className="sm-fade">
      <Eyebrow>10 · The Last Distance — tune the meeting</Eyebrow>
      <SlideTitle size={38}>The beat of duality, and its cessation</SlideTitle>
      <Body>
        Two waves — the conditioned object-wave (violet) and the attention wave (cyan) — superpose into
        one golden resultant: <Light>the vṛtti</Light>. Its envelope beats at <Gold>|fₛ − fₘ|</Gold>:
        the felt flicker of subject-and-object not-quite-aligned. Dhyāna closes Δf. What remains is the
        standing tilt Δφ — <Light>ahaṁkāra</Light>, the posture of "I and mine" brought to every meeting,
        which scales the fullness by <Gold>cos(Δφ/2)</Gold>. Close both, and watch what happens.
      </Body>
      <Card style={{ maxWidth: 760 }}>
        <BeatCanvas df={df} dphi={dphi} />
        <div style={{ marginTop: 14 }}>
          <div className="sm-body" style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: C.dim }}>
            <span>Δf — the tuning gap (dhāraṇā → dhyāna closes this)</span>
            <span>{feltDf}</span>
          </div>
          <input type="range" min={0} max={2.4} step={0.01} value={df}
            onChange={(e) => setDf(parseFloat(e.target.value))}
            style={{ width: "100%", marginTop: 4 }} aria-label="Tuning gap between attention and object frequencies" />
        </div>
        <div style={{ marginTop: 10 }}>
          <div className="sm-body" style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: C.dim }}>
            <span>Δφ — the standing tilt of self-reference</span>
            <span>fullness × {fullness.toFixed(2)}</span>
          </div>
          <input type="range" min={0} max={2.4} step={0.01} value={dphi}
            onChange={(e) => setDphi(parseFloat(e.target.value))}
            style={{ width: "100%", marginTop: 4 }} aria-label="Standing phase tilt of the attention wave" />
        </div>
        <div style={{
          marginTop: 14, padding: "12px 16px", borderRadius: 8,
          background: resonant ? C.goldSoft : "transparent",
          border: `1px solid ${resonant ? C.gold : C.line}`,
          transition: "all 0.4s ease",
        }}>
          {resonant ? (
            <p className="sm-body" style={{ fontSize: 13.5, color: C.parchment, margin: 0, lineHeight: 1.7 }}>
              <span className="sm-display" style={{ color: C.gold, fontSize: 17 }}>R(t) = 2A · cos(2π fₛ t)</span><br />
              The beat has ceased. The envelope is constant fullness; the content runs at the object's own
              rhythm; the tilt is released, not destroyed. <Gold>No instrument can find two waves in the
              resultant anymore.</Gold> This is the mathematical structure of samādhi — the mind "as if
              empty of its own form, the object alone shining."
            </p>
          ) : (
            <p className="sm-body" style={{ fontSize: 13, color: C.dim, margin: 0, lineHeight: 1.7 }}>
              The two component waves remain fully themselves; the felt structure is the pattern of their
              togetherness. Bring both controls to zero to complete the meeting.
            </p>
          )}
        </div>
      </Card>
      <PlainWords>
        This is something you can literally hear. When two tanpurā strings are slightly out of tune, the
        air carries a slow wah–wah–wah — that <em>is</em> the beat, at exactly |f₁ − f₂|. A musician tunes
        by listening for it: as the strings approach unison the wah slows, softens, and finally vanishes
        into one steady tone. Samādhi, in this model, is the mind tuning itself the way a musician tunes
        a string — until the beat of duality disappears.
      </PlainWords>
      <Body style={{ marginTop: 16, fontSize: 14 }}>
        Notice how this completes the earlier slide. <Light>Continuity</Light> purifies each wave's own
        line; <Light>tuning</Light> brings the two lines together. Saṁyama does both — and citta-vṛtti-nirodha,
        in the equation's terms, is not the destruction of the resultant but <Gold>the settling of its
        clarity layer into constancy</Gold>.
      </Body>
    </div>
  );
};

const SlideTransformer = () => {
  const [i, setI] = useState(0);
  const s = STAGES[i];
  return (
    <div className="sm-fade">
      <Eyebrow>06 · The Transformation — step through it</Eyebrow>
      <SlideTitle size={38}>From the dispersed to the vṛtti-less</SlideTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
        <div>
          <DualView stage={s} tall />
          <input
            type="range" min={0} max={STAGES.length - 1} step={1} value={i}
            onChange={(e) => setI(parseInt(e.target.value))}
            style={{ width: "100%", marginTop: 18 }}
            aria-label="Step through the five stages of the settling mind"
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            {STAGES.map((st, idx) => (
              <button key={st.key} onClick={() => setI(idx)}
                className="sm-body"
                style={{
                  background: "transparent", border: "none", cursor: "pointer",
                  fontSize: 11, color: idx === i ? C.gold : C.dim,
                  fontWeight: idx === i ? 600 : 400, padding: "2px 4px",
                }}>
                {st.roman}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="sm-body" style={{ fontSize: 11.5, letterSpacing: "0.1em", color: C.dim, textTransform: "uppercase" }}>
            {s.bhumi}
          </div>
          <div className="sm-display" style={{ fontSize: 34, color: C.gold, margin: "4px 0 2px 0" }}>{s.roman}</div>
          <div className="sm-display" style={{ fontSize: 20, fontStyle: "italic", color: C.parchment, marginBottom: 12 }}>{s.en}</div>
          {s.sutra && (
            <div className="sm-body" style={{ fontSize: 12.5, color: C.gold, marginBottom: 12, letterSpacing: "0.03em" }}>{s.sutra}</div>
          )}
          <p className="sm-body" style={{ fontSize: 14.5, color: C.dim, lineHeight: 1.75, marginBottom: 14 }}>{s.gloss}</p>
          <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 12 }}>
            <p className="sm-body" style={{ fontSize: 13, color: C.parchment, lineHeight: 1.7, margin: 0 }}>{s.domainNote}</p>
            {s.rwf && (
              <p className="sm-body" style={{ fontSize: 12.5, color: C.gold, lineHeight: 1.7, margin: "10px 0 0 0" }}>{s.rwf}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SlideDharana = () => (
  <div className="sm-fade">
    <Eyebrow>07 · The First Stage</Eyebrow>
    <SlideTitle>Dhāraṇā — binding the mind to one place</SlideTitle>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, alignItems: "start" }}>
      <div>
        <Body>
          <Gold>deśa-bandhaś cittasya dhāraṇā</Gold> — dhāraṇā is the binding (bandha) of the citta to a
          single place (deśa). A breath, a mantra, a point of light. The practice is simple to state and hard
          to do: whenever the mind wanders, bring it back. Again. And again.
        </Body>
        <Body>
          Notice its defining feature: <Light>it is interrupted</Light>. The hold on the object keeps
          breaking; the return keeps being renewed. In signal terms this is a <Gold>gated tone</Gold> — a
          single frequency, yes, but chopped into fragments by the interruptions.
        </Body>
        <PlainWords>
          Teachers often compare it to training a puppy: you set it on the mat, it wanders, you bring it
          back — gently, without scolding, a thousand times. The bringing-back <em>is</em> the practice.
          Nothing has gone wrong when the mind wanders; wandering is simply where this stage begins.
        </PlainWords>
        <Body style={{ fontSize: 14 }}>
          And here is the exact, unforgiving mathematics: <Light>a chopped tone is not spectrally pure</Light>.
          Gating a frequency smears it across a band — the shorter and choppier the fragments, the broader the
          smear. This is why the dhāraṇā mind still feels noisy even while "concentrating": the interruptions
          themselves generate spectral spread.
        </Body>
        <Body style={{ fontSize: 13, color: C.gold }}>
          In the equation: Δf = |fₛ − fₘ| is still large, so the resultant's <Light>envelope</Light> beats
          rapidly — the felt friction of effortful contact — while the <Light>carrier</Light> still runs far
          from the object's own rhythm: the content is co-authored, but not yet true to what is there.
        </Body>
      </div>
      <DualView stage={STAGES[1]} tall />
    </div>
  </div>
);

const SlideHeart = () => {
  const [cont, setCont] = useState(0.35);
  // build a stage-like object whose spectral width shrinks with continuity
  const stage = {
    gated: cont < 0.6,
    coherence: 0.5 + 0.5 * cont,
    noise: 0.35 * (1 - cont),
    flat: false,
    peakH: 0.55 + 0.45 * cont,
    peakW: 0.16 * (1 - cont) + 0.014, // continuity → narrower line
    floor: 0.32 * (1 - cont),
    lumpy: cont < 0.7,
  };
  const label =
    cont > 0.82 ? "Unbroken. The line is nearly pure — this is dhyāna arriving." :
    cont < 0.25 ? "Choppy. Interruptions smear the tone across a wide band — this is effortful dhāraṇā." :
    "Steadying. As the breaks close, the spectral line narrows.";
  return (
    <div className="sm-fade">
      <Eyebrow>08 · The Heart of the Matter</Eyebrow>
      <SlideTitle size={40}>Continuity <span style={{ fontStyle: "italic" }}>is</span> purity</SlideTitle>
      <Body>
        The single most important idea in this whole inquiry, and it is exact, not poetic. The only difference
        between dhāraṇā and dhyāna is <Light>continuity</Light> — whether the hold on the object breaks. And
        by the mathematics of the transform, <Gold>unbroken duration is precisely what spectral purity
        requires</Gold>. Drag the control: close the interruptions, and watch the spectral line sharpen on its
        own.
      </Body>
      <Card style={{ maxWidth: 760 }}>
        <div className="sm-body" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: C.dim, marginBottom: 4 }}>
          Time domain
        </div>
        <Waveform stage={stage} height={110} />
        <div style={{ height: 1, background: C.line, margin: "12px 0" }} />
        <div className="sm-body" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: C.dim, marginBottom: 4 }}>
          Frequency domain
        </div>
        <Spectrum stage={stage} height={110} />
        <input type="range" min={0.05} max={1} step={0.01} value={cont}
          onChange={(e) => setCont(parseFloat(e.target.value))}
          style={{ width: "100%", marginTop: 16 }}
          aria-label="Increase continuity of attention" />
        <div className="sm-body" style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: C.dim, marginTop: 6 }}>
          <span>← interrupted · effortful</span>
          <span>unbroken · effortless →</span>
        </div>
        <p className="sm-body" style={{ fontSize: 13.5, color: C.parchment, marginTop: 14, marginBottom: 0, minHeight: 40, lineHeight: 1.6 }}>{label}</p>
      </Card>
      <Body style={{ marginTop: 20, fontSize: 14 }}>
        This reframes the whole effort of practice. You are not straining to <em>produce</em> a pure state.
        You are only <Light>closing the gaps</Light> — and purity is what a continuous signal already is.
      </Body>
    </div>
  );
};

const SlideDhyana = () => (
  <div className="sm-fade">
    <Eyebrow>09 · The Second Stage</Eyebrow>
    <SlideTitle>Dhyāna — the one continuous thread</SlideTitle>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, alignItems: "start" }}>
      <div>
        <Body>
          <Gold>tatra pratyaya-ekatānatā dhyānam</Gold> — there, in that same place, the unbroken flow of
          cognition is dhyāna. The key word is <Light>ekatānatā</Light>: literally "one-stretched-ness," a
          single thread pulled taut and continuous, like oil poured in an unbroken line.
        </Body>
        <Body>
          Dhāraṇā and dhyāna share the same object; only the continuity differs. But that difference is
          everything, because — as we just saw — continuity is what converts a smeared band into a
          <Gold> sharp spectral line</Gold>. The mind is now genuinely one-pointed: <Light>ekāgra</Light>.
          One tone, sustained.
        </Body>
        <Body style={{ fontSize: 13.5 }}>
          This is where the classical bhūmi and the signal picture meet exactly: ekāgra — one-pointed —
          <em> is</em> a spectrum with one point. The name was always describing the frequency domain.
        </Body>
        <Body style={{ fontSize: 13, color: C.gold }}>
          In the equation: as fₘ closes on fₛ, the <Light>envelope's</Light> beat slows and softens —
          friction becomes flow — and the <Light>carrier</Light> drifts toward the object's own frequency:
          the content of experience becomes progressively truer to what is actually there.
        </Body>
      </div>
      <DualView stage={STAGES[2]} tall />
    </div>
  </div>
);

const SlideSamadhi = () => (
  <div className="sm-fade">
    <Eyebrow>11 · The Third Stage</Eyebrow>
    <SlideTitle>Samādhi — only the object shines</SlideTitle>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, alignItems: "start" }}>
      <DualView stage={STAGES[3]} tall />
      <div>
        <Body>
          <Gold>tad eva-artha-mātra-nirbhāsaṁ svarūpa-śūnyam iva samādhiḥ</Gold> — when that same meditation
          shines forth as the <Light>object alone</Light>, as if empty of its own form, that is samādhi. The
          sense of "I am meditating," the act, the effort — all fall away. Only the object remains, luminous.
        </Body>
        <Body>
          The phrase <Light>svarūpa-śūnyam iva</Light>, "as if empty of its own form," is startlingly exact in
          the spectral picture. A perfectly pure frequency has <Gold>no temporal waveform to point to</Gold> —
          no shape, no beginning, no event. It is fully delocalized in time. It has, quite literally, become
          empty of the form a thing-in-time would have. It simply <em>is</em>, everywhere and unchanging.
        </Body>
        <Body>
          And the Ritam Mind Wave Equation says the same thing from the two-wave side: at full alignment
          (Δf = 0, Δφ = 0) the resultant is <Gold>R(t) = 2A·cos(2π fₛ t)</Gold> — a single wave at the
          <Light> object's own frequency</Light>, at full gathered amplitude. The attention wave's own form
          has vanished into the object's rhythm. "Empty of its own form" is not poetry here; it is what the
          mathematics of the resultant literally shows.
        </Body>
        <PlainWords>
          You have tasted the direction of this, even if not its depth. Absorbed in music, in a sunset, in
          work that takes you whole — afterwards you say "I lost myself in it." For those minutes there was
          no commentary, no watcher watching; there was only the music. Samādhi is that structure, carried
          to completion and made stable.
        </PlainWords>
        <Body style={{ fontSize: 13.5, marginTop: 16 }}>
          This is samādhi <Light>with seed</Light> (sabīja): pure, single, luminous — but still resting on one
          object. One line remains in the spectrum. There is one more step.
        </Body>
      </div>
    </div>
  </div>
);

const SlideSamyama = () => (
  <div className="sm-fade">
    <Eyebrow>12 · The Three as One</Eyebrow>
    <SlideTitle>Saṁyama, and the last step beyond the seed</SlideTitle>
    <Body>
      <Gold>trayam ekatra saṁyamaḥ</Gold> — the three together, upon one object, is saṁyama. Dhāraṇā, dhyāna,
      and samādhi are not three separate techniques but <Light>one continuous deepening</Light>, named at three
      depths. Seen as a transform, saṁyama is the complete journey from the temporal pole to the spectral pole,
      run on a single object until only its pure tone remains.
    </Body>
    <div style={{ maxWidth: 760, margin: "10px 0 18px 0" }}>
      {[
        ["Dhāraṇā", "binds the dispersed mind — Δf large, the envelope beats hard, the carrier far from the object's rhythm", "vikṣipta → gathering"],
        ["Dhyāna", "sustains the tuning unbroken — the beat slows, the carrier closes on fₛ", "ekāgra · one-pointed"],
        ["Samādhi", "Δf = 0, Δφ = 0 — the beat ceases; one wave at the object's own frequency, with seed", "sabīja"],
        ["Nirodha", "even the resultant subsides into the medium — seedless", "niruddha · nirbīja"],
      ].map(([n, g, tag], i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "13px 0", borderBottom: `1px solid ${C.line}` }}>
          <div className="sm-display" style={{ fontSize: 21, color: C.gold, minWidth: 96, fontStyle: "italic" }}>{n}</div>
          <div style={{ flex: 1 }}>
            <div className="sm-body" style={{ fontSize: 13.5, color: C.parchment, lineHeight: 1.6 }}>{g}</div>
          </div>
          <div className="sm-body" style={{ fontSize: 11, color: C.dim, letterSpacing: "0.06em", minWidth: 110, textAlign: "right" }}>{tag}</div>
        </div>
      ))}
    </div>
    <Body>
      The move from samādhi to nirodha is the move from <Gold>sabīja</Gold> (with seed) to <Gold>nirbīja</Gold>
      (seedless): from resting on one pure object to the subsiding of even that. The last vṛtti — the pure one —
      dissolves. What remains is not a finer object, but no object at all.
    </Body>
  </div>
);

const SlideNirodha = () => (
  <div className="sm-fade">
    <Eyebrow>13 · The Vṛtti-less Mind</Eyebrow>
    <SlideTitle>Nirodha — stillness that is not absence</SlideTitle>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, alignItems: "start" }}>
      <div>
        <Body>
          When even the single pure vṛtti subsides, the waveform goes flat and the spectrum falls silent. It is
          tempting to read this as blankness — a switched-off mind. The tradition insists otherwise, and this is
          the crucial point for a course on wellbeing: <Gold>nirodha is fullness, not vacancy</Gold>.
        </Body>
        <Body>
          In the signal, the oscillation ceases — but the <Light>medium that carried it remains</Light>, and
          remains luminous. The Ritam Mind Wave Equation makes this placement exact: the witness never
          appears as a term in the equation at all. It is the <Gold>medium of the whole equation</Gold> —
          the shared field whose existence is the very condition for the two waves to superpose. Experience
          appears <em>in</em> it, never <em>as</em> it; that is why it is unchanged by every change in mental
          life. In Kashmir Śaivism's language: <Gold>prakāśa without a single ripple of vimarśa's
          movement</Gold>. The light that was being modulated into every vṛtti is now simply itself, unmodulated.
          Not darkness — the ground of all the tones, resting as itself.
        </Body>
        <Body style={{ fontSize: 13.5 }}>
          This is why the deepest silence is called <Light>anāhata</Light> — "unstruck." Not the absence of
          sound, but sound's source, before any striking. The dispersed mind has become the still mind; the
          still mind has become the ground it always was.
        </Body>
      </div>
      <DualView stage={STAGES[4]} tall />
    </div>
    <HonestyNote>
      The Fourier correspondence is mathematically exact: closing the interruptions in a tone genuinely does
      narrow its spectral line — that part is signal processing, not metaphor. Meditation research is
      <em> suggestive</em> here too: focused practice is associated with greater synchronization and coherence
      of neural rhythms. But that the mind literally <em>is</em> a signal being transformed remains a model, and
      the deepest, seedless state lies beyond what current neuroscience can map. As before: a pure frequency
      shares timelessness with the witness, yet a frequency is still describable, still jaḍa. The mathematics
      illuminates the <em>shape</em> of the path; it does not, by itself, prove what rests at its end.
    </HonestyNote>
  </div>
);

const SlideClose = () => (
  <div className="sm-fade">
    <Eyebrow>14 · The Path, Entire</Eyebrow>
    <SlideTitle>One movement, precisely described</SlideTitle>
    <div style={{ maxWidth: 780 }}>
      <SpectrumBar labels={["spectral pole · the one pure tone → the ground", "temporal pole · the dispersed mind"]} />
      <div style={{ marginTop: 24 }}>
        {[
          ["The dispersed mind is broadband", "Countless brief vṛttis, spread across every frequency — busy in time, scattered in spectrum. This is where practice begins."],
          ["The Gabor limit makes the path lawful", "Δt · Δf ≥ 1/4π: sharpness in time and sharpness in frequency cannot both be had. Aparā vidyā (knowing the changing) and parā vidyā (knowing the changeless) are conjugate modes — meditation is deliberate movement along the trade-off."],
          ["Dhāraṇā gathers; dhyāna sustains", "Binding to one object narrows the band; making the hold unbroken sharpens it to a line. Continuity is the whole secret — and continuity is purity."],
          ["The equation names the mechanism", "Experience is two waves superposing: ψexp = [ψₓ ∗ h(t)] + G(t)·ψₘ(t) + n(t). The beat at |fₛ − fₘ| is the felt flicker of duality; the carrier is the co-created content; Δφ is the standing tilt of self-reference."],
          ["Samādhi is the completed meeting", "Δf = 0, Δφ = 0 → R(t) = 2A·cos(2π fₛ t): one wave at the object's own frequency, at full gathered amplitude. 'Empty of its own form' — the attention wave's form has vanished into the object's rhythm. No instrument can find two waves anymore."],
          ["Nirodha is the medium", "Even the single resultant subsides. The witness was never a term in the equation — it is the field both waves arose in. Sabīja gives way to nirbīja; the involution beyond (9 → 0) is what the equation was always pointing toward."],
          ["The path is an inverse transform", "The whole of saṁyama moves the mind from the temporal pole toward the spectral — closing the gaps, closing the tuning, releasing the tilt — and then beyond the last tone into what was carrying it all along."],
        ].map(([t, g], i) => (
          <div key={i} style={{ display: "flex", gap: 18, padding: "15px 0", borderBottom: `1px solid ${C.line}` }}>
            <div className="sm-display" style={{ fontSize: 20, color: C.gold, minWidth: 34, fontStyle: "italic" }}>{["i", "ii", "iii", "iv", "v", "vi", "vii"][i]}</div>
            <div>
              <div className="sm-body" style={{ fontSize: 15, color: C.parchment, fontWeight: 500, marginBottom: 4 }}>{t}</div>
              <div className="sm-body" style={{ fontSize: 13.5, color: C.dim, lineHeight: 1.7 }}>{g}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="sm-body" style={{ fontSize: 12.5, color: C.dim, marginTop: 22, lineHeight: 1.7 }}>
        <span style={{ color: C.gold }}>For practice:</span> the reframing is gentle and usable — you are not
        forcing a special state, only closing the gaps in attention. Purity is what a continuous, unhurried
        signal already is.
        <br /><br />
        Companion to <em>The Light &amp; the Field</em>. The Ritam Mind Wave Equation is the original
        contribution of Swami Tadananda, Ramakrishna Vedanta Centre, New Zealand, developed in Modules 3–4
        of <em>The Mind in the Light of Modern and Spiritual Sciences</em> under the Ritam Wellbeing
        Framework. Correspondences here are structural and, where noted, mathematically exact; neuroscientific
        parallels are suggestive, not conclusive; the nature of the ground that remains is a matter the
        mathematics frames but does not settle.
      </p>
    </div>
  </div>
);

/* ============================================================
   SHELL
   ============================================================ */
const SLIDES = [
  { id: "cover", label: "The Settling Mind", el: SlideCover },
  { id: "problem", label: "The Starting Condition", el: SlideProblem },
  { id: "dual", label: "Two Ways to See One Mind", el: SlideDualIdea },
  { id: "gabor", label: "The Gabor Limit", el: SlideGabor },
  { id: "vidya", label: "Aparā and Parā Vidyā", el: SlideVidya },
  { id: "equation", label: "The Ritam Mind Wave Equation", el: SlideEquation },
  { id: "transform", label: "The Transformation", el: SlideTransformer },
  { id: "dharana", label: "Dhāraṇā", el: SlideDharana },
  { id: "heart", label: "Continuity is Purity", el: SlideHeart },
  { id: "dhyana", label: "Dhyāna", el: SlideDhyana },
  { id: "beat", label: "The Beat of Duality", el: SlideBeat },
  { id: "samadhi", label: "Samādhi", el: SlideSamadhi },
  { id: "samyama", label: "Saṁyama", el: SlideSamyama },
  { id: "nirodha", label: "Nirodha", el: SlideNirodha },
  { id: "close", label: "The Path, Entire", el: SlideClose },
];

export default function TheSettlingMind() {
  const [idx, setIdx] = useState(0);
  const go = useCallback((d) => setIdx(i => Math.min(SLIDES.length - 1, Math.max(0, i + d))), []);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);
  const Slide = SLIDES[idx].el;
  return (
    <div className="sm-body" style={{
      minHeight: "100vh", background: C.ink, color: C.parchment,
      display: "flex", flexDirection: "column",
      backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(142,124,243,0.07), transparent),
                        radial-gradient(ellipse 60% 40% at 80% 110%, rgba(227,180,88,0.05), transparent)`,
    }}>
      <FontStyles />
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 28px", borderBottom: `1px solid ${C.line}` }}>
        <div className="sm-display" style={{ fontSize: 17, fontStyle: "italic", color: C.gold }}>The Settling Mind</div>
        <div className="sm-body" style={{ fontSize: 11.5, color: C.dim, letterSpacing: "0.1em" }}>
          {String(idx + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")} · {SLIDES[idx].label}
        </div>
      </header>
      <main style={{ flex: 1, display: "flex", alignItems: "center", padding: "40px 28px", overflowY: "auto" }}>
        <div key={idx} style={{ width: "100%", maxWidth: 940, margin: "0 auto" }}>
          <Slide />
        </div>
      </main>
      <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 28px", borderTop: `1px solid ${C.line}`, gap: 16 }}>
        <button onClick={() => go(-1)} disabled={idx === 0} className="sm-body"
          style={{ background: "transparent", border: `1px solid ${idx === 0 ? C.line : C.gold}`, color: idx === 0 ? C.dim : C.gold, opacity: idx === 0 ? 0.4 : 1, padding: "9px 22px", borderRadius: 24, fontSize: 13, cursor: idx === 0 ? "default" : "pointer", letterSpacing: "0.04em" }}>← Previous</button>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap", justifyContent: "center" }}>
          {SLIDES.map((s, i) => (
            <button key={s.id} onClick={() => setIdx(i)} aria-label={s.label} className="sm-navdot"
              style={{ width: i === idx ? 26 : 8, height: 8, borderRadius: 4, border: "none", background: i === idx ? C.gold : C.line, padding: 0 }} />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={idx === SLIDES.length - 1} className="sm-body"
          style={{ background: idx === SLIDES.length - 1 ? "transparent" : C.gold, border: `1px solid ${idx === SLIDES.length - 1 ? C.line : C.gold}`, color: idx === SLIDES.length - 1 ? C.dim : C.ink, opacity: idx === SLIDES.length - 1 ? 0.4 : 1, padding: "9px 22px", borderRadius: 24, fontSize: 13, fontWeight: 500, cursor: idx === SLIDES.length - 1 ? "default" : "pointer", letterSpacing: "0.04em" }}>Next →</button>
      </footer>
    </div>
  );
}
