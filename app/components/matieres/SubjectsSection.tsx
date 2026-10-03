
"use client";

import { motion, type Variants } from "framer-motion";
import {
  Calculator,
  Languages,
  Monitor,
  Microscope,
  Atom,
  BookOpen,
  FlaskConical,
  Globe,
  GraduationCap,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

// Types TypeScript
type Subject = {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bg: string;
};

// Liste des matières
const subjects: Subject[] = [
  {
    title: "Mathématiques",
    description:
      "Développer la logique, maîtriser les calculs et résoudre les problèmes avec méthode.",
    icon: Calculator,
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    title: "Anglais",
    description:
      "Renforcer la grammaire, le vocabulaire, la compréhension et l'expression orale.",
    icon: Languages,
    color: "text-indigo-700",
    bg: "bg-indigo-50",
  },
  {
    title: "Informatique",
    description:
      "Découvrir les outils numériques et approfondir les notions informatiques selon le programme.",
    icon: Monitor,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
  },
  {
    title: "SVT",
    description:
      "Comprendre les sciences de la vie et de la Terre grâce aux explications et aux exercices.",
    icon: Microscope,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    title: "Physique",
    description:
      "Assimiler les lois physiques et progresser dans les exercices et les applications pratiques.",
    icon: Atom,
    color: "text-violet-700",
    bg: "bg-violet-50",
  },
  {
    title: "Français",
    description:
      "Améliorer l'expression écrite, la grammaire, la lecture et les compétences rédactionnelles.",
    icon: BookOpen,
    color: "text-orange-700",
    bg: "bg-orange-50",
  },
  {
    title: "Chimie",
    description:
      "Maîtriser les réactions, les formules et les raisonnements essentiels en chimie.",
    icon: FlaskConical,
    color: "text-rose-700",
    bg: "bg-rose-50",
  },
  {
    title: "Histoire & Géographie",
    description:
      "Mieux comprendre les événements historiques, les territoires et les enjeux du monde.",
    icon: Globe,
    color: "text-teal-700",
    bg: "bg-teal-50",
  },
  {
    title: "Matières de spécialité",
    description:
      "Un accompagnement adapté aux matières techniques, scientifiques et aux différentes filières.",
    icon: GraduationCap,
    color: "text-yellow-700",
    bg: "bg-yellow-50",
  },
];

// Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function SubjectsSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-800 sm:text-sm">
            <BookOpen size={16} />
            Un large choix de matières
          </span>

          <h2 className=" font-serif mt-5 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Les matières{" "}
            <span className="text-yellow-500">enseignées</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Chaque matière mérite une bonne méthode d'apprentissage.
            Nous proposons un accompagnement adapté au niveau,
            aux objectifs et aux besoins de chaque élève.
          </p>

         
        </motion.div>

        {/* Grille des matières */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <motion.article
                key={subject.title}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.25 },
                }}
                className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Barre décorative */}
                <div className="absolute left-0 top-0 h-1 w-0 rounded-tl-2xl bg-yellow-400 transition-all duration-300 group-hover:w-full" />

                {/* Icône */}
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${subject.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon
                    className={`h-7 w-7 ${subject.color}`}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Titre */}
                <h3 className="text-lg font-bold text-blue-950 sm:text-xl">
                  {subject.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-grow text-sm leading-7 text-gray-600">
                  {subject.description}
                </p>

                {/* Lien */}
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-800 transition-colors hover:text-yellow-600"
                >
                  Se renseigner
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Message de confiance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mt-14 overflow-hidden rounded-2xl bg-blue-950 px-6 py-9 text-center sm:px-10 sm:py-12"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-2xl" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/15">
              <Lightbulb className="h-6 w-6 text-yellow-400" />
            </div>

            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Vous recherchez une matière particulière ?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Des matières générales aux disciplines de spécialité,
              chaque besoin est étudié selon le niveau et le programme
              de l'élève. Contactez-nous pour trouver une formule
              d'accompagnement adaptée.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-950 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg"
            >
              Contactez-nous
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}