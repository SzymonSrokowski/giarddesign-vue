export type HeroSlide = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const slides: HeroSlide[] = [
  {
    title: "Nowoczesna aranżacja Twojego ogrodu",
    description:
      "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
    image: "/images/hero-hedge.webp",
    imageAlt: "Geometryczny żywopłot widziany z góry",
  },
  {
    title: "Ogrody skrojone na miarę",
    description:
      "Łączymy funkcjonalność, prostotę i naturalne materiały, aby każda przestrzeń odpowiadała stylowi życia jej właścicieli.",
    image: "/images/hero-japanese.webp",
    imageAlt: "Minimalistyczny ogród japoński",
  },
  {
    title: "Od projektu do realizacji",
    description:
      "Prowadzimy inwestycję od pierwszego szkicu, przez wizualizację, aż po wykonanie i pielęgnację gotowego ogrodu.",
    image: "/images/hero-pool.webp",
    imageAlt: "Nowoczesny taras z basenem",
  },
];
