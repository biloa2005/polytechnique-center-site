
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const slides = [
  {
    image: "/images/classe2.png",
    position: "object-[center_45%]",
    subtitle: "Bienvenue au Polytechnique Center",
    title: "Votre réussite, notre priorité",
    description:
      "Nous accompagnons les élèves avec des cours de répétition de qualité pour renforcer leurs connaissances et atteindre leurs objectifs.",
  },
  {
    image: "/images/classe4.png",
    position: "object-center",
    subtitle: "Un encadrement de qualité",
    title: "Apprendre aujourd'hui, réussir demain",
    description:
      "Bénéficiez d'un accompagnement pédagogique adapté à vos besoins et progressez à votre propre rythme.",
  },
  {
    image: "/images/classe3.png",
    position: "object-[center_40%]",
    subtitle: "L'excellence au quotidien",
    title: "Le savoir est la clé du succès",
    description:
      "Développez vos compétences et préparez votre avenir grâce à des méthodes d'apprentissage efficaces.",
  },
  {
    image: "/images/classe5.png",
    position: "object-center",
    subtitle: "Construisons votre avenir",
    title: "Donnez le meilleur de vous-même",
    description:
      "Rejoignez notre communauté d'apprentissage et faites de chaque leçon une nouvelle opportunité de réussite.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
     className="relative isolate flex h-[calc(75svh-4.25rem)] min-h-[420px] w-full items-center overflow-hidden bg-blue-950 sm:h-[calc(80svh-4.25rem)] sm:min-h-[450px] lg:h-[calc(100svh-4.25rem)] lg:min-h-[520px]"
      aria-roledescription="carousel"
      aria-label="Présentation de Polytechnique Center"
    >
      {/* Images de fond */}
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={item.image}
            alt="Élèves en cours de répétition"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover ${item.position}`}
          />
        </div>
      ))}

      {/* Filtre sombre */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/65 to-black/35" />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-10 py-5 sm:px-16 sm:py-8 md:px-20 lg:px-24">
        <div
          key={current}
          className="w-full max-w-3xl animate-[fadeIn_0.8s_ease-in-out]"
        >
          {/* Sous-titre */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
           
          <p className="text-sm font-bold uppercase tracking-wide text-yellow-400 sm:text-base md:text-lg">
              {slide.subtitle}
            </p>
          </div>

          {/* Titre */}
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:mb-5 sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="mb-5 max-w-2xl text-base leading-relaxed text-gray-100 sm:mb-7 sm:text-lg md:text-lg lg:text-xl">
            {slide.description}
          </p>

          {/* Boutons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/matieres"
             className="bg-white text-blue-950 inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-5 py-3.5 text-base font-semibold transition-all duration-300 hover:border-white hover:bg-yellow-400 hover:text-blue-950 sm:px-6 sm:py-4 sm:text-base"
            >
              <GraduationCap size={21} />
              Découvrir nos cours
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          <Link
  href="/a-propos"
  className="hidden lg:inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-yellow-400 hover:text-blue-950 sm:px-6 sm:py-4"
>
  En savoir plus
</Link>
          </div>
        </div>
      </div>

      {/* Flèche précédente */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Diapositive précédente"
        className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-blue-900/70 text-white transition hover:bg-yellow-400 hover:text-blue-950 sm:left-5 sm:h-11 sm:w-11"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Flèche suivante */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Diapositive suivante"
        className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-blue-900/70 text-white transition hover:bg-yellow-400 hover:text-blue-950 sm:right-5 sm:h-11 sm:w-11"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-7 sm:gap-3">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Aller à la diapositive ${index + 1}`}
            aria-current={index === current ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 sm:h-3 ${
              index === current
                ? "w-7 bg-yellow-400 sm:w-8"
                : "w-2.5 bg-white/60 hover:bg-white sm:w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}