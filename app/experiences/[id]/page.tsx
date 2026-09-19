import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences, getExperienceById } from "@/app/data/experiences";

export function generateStaticParams() {
  return experiences.map((experience) => ({ id: String(experience.id) }));
}

export default function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ExperienceDetailPageInner params={params} />;
}

async function ExperienceDetailPageInner({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = getExperienceById(Number(id));

  if (!experience) {
    notFound();
  }

  return (
    <main className="content-page detail-page">
      <Link href="/experiences" className="back-link">
        ← Volver a experiencias
      </Link>

      <article className="detail-card">
        <img src={experience.imageUrl} alt={experience.title} className="detail-card__image" />

        <div className="detail-card__content">
          <div className="experience-card__meta">
            <span className="tag">{experience.category}</span>
            <span className="rating">★ {experience.rating}</span>
          </div>

          <h1>{experience.title}</h1>
          <p className="location">{experience.destination}</p>

          <div className="detail-badges">
            <span>★ {experience.rating}</span>
            <span>desde {experience.price}€</span>
          </div>

          <p className="detail-description">{experience.description}</p>
        </div>
      </article>
    </main>
  );
}
