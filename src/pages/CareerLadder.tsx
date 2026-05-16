import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { worklifeExpData } from "../Data/worklifeData";
import { MdDeveloperMode, MdOutlineLocalBar } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { PiChefHatLight } from "react-icons/pi";
import { BsMailbox2Flag } from "react-icons/bs";
import type { IconType } from "react-icons";
import "../styles/CareerLadder.css";

/* ─── Date helpers ─────────────────────────────────────────────────── */

const MONTH: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  Maj: 4, // Swedish
};

function parseDate(s: string): { y: number; m: number } {
  s = s.trim();
  if (s === "Present" || s === "Nu") return { y: 2026, m: 4 }; // May 2026
  const [mon, yr] = s.split(" ");
  return { y: +yr, m: MONTH[mon] ?? 0 };
}

function parsePeriod(period: string) {
  const segs = period.split(",").map((seg) => {
    const [a, b] = seg.split("–").map((x) => x.trim());
    return { start: parseDate(a), end: parseDate(b ?? a) };
  });
  return {
    earliest: segs[0].start,
    latest: segs[segs.length - 1].end,
    segs,
  };
}

/* ─── Timeline geometry ────────────────────────────────────────────── */

const TOP_Y  = 2026 + 5 / 12 + 0.28; // just above Present (May 2026)
const BOT_Y  = 2013 + 8 / 12;        // just below Apr 2014
const PPY    = 155;                   // pixels per year
const PAD_T  = 80;                    // top/bottom padding
const TOTAL_H = (TOP_Y - BOT_Y) * PPY + PAD_T * 2;

const toY = (y: number, m: number) =>
  PAD_T + (TOP_Y - (y + m / 12)) * PPY;

const YEARS = Array.from({ length: 13 }, (_, i) => 2026 - i); // 2026 → 2014

/* ─── Per-job colour + icon ────────────────────────────────────────── */

const META: { color: string; Icon: IconType }[] = [
  { color: "#9cf5be", Icon: MdDeveloperMode   }, // Wasabiweb   (job)
  { color: "#4ade80", Icon: MdDeveloperMode   }, // Wasabiweb   (intern)
  { color: "#38bdf8", Icon: MdDeveloperMode   }, // Strictly Post Production
  { color: "#fb923c", Icon: GiFactory         }, // Witron
  { color: "#f97316", Icon: GiFactory         }, // Gyproc
  { color: "#a78bfa", Icon: BsMailbox2Flag    }, // PostNord
  { color: "#f472b6", Icon: MdOutlineLocalBar }, // Aronsborg
  { color: "#fb7185", Icon: PiChefHatLight    }, // Gamla Televerket
];

/* ─── Component ────────────────────────────────────────────────────── */

export const CareerLadder = () => {
  const { type } = useContext(LanguageContext);
  const [selId, setSelId]   = useState<number | null>(null);
  const [origin, setOrigin] = useState({ x: 50, y: 50 }); // % of viewport

  /* close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelId(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* build enriched job list */
  const jobs = worklifeExpData.map((d, i) => {
    const item = d[type];
    const { earliest, latest, segs } = parsePeriod(item.period);
    return {
      ...item,
      color: META[i]?.color ?? "#ffffff",
      Icon:  META[i]?.Icon  ?? MdDeveloperMode,
      earliest,
      latest,
      segs,
      dotY: toY(earliest.y, earliest.m), // dot placed at hire date
    };
  });

  const sel = jobs.find((j) => j.id === selId) ?? null;

  function handleClick(id: number, e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setOrigin({
      x: ((r.left + r.width  / 2) / window.innerWidth)  * 100,
      y: ((r.top  + r.height / 2) / window.innerHeight) * 100,
    });
    setSelId((prev) => (prev === id ? null : id));
  }

  const heading  = type === "sv" ? "Karriärstege"                         : "Career Ladder";
  const hint     = type === "sv" ? "Klicka på en markör för att läsa mer" : "Click a marker to read more";
  const tapHint  = type === "sv" ? "Tryck på ett kort för att läsa mer"   : "Tap a card to read more";

  /* ── Shared expanded-card body (used in both desktop + mobile) ───── */
  function ExpandedBody({ job }: { job: typeof jobs[0] }) {
    return (
      <>
        <div className="cl-exp-head">
          <job.Icon style={{ color: job.color, fontSize: "1.5rem", flexShrink: 0 }} />
          <div>
            <h3 style={{ color: job.color }}>{job.company}</h3>
            <p>{job.title}</p>
            <span>{job.period} · {job.location}</span>
          </div>
        </div>
        {job.description && (
          <p className="cl-exp-desc">{job.description}</p>
        )}
        {job.responsibilities && (
          <ul className="cl-exp-resp">
            {job.responsibilities.map((r, ri) => (
              <li key={ri}>{r}</li>
            ))}
          </ul>
        )}
      </>
    );
  }

  /* ═══════════════════════════════════════════════════════════════════
     DESKTOP layout
     ═══════════════════════════════════════════════════════════════════ */
  const Desktop = (
    <article className="cl-page cl-desktop">
      <header className="cl-header">
        <h1>{heading}</h1>
        <p className="cl-hint">{hint}</p>
      </header>

      {/* clicking the wrapper background closes the expanded card */}
      <div
        className="cl-track-wrap"
        style={{ height: TOTAL_H }}
        onClick={() => setSelId(null)}
      >
        {/* ── Base line ── */}
        <div className="cl-base-line" />

        {/* ── Coloured employment segments ── */}
        {jobs.map((job) =>
          job.segs.map((seg, si) => {
            const segTop = toY(seg.end.y,   seg.end.m);
            const segBot = toY(seg.start.y, seg.start.m);
            return (
              <div
                key={`${job.id}-${si}`}
                className="cl-seg"
                style={{
                  top:    segTop,
                  height: Math.max(4, segBot - segTop),
                  background: `linear-gradient(to bottom, ${job.color}ee, ${job.color}88)`,
                  boxShadow:  `0 0 10px 4px ${job.color}33`,
                }}
              />
            );
          })
        )}

        {/* ── Year markers ── */}
        {YEARS.map((yr) => (
          <div key={yr} className="cl-year-row" style={{ top: toY(yr, 0) }}>
            <span className="cl-year-num">{yr}</span>
            <span className="cl-year-tick" />
          </div>
        ))}

        {/* ── Dots + cards ── */}
        {jobs.map((job, i) => {
          const isLeft = i % 2 === 0;
          const isOpen = job.id === selId;

          return (
            <div key={job.id}>
              {/* Hire-date dot */}
              <div
                className={`cl-dot${job.id === 1 ? " cl-dot--live" : ""}`}
                style={{
                  top:       job.dotY,
                  background: job.color,
                  boxShadow: `0 0 14px 6px ${job.color}55`,
                }}
              />

              {/* Connector line */}
              <div
                className={`cl-conn${isLeft ? " cl-conn--l" : " cl-conn--r"}`}
                style={{ top: job.dotY, borderColor: `${job.color}60` }}
              />

              {/* Small trigger card */}
              <button
                className={`cl-card${isLeft ? " cl-card--l" : " cl-card--r"}${isOpen ? " cl-card--open" : ""}`}
                style={{
                  top: job.dotY - 21,
                  "--c": job.color,
                } as React.CSSProperties}
                onClick={(e) => handleClick(job.id, e)}
                aria-expanded={isOpen}
                aria-label={`${job.company} — ${isOpen ? "close" : "read more"}`}
              >
                <job.Icon className="cl-card-ico" />
                <span className="cl-card-co">{job.company}</span>
                <span className="cl-card-tog">{isOpen ? "✕" : "+"}</span>
              </button>

              {/* Expanded floating card (desktop only) */}
              {isOpen && (
                <div
                  className={`cl-exp${isLeft ? " cl-exp--l" : " cl-exp--r"}`}
                  style={{
                    top: job.dotY - 14,
                    ...(isLeft
                      ? { borderLeftColor:  job.color }
                      : { borderRightColor: job.color }),
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="cl-exp-close"
                    onClick={() => setSelId(null)}
                    aria-label="Close"
                  >
                    ✕
                  </button>
                  <ExpandedBody job={job} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );

  /* ═══════════════════════════════════════════════════════════════════
     MOBILE layout
     ═══════════════════════════════════════════════════════════════════ */
  const Mobile = (
    <article className="cl-page cl-mobile">
      <header className="cl-header">
        <h1>{heading}</h1>
        <p className="cl-hint">{tapHint}</p>
      </header>

      <div className="cl-mob-wrap">
        {/* continuous gradient track */}
        <div className="cl-mob-track" />

        {jobs.map((job) => (
          <div key={job.id} className="cl-mob-row">
            {/* dot on the track */}
            <div
              className={`cl-mob-dot${job.id === 1 ? " cl-mob-dot--live" : ""}`}
              style={{
                background: job.color,
                boxShadow:  `0 0 8px 3px ${job.color}55`,
              }}
            />

            {/* compact card */}
            <button
              className="cl-mob-card"
              style={{ "--c": job.color } as React.CSSProperties}
              onClick={(e) => handleClick(job.id, e)}
              aria-label={`${job.company} — read more`}
            >
              <job.Icon className="cl-mob-ico" />
              <div className="cl-mob-txt">
                <span className="cl-mob-co">{job.company}</span>
                <span className="cl-mob-pd">{job.period}</span>
              </div>
              <span className="cl-mob-arr">›</span>
            </button>
          </div>
        ))}
      </div>
    </article>
  );

  /* ═══════════════════════════════════════════════════════════════════
     MOBILE overlay (position:fixed — hidden on desktop via CSS)
     ═══════════════════════════════════════════════════════════════════ */
  const Overlay = sel ? (
    <div
      className="cl-overlay"
      style={{
        "--ox": `${origin.x}%`,
        "--oy": `${origin.y}%`,
      } as React.CSSProperties}
      onClick={() => setSelId(null)}
      role="dialog"
      aria-modal="true"
      aria-label={sel.company}
    >
      <div
        className="cl-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="cl-modal-close"
          onClick={() => setSelId(null)}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="cl-modal-head">
          <sel.Icon style={{ color: sel.color, fontSize: "2.1rem", flexShrink: 0 }} />
          <div>
            <h3 style={{ color: sel.color }}>{sel.company}</h3>
            <p>{sel.title}</p>
            <span>{sel.period} · {sel.location}</span>
          </div>
        </div>

        {sel.description && (
          <p className="cl-modal-desc">{sel.description}</p>
        )}

        {sel.responsibilities && (
          <ul className="cl-modal-resp">
            {sel.responsibilities.map((r, ri) => (
              <li key={ri}>{r}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      {Desktop}
      {Mobile}
      {Overlay}
    </>
  );
};
