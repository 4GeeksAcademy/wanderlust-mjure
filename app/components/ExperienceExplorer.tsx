"use client";

import Link from "next/link";
import { experiences, type Experience } from "@/app/data/experiences";

function ExperienceCard({
  experience,
  isFavorite,
  onToggle,
}: {
  experience: Experience;
  isFavorite: boolean;
  onToggle: (id: number) => void;
}) {
  return (
    <article className="experience-card">
      <div className="experience-card__image-wrap">
        <img src={experience.imageUrl} alt={experience.title} className="experience-card__image" />
        <button
          type="button"
          className={`favorite-chip ${isFavorite ? "favorite-chip--active" : ""}`}
          onClick={() => onToggle(experience.id)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "♥ Saved" : "♡ Save"}
        </button>
      </div>

      <div className="experience-card__body">
        <div className="experience-card__meta">
          <span className="tag">{experience.category}</span>
          <span className="rating">★ {experience.rating}</span>
        </div>

        <h3>{experience.title}</h3>
        <p className="location">{experience.destination}</p>
        <p className="summary">{experience.description}</p>

        <div className="experience-card__footer">
          <div>
            <strong>Desde</strong>
            <span> {experience.price}€</span>
          </div>
          <Link href={`/experiences/${experience.id}`} className="card-link">
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ExperienceExplorer({
  favoriteIds,
  onToggleFavorite,
}: {
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}) {
  return (
    <section className="explorer-shell">
      <div className="favorites-preview">
        <h2>Favoritos</h2>
        <p>
          {favoriteIds.length === 0
            ? "No hay experiencias guardadas todavía."
            : `${favoriteIds.length} experiencias guardadas en tu lista.`}
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isFavorite={favoriteIds.includes(experience.id)}
            onToggle={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
