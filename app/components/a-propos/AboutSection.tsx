"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Eye,
  Users,
  BookOpen,
  Lightbulb,
  Trophy,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: GraduationCap,
    title: "Excellence",
    description:
      "Nous encourageons chaque apprenant à donner le meilleur de lui-même et à viser l'excellence.",
  },
  {
    icon: Users,
    title: "Accompagnement",
    description:
      "Nous plaçons l'apprenant au centre de notre démarche afin de lui offrir un accompagnement adapté.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Nous adoptons des méthodes pédagogiques modernes pour rendre l'apprentissage plus efficace et motivant.",
  },
  {
    icon: Trophy,
    title: "Réussite",
    description:
      "Notre objectif est de contribuer concrètement à la progression et à la réussite scolaire de chaque apprenant.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Éléments décoratifs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-yellow-400/15 px-4 py-2 text-sm font-semibold text-blue-700">
            À PROPOS DE NOUS
          </span>

          <h2 className="text-3xl font-extrabold leading-tight text-blue-950 md:text-5xl">
            Construire aujourd'hui{" "}
            <span className="text-yellow-500">la réussite de demain</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            Polytechnique Center est une organisation créée par des étudiants
            de l'École Nationale Supérieure Polytechnique de Douala, avec la
            volonté de mettre leur expérience, leurs connaissances et leur
            engagement au service de la réussite scolaire.
          </p>
        </motion.div>

        {/* PRÉSENTATION */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Bloc gauche */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-xl md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-blue-950">
                <GraduationCap size={30} />
              </div>

              <h3 className="text-2xl font-bold md:text-3xl">
                Une initiative portée par des étudiants
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                Polytechnique Center est né de la volonté d'étudiants de
                l'École Nationale Supérieure Polytechnique de Douala de
                partager leurs connaissances et leur expérience avec les
                jeunes générations.
              </p>

              <p className="mt-4 leading-8 text-blue-100">
                À travers cette initiative, nous souhaitons contribuer à
                l'amélioration de l'accompagnement scolaire en proposant aux
                apprenants un environnement favorable à l'apprentissage, à la
                progression et au développement de leur potentiel.
              </p>

              <p className="mt-4 leading-8 text-blue-100">
                Notre approche repose sur la transmission des connaissances,
                l'encadrement, la discipline et l'accompagnement personnalisé,
                afin d'aider chaque apprenant à mieux comprendre ses cours,
                renforcer ses compétences et préparer sereinement ses examens.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-blue-950 transition-all duration-300 hover:bg-yellow-300 hover:gap-3"
              >
                Nous contacter
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Bloc droit */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Mission */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg"
            >
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Target size={27} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-950">
                    Notre mission
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Offrir aux apprenants un accompagnement scolaire de qualité
                    en mettant à leur disposition des ressources, des méthodes
                    et un encadrement adaptés à leurs besoins.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg"
            >
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
                  <Eye size={27} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-950">
                    Notre vision
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    Contribuer à la formation d'une génération d'apprenants
                    autonomes, compétents et confiants, capables de relever les
                    défis académiques et professionnels de demain.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* NOS VALEURS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-24"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-12 max-w-2xl text-center hidden lg:block"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-yellow-500">
              Nos valeurs
            </span>

            <h3 className="mt-2 text-3xl font-extrabold text-blue-950 md:text-4xl">
              Ce qui guide notre engagement
            </h3>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="hidden lg:block group rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-md transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-blue-950">
                    <Icon size={30} />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-blue-950">
                    {value.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* STATISTIQUES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-3xl bg-yellow-400 p-8 shadow-xl md:p-12"
        >
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="text-4xl font-extrabold text-blue-950">
                +10
              </div>
              <p className="mt-2 font-medium text-blue-900">
                Années d'expérience cumulées
              </p>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-blue-950">
                100%
              </div>
              <p className="mt-2 font-medium text-blue-900">
                Engagement pour la réussite
              </p>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-blue-950">
                1
              </div>
              <p className="mt-2 font-medium text-blue-900">
                Vision : accompagner chaque apprenant
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}