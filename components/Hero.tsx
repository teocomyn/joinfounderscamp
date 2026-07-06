export default function Hero() {
  return (
    <header>
      <div className="topo" aria-hidden="true">
        <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="#1F4634" strokeWidth="1.2">
            <path d="M-50,700 C200,620 350,760 600,680 C850,600 1000,740 1250,660 C1350,630 1420,660 1460,650" />
            <path d="M-50,640 C200,560 380,700 620,620 C860,540 1020,680 1260,600 C1360,570 1420,600 1460,590" />
            <path d="M-50,580 C210,500 400,640 640,560 C880,480 1040,620 1270,540 C1370,510 1420,540 1460,530" />
            <path d="M-50,520 C220,440 420,580 660,500 C900,420 1060,560 1280,480 C1380,450 1420,480 1460,470" />
            <path d="M-50,460 C230,380 440,520 680,440 C920,360 1080,500 1290,420 C1390,390 1420,420 1460,410" />
            <path d="M-50,400 C240,320 460,460 700,380 C940,300 1100,440 1300,360 C1400,330 1420,360 1460,350" />
            <path d="M-50,340 C250,260 480,400 720,320 C960,240 1120,380 1310,300" />
            <path d="M-50,280 C260,200 500,340 740,260 C980,180 1140,320 1320,240" />
            <path d="M-50,220 C270,140 520,280 760,200 C1000,120 1160,260 1330,180" />
          </g>
          <circle cx="1050" cy="330" r="4" fill="#C56A3E" />
          <circle cx="1050" cy="330" r="12" fill="none" stroke="#C56A3E" strokeWidth="1" opacity=".5" />
          <circle cx="1050" cy="330" r="22" fill="none" stroke="#C56A3E" strokeWidth="1" opacity=".25" />
        </svg>
      </div>
      <div className="wrap hero-inner">
        <span className="mono hero-eyebrow">
          Sur candidature uniquement · Session 01 · Été 2026
        </span>
        <h1>
          Travailler dur.
          <br />
          Depuis les plus <span className="accent">beaux endroits</span> du
          monde.
        </h1>
        <p className="hero-sub">
          The Founders Camp réunit une poignée d&apos;entrepreneurs et de
          freelances qui performent pour 2 à 3 semaines de deep work, de sport
          et d&apos;aventure dans une villa privée. Pas une retraite. Pas des
          vacances. Un camp de base pour scaler entouré des bonnes personnes.
        </p>
        <div className="hero-ctas">
          <a href="#candidature" className="btn">
            Déposer ma candidature
          </a>
          <a href="#concept" className="btn btn-ghost">
            Découvrir le concept
          </a>
        </div>
        <div className="hero-meta">
          <div>
            <strong>10 à 14</strong>
            <span>places par session</span>
          </div>
          <div>
            <strong>2 à 3 sem.</strong>
            <span>par destination</span>
          </div>
          <div>
            <strong>5k€+ / mois</strong>
            <span>de CA minimum requis</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>entrepreneurs vérifiés</span>
          </div>
        </div>
      </div>
    </header>
  );
}
