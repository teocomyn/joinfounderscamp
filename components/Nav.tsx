export default function Nav() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <a href="#" className="logo">
          <svg className="logo-flag" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2 L20 21 H4 Z" fill="#C56A3E" />
            <path d="M12 2 L12 21" stroke="#0C1D16" strokeWidth="1.4" />
          </svg>
          THE FOUNDERS CAMP
        </a>
        <div className="nav-links">
          <a href="#concept">Le concept</a>
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
