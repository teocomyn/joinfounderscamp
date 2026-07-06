export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="wrap nav-bar">
        <a href="#" className="logo">
          <svg className="logo-flag" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#C56A3E" />
            <path d="M20 9 L28 30 H12 Z" fill="#EAE3D2" opacity="0.95" />
          </svg>
          <span>Founders Camp</span>
        </a>
        <div className="nav-links">
          <a href="#concept">Concept</a>
          <a href="#destinations">Destinations</a>
          <a href="#criteres">Sélection</a>
          <a href="#candidature" className="btn btn-nav">
            Candidater
          </a>
        </div>
      </div>
    </nav>
  );
}
