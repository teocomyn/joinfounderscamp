export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-shell wrap">
        <a href="#" className="logo">
          <svg className="logo-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#C56A3E" />
            <path d="M20 9 L28 30 H12 Z" fill="#F4F1EA" opacity="0.95" />
          </svg>
          <span className="logo-text">Founders Camp</span>
        </a>

        <div className="nav-pill">
          <a href="#concept">Concept</a>
          <a href="#destinations">Destinations</a>
          <a href="#format">Format</a>
          <a href="#criteres">Sélection</a>
        </div>

        <a href="#candidature" className="btn btn-nav">
          Candidater
          <span className="btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  );
}
