
"use client";

import { motion, type Variants } from "framer-motion";
import {
  Wallet,
  GraduationCap,
  BookOpen,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

type PriceItem = {
  level: string;
  price: number;
  description: string;
};

const prices: PriceItem[] = [
  {
    level: "Classe de 3ème",
    price: 7000,
    description: "Préparation au BEPC",
  },
  {
    level: "Classe de Première",
    price: 8000,
    description: "Accompagnement scolaire",
  },
  {
    level: "Classe de Terminale",
    price: 10000,
    description: "Préparation au Baccalauréat",
  },
  {
    level: "Enseignement technique",
    price: 12000,
    description: "Filières techniques et professionnelles",
  },
  {
    level: "Enseignement anglophone",
    price: 20000,
    description: "Accompagnement du système anglophone",
  },
];

// Formatage des prix en FCFA
const formatPrice = (price: number) =>
  `${price.toLocaleString("fr-FR")} FCFA`;

// Animations
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

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PricingSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-800 sm:text-sm">
            <Wallet size={16} />
            Nos tarifs
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Modalités &{" "}
            <span className="text-yellow-500">Tarifs</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Des tarifs transparents pour accompagner les élèves
            tout au long de leur parcours scolaire.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-400" />
        </motion.div>

        {/* Tableau des tarifs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
        >
          {/* En-tête du tableau */}
          <div className="flex items-center gap-3 bg-blue-950 px-5 py-5 text-white sm:px-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <GraduationCap className="h-6 w-6 text-yellow-400" />
            </div>

            <div>
              <h3 className="text-lg font-bold sm:text-xl">
                Frais de scolarité
              </h3>
              <p className="mt-1 text-xs text-blue-200 sm:text-sm">
                Tarifs mensuels selon le niveau
              </p>
            </div>
          </div>

          {/* Tableau responsive */}
          <div className="w-full">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-4 text-sm font-bold text-blue-950 sm:px-8 sm:text-base">
                    Classe / Niveau
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-bold text-blue-950 sm:px-8 sm:text-base">
                    Prix / mois
                  </th>
                </tr>
              </thead>

              <tbody>
                {prices.map((item, index) => (
                  <motion.tr
                    key={item.level}
                    variants={itemVariants}
                    className={`border-b border-gray-100 transition-colors hover:bg-blue-50/70 ${
                      index % 2 === 1 ? "bg-gray-50/60" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-5 sm:px-8">
                      <div className="flex items-center gap-3">
                        <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800 sm:flex">
                          {index === 3 || index === 4 ? (
                            <BookOpen size={18} />
                          ) : (
                            <GraduationCap size={18} />
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-800 sm:text-base">
                            {item.level}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-4 py-5 text-right sm:px-8">
                      <span className="text-sm font-extrabold text-blue-900 sm:text-base">
                        {formatPrice(item.price)}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Frais d'inscription */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between gap-3 bg-blue-50 px-5 py-5 sm:flex-row sm:items-center sm:px-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-800 shadow-sm">
                <BookOpen size={20} />
              </div>

              <div>
                <p className="font-bold text-blue-950">
                  Frais d'inscription
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  À régler lors de l'inscription
                </p>
              </div>
            </div>

            <span className="text-lg font-extrabold text-blue-900 sm:text-xl">
              {formatPrice(3000)}
            </span>
          </motion.div>
        </motion.div>

        {/* Offre spéciale */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ y: -5 }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-yellow-300 bg-gradient-to-br from-yellow-50 via-white to-amber-50 p-6 shadow-md sm:p-9"
        >
          {/* Décoration */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-200/40 blur-2xl" />

          <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-blue-950 shadow-sm">
              <Users size={32} />
            </div>

            <div className="flex-1">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow-800">
                <Sparkles size={14} />
                Offre spéciale
              </div>

              <h3 className="text-xl font-extrabold text-blue-950 sm:text-2xl">
                La promotion Frères & Sœurs
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base">
                Parce que la réussite scolaire se partage en famille,
                profitez d'une réduction de{" "}
                <span className="font-extrabold text-blue-900">
                  15 %
                </span>{" "}
                pour les frères et sœurs inscrits au centre.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl bg-blue-950 px-6 py-4 text-white">
              <span className="text-3xl font-extrabold text-yellow-400">
                -15%
              </span>
              <span className="mt-1 text-xs font-medium text-blue-100">
                de réduction
              </span>
            </div>
          </div>
        </motion.div>

        {/* Note et contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 flex flex-col items-center gap-3 text-center"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
            <p>
              Pour plus d'informations sur les modalités,
              contactez notre équipe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}