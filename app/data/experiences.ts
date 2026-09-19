export type ExperienceCategory =
  | "Adventure"
  | "Culture"
  | "Food"
  | "Wellness"
  | "Nature";

export type Experience = {
  id: number;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
};

export const categoryOptions: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Paris, France",
  "Kyoto, Japan",
  "Bali, Indonesia",
  "Lisbon, Portugal",
  "Reykjavik, Iceland",
  "Marrakech, Morocco",
  "Rome, Italy",
  "Cappadocia, Turkey",
  "Queenstown, New Zealand",
  "Patagonia, Argentina",
  "Santorini, Greece",
  "Seoul, South Korea",
  "Cusco, Peru",
  "Hanoi, Vietnam",
  "Banff, Canada",
  "Cape Town, South Africa",
  "Milan, Italy",
  "Kuala Lumpur, Malaysia",
  "Zurich, Switzerland",
  "Oahu, Hawaii",
];

const imagePool = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
];

const titles = [
  "Sunrise Journey",
  "Hidden Trails",
  "Culture Escape",
  "Tasting Route",
  "Coastal Discovery",
  "Mountain Quiet",
  "Island Story",
  "Slow Living",
  "Forest Retreat",
  "Golden Hour Tour",
];

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const category = categoryOptions[index % categoryOptions.length];
  const destination = destinations[index % destinations.length];
  const title = `${titles[index % titles.length]} ${index + 1}`;
  const price = 120 + ((index * 37) % 680);
  const rating = Number((4.2 + (index % 8) * 0.2).toFixed(1));

  return {
    id: index + 1,
    title,
    description:
      `A curated ${category.toLowerCase()} experience in ${destination} designed for travelers who want authenticity, comfort, and memorable moments in every step of the journey.`,
    category,
    destination,
    price,
    rating,
    imageUrl: imagePool[index % imagePool.length],
  };
});

export const getExperienceById = (id: number) =>
  experiences.find((experience) => experience.id === id);
