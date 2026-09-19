"use client";

import { useState } from "react";
import { ExperienceExplorer } from "@/app/components/ExperienceExplorer";

export default function ExperiencesPage() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((current) =>
      current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id],
    );
  };

  return (
    <main className="content-page">
      <section className="page-header">
        <p className="eyebrow">Explorar</p>
        <h1>Descubre experiencias inolvidables</h1>
        <p>
          Explora viajes, escapadas y experiencias únicas en destinos que te invitan a vivir algo distinto.
        </p>
      </section>

      <ExperienceExplorer favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
    </main>
  );
}
