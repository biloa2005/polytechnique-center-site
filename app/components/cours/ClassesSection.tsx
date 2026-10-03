
"use client";

import { motion, type Variants } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Settings,
  type LucideIcon,
} from "lucide-react";

// Types TypeScript
type SubSection = {
  label: string;
  items: string[];
};

type ClassCategory = {
  title: string;
  icon: LucideIcon;
  description: string;
  bgColor: string;
  badges?: string[];
  subSections?: SubSection[];
};

// Données des catégories
const categories: ClassCategory[] = [
  {
    title: "Enseignement primaire",
    icon: BookOpen,
    description:
      "Les bases fondamentales pour assurer la réussite dès le premier cycle.",
    badges: ["SIL", "CP", "CE1", "CE2", "CM1", "CM2"],
    bgColor: "bg-blue-50",
  },
  {
    title: "Collège & Lycée (Général)",
    icon: GraduationCap,
    description:
      "Une préparation rigoureuse aux examens officiels et un accompagnement adapté aux séries scientifiques et littéraires.",
    subSections: [
      {
        label: "Classes",
        items: [
          "6ème",
          "5ème",
          "4ème",
          "3ème",
          "2nde",
          "1ère",
          "Terminale",
        ],
      },
      {
        label: "Séries",
        items: ["Filière A", "Filière C", "Filière D"],
      },
      {
        label: "Examens",
        items: ["BEPC", "PROBATOIRE", "BACCALAURÉAT"],
      },
    ],
    bgColor: "bg-blue-50",
  },
  {
    title: "Enseignement technique",
    icon: Settings,
    description:
      "Un accompagnement spécialisé dans les filières industrielles, technologiques et de gestion.",
    badges: [
      "CAP",
      "F1",
      "F2",
      "F3",
      "F4",
      "F8",
      "CMA-MVT",
      "IH",
      "ESF",
      "CG",
    ],
    bgColor: "bg-emerald-50",
  },
];

// Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ClassesSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 text-gray-800 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-800 sm:text-sm">
            Un accompagnement pour chaque niveau
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Nos Classes &{" "}
            <span className="text-yellow-500">Programmes</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Un encadrement sur mesure adapté au système éducatif
            camerounais, du primaire jusqu'aux classes terminales
            du général et du technique.
          </p>

         
        </motion.div>

        {/* Cartes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:border-blue-200 hover:shadow-xl lg:p-8"
              >
                {/* Décoration supérieure */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-800 via-yellow-400 to-blue-800" />

                <div className="flex-1">
                  {/* Icône et titre */}
                  <div className="mb-5 flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${category.bgColor}`}
                    >
                      <Icon
                        className="h-7 w-7 text-blue-900"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="text-lg font-bold leading-snug text-blue-950 sm:text-xl">
                      {category.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-7 text-gray-600">
                    {category.description}
                  </p>

                  {/* Badges */}
                  {category.badges && (
                    <div className="flex flex-wrap gap-2">
                      {category.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-900 transition-colors hover:border-yellow-400 hover:bg-yellow-50 sm:text-sm"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                 {/* Sous-sections */}
{category.subSections && (
  <div className="space-y-5">
    {category.subSections.map((sub) => (
      <div key={sub.label}>
        <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          {sub.label}
        </h4>

        <div className="flex flex-wrap gap-2">
          {sub.items.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-yellow-50 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
)}
                </div>

                {/* Décoration inférieure */}
                <div className="mt-8 border-t border-gray-100 pt-4">
              
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}