import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Wanderlust</p>
          <h1>Tu próxima gran aventura empieza aquí</h1>
          <p>
            Descubre experiencias únicas, explora destinos con personalidad y guarda las escapadas que más te emocionen.
          </p>
          <div className="hero__actions">
            <Link href="/experiences" className="primary-button">
              Explorar experiencias
            </Link>
            <Link href="/favorites" className="secondary-button">
              Ver favoritos
            </Link>
          </div>
        </div>

        <div className="hero__panel">
          <div className="mini-card mini-card--highlight">
            <span className="mini-card__label">Top experiencia</span>
            <strong>Ruta en Bali</strong>
            <small>4.9 · 5 días</small>
          </div>
          <div className="mini-card">
            <span className="mini-card__label">Próximo destino</span>
            <strong>Kyoto</strong>
            <small>Flores, cultura y calma</small>
          </div>
        </div>
      </section>
    </main>
  );
}
