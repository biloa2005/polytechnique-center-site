"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

interface Founder {
  id: number;
  name: string;
  role: string;
  image: string;
}

const founders: Founder[] = [
  {
    id: 1,
    name: "Biloa Philemon Armand",
    role: "Chef de centre PK16",
    image: "/responsable/philemon.webp",
  },
  {
    id: 2,
    name: "Gounou Peguy",
    role: "Chef de centre Logbessou",
    image: "/responsable/peguy.webp",
  },
  {
    id: 3,
    name: "Gouanet Leoding",
    role: "Chef de centre PK20",
    image: "/responsable/leoding.webp",
  },
  {
    id: 4,
    name: "Mendjina Lebogo",
    role: "Secrétaire générale",
    image: "/responsable/lebogo.webp",
  },
  {
    id: 5,
    name: "Tchabo Orly",
    role: "Trésorier",
    image: "/responsable/orly.jpg",
  },
  {
    id: 6,
    name: "Ngansop Ngansop Erwan Steve",
    role: "Responsable base de données",
    image: "/responsable/erwan.jpg",
  },
  {
    id: 7,
    name: "Joseph",
    role: "Responsable",
    image: "/responsable/joseph.jpg",
  },
];

export default function FoundersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const activeFounder = founders[activeIndex];

  // La bande de miniatures défile automatiquement avec le membre actif
  useEffect(() => {
    if (thumbsSwiper && !thumbsSwiper.destroyed) {
      thumbsSwiper.slideTo(activeIndex);
    }
  }, [activeIndex, thumbsSwiper]);

  // On change seulement le grand slider : onSlideChange met à jour activeIndex
  const changeFounder = (index: number) => {
    swiper?.slideTo(index);
  };

  // Fonction utilitaire pour cibler Peguy et Lebogo
  const isSpecificFounder = (name: string) => {
    return name.includes("Peguy") || name.includes("Lebogo");
  };

  return (
    <section
      id="fondateurs"
      className="relative overflow-hidden bg-slate-50 py-20 md:py-28"
    >
      {/* Cercles décoratifs */}
      <motion.div
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            <UserRound size={17} />
            NOTRE ÉQUIPE
          </span>

          <h2 className="font-serif mt-5 text-3xl font-extrabold text-blue-950 md:text-5xl">
            Les membres <span className="text-yellow-500">fondateurs</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
            Découvrez les étudiants de l'École Nationale Supérieure
            Polytechnique de Douala à l'origine de Polytechnique Center et
            engagés dans sa vision d'accompagnement et de réussite scolaire.
          </p>
        </motion.div>

        {/* ================= GRAND SLIDE ================= */}
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-blue-950 shadow-2xl">
            {/* Ligne jaune décorative */}
            <div className="absolute left-0 top-0 z-10 h-1.5 w-full bg-yellow-400" />

            <Swiper
              modules={[Autoplay]}
              onSwiper={setSwiper}
              slidesPerView={1}
              allowTouchMove={true}
              rewind={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSlideChange={(slider) => setActiveIndex(slider.activeIndex)}
              className="w-full"
            >
              {founders.map((founder) => (
                <SwiperSlide key={founder.id}>
                  <AnimatePresence mode="wait">
                    {activeFounder.id === founder.id && (
                      <motion.div
                        key={founder.id}
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -80 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="grid min-h-[470px] items-center md:grid-cols-2"
                      >
                        {/* PHOTO */}
                        <div className="relative h-[360px] overflow-hidden md:h-[500px]">
                          <Image
                            src={founder.image}
                            alt={founder.name}
                            fill
                            priority={founder.id === 1}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            // object-contain pour Peguy et Lebogo uniquement, object-cover pour les autres
                            className={
                              isSpecificFounder(founder.name)
                                ? "object-contain bg-blue-950/40"
                                : "object-cover"
                            }
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />

                          {/* Badge */}
                          <div className="absolute bottom-5 left-5 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-blue-950">
                            Membre fondateur
                          </div>
                        </div>

                        {/* INFORMATIONS */}
                        <div className="p-8 text-white md:p-12">
                          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                            Polytechnique Center
                          </span>

                          <h3 className="font-serif mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                            {founder.name}
                          </h3>

                          <div className="mt-5 h-1 w-16 rounded-full bg-yellow-400" />

                          <p className="mt-6 text-xl font-semibold text-blue-100">
                            {founder.role}
                          </p>

                          <p className="mt-6 max-w-md leading-8 text-blue-100/80">
                            Membre fondateur de Polytechnique Center, engagé
                            dans le développement de l'organisation et dans
                            l'accompagnement des apprenants vers la réussite.
                          </p>

                          <div className="mt-8 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-blue-950">
                              <UserRound size={20} />
                            </div>

                            <span className="text-sm text-blue-100">
                              Équipe fondatrice
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ================= BOUTONS ================= */}
            <button
              onClick={() => swiper?.slidePrev()}
              aria-label="Membre précédent"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-blue-950 shadow-lg transition-all hover:scale-110 hover:bg-yellow-400 md:left-5"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => swiper?.slideNext()}
              aria-label="Membre suivant"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-blue-950 shadow-lg transition-all hover:scale-110 hover:bg-yellow-400 md:right-5"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* ================= MINIATURES ================= */}
          <div className="mt-8">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={3.5}
              spaceBetween={12}
              centeredSlides={true}
              watchSlidesProgress={true}
              breakpoints={{
                480: {
                  slidesPerView: 4.5,
                  spaceBetween: 14,
                },
                768: {
                  slidesPerView: 5.5,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 7,
                  spaceBetween: 16,
                  centeredSlides: false,
                },
              }}
              className="founders-thumbnails"
            >
              {founders.map((founder, index) => (
                <SwiperSlide key={founder.id}>
                  <motion.button
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => changeFounder(index)}
                    className={`group relative w-full overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                      activeIndex === index
                        ? "border-yellow-400 shadow-xl"
                        : "border-transparent"
                    }`}
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        sizes="150px"
                        className={`transition duration-500 ${
                          isSpecificFounder(founder.name)
                            ? "object-contain bg-blue-950/20"
                            : "object-cover"
                        } ${
                          activeIndex === index
                            ? "scale-105"
                            : "grayscale-[30%] group-hover:scale-105"
                        }`}
                      />

                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 transition-all duration-300 ${
                          activeIndex === index
                            ? "bg-blue-950/10"
                            : "bg-blue-950/40 group-hover:bg-blue-950/10"
                        }`}
                      />

                      {/* Numéro */}
                      <div
                        className={`absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                          activeIndex === index
                            ? "bg-yellow-400 text-blue-950"
                            : "bg-white/90 text-blue-950"
                        }`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Nom sous l'image */}
                    <div
                      className={`p-2 text-center text-xs font-bold ${
                        activeIndex === index
                          ? "bg-yellow-400 text-blue-950"
                          : "bg-white text-blue-950"
                      }`}
                    >
                      {founder.name.split(" ")[0]}
                    </div>
                  </motion.button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Indicateurs */}
          <div className="mt-5 flex justify-center gap-2">
            {founders.map((founder, index) => (
              <button
                key={founder.id}
                onClick={() => changeFounder(index)}
                aria-label={`Afficher ${founder.name}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-yellow-400"
                    : "w-2 bg-blue-200 hover:bg-blue-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}