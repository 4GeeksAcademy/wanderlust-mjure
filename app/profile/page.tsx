import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="content-page profile-page">
      <section className="page-header page-header--compact">
        <p className="eyebrow">Perfil</p>
        <h1>Hola, viajero</h1>
      </section>

      <div className="profile-card">
        <div className="profile-card__avatar">V</div>
        <div>
          <h2>Viajera curiosa</h2>
          <p>Estás listo para descubrir nuevas culturas, paisajes y experiencias inolvidables.</p>
        </div>
      </div>

      <div className="profile-metrics">
        <div className="metric">
          <strong>24</strong>
          <span>destinos soñados</span>
        </div>
        <div className="metric">
          <strong>8</strong>
          <span>tendencias del año</span>
        </div>
        <div className="metric">
          <strong>126</strong>
          <span>favoritos guardados</span>
        </div>
      </div>

      <div className="profile-actions">
        <Link href="/experiences" className="primary-button">
          Explorar experiencias
        </Link>
        <Link href="/favorites" className="secondary-button">
          Ver favoritos
        </Link>
      </div>
    </main>
  );
}
