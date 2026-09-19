"use client";

import Link from "next/link";
import { useState } from "react";
import { experiences } from "@/app/data/experiences";

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((current) =>
      current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id],
    );
  };

  const favorites = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <main className="content-page">
      <section className="page-header">
        <p className="eyebrow">Favoritos</p>
        <h1>Tu lista de experiencias guardadas</h1>
        <p>
          Un icono de corazón en cada tarjeta activa o desactiva la experiencia en la lista de favoritos del usuario.
        </p>
      </section>

      {favorites.length === 0 ? (
        <div className="empty-state empty-state--compact">
          <h3>No hay favoritos todavía</h3>
          <p>Activa el corazón en cualquier tarjeta para añadirla aquí.</p>
          <Link href="/experiences" className="primary-button">
            Explorar experiencias
          </Link>
        </div>
      ) : (
        <div className="favorite-grid">
          {favorites.map((experience) => (
            <article key={experience.id} className="favorite-card">
              <img src={experience.imageUrl} alt={experience.title} className="favorite-card__image" />
              <div className="favorite-card__body">
                <div className="experience-card__meta">
                  <span className="tag">{experience.category}</span>
                  <span className="rating">★ {experience.rating}</span>
                </div>
                <h3>{experience.title}</h3>
                <p>{experience.destination}</p>
                <div className="favorite-card__actions">
                  <span>Desde {experience.price}€</span>
                  <button type="button" className="favorite-chip favorite-chip--active" onClick={() => toggleFavorite(experience.id)}>
                    ♥ Guardado
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
