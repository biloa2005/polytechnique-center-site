"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  House,
  ClipboardCheck,
  Users,
  Award,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Années d'expérience",
    icon: CalendarDays,
  },
  {
    value: "500+",
    label: "Élèves accompagnés",
    icon: Users,
  },
  {
    value: "95%",
    label: "Taux de réussite",
    icon: Award,
  },
];

const formulas = [
  {
    title: "Cours au centre",
    description:
      "Des cours de répétition dans un cadre propice à l'apprentissage et à la progression.",
    icon: BookOpen,
  },
//   {
//     title: "Stages intensifs",
//     description:
//       "Des séances renforcées pour consolider les connaissances et progresser rapidement.",
//     icon: GraduationCap,
//   },
  {
    title: "Aide aux devoirs & étude dirigée à domicile",
    description:
      "Un accompagnement personnalisé à domicile pour mieux comprendre les leçons et réussir ces examens.",
    icon: House,
  },
  {
    title: "Préparation aux examens officiels",
    description:
      "Des révisions ciblées, des exercices pratiques et des sujets d'examen pour bien se préparer.",
    icon: ClipboardCheck,
  },
];

// Animations pour la grille des cartes
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function StatsAndFormulas() {
  return (
    <section className="w-full">
      {/* Chiffres clés */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="bg-white px-4 py-10 text-white sm:py-14"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  className="mb-2 h-5 w-5 text-yellow-400  sm:h-7 sm:w-7"
                />
                <span className="text-xl font-extrabold text-blue-950 sm:text-3xl lg:text-4xl">
                  {stat.value}
                </span>
                <p className="mt-1 text-[10px] leading-tight text-gray-950 sm:text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Nos formules */}
      <div className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Nos solutions éducatives
            </span>

            <h2 className=" font-serif mt-2 text-2xl font-extrabold text-blue-950 sm:text-3xl lg:text-4xl">
              Nos formules
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
              Découvrez nos différentes formules d'accompagnement pour
              favoriser la réussite de chaque élève.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {formulas.map((formula, index) => {
              const Icon = formula.icon;

              return (
                <motion.div key={index} variants={cardVariants} className="h-full">
                  <Link
                    href="/cours"
                    className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-800 transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="font-serif text-lg font-bold text-blue-950">
                      {formula.title}
                    </h3>

                    <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-600">
                      {formula.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-800">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}