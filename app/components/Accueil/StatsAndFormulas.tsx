
import Link from "next/link";
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
      "Un accompagnement personnalisé à domicile pour mieux comprendre les leçons et réussir les devoirs.",
    icon: House,
  },
  {
    title: "Préparation aux examens officiels",
    description:
      "Des révisions ciblées, des exercices pratiques et des sujets d'examen pour bien se préparer.",
    icon: ClipboardCheck,
  },
];

export default function StatsAndFormulas() {
  return (
    <section className="w-full">
      {/* Chiffres clés */}
      <div className="bg-blue-950 px-4 py-10 text-white sm:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  className="mb-2 h-5 w-5 text-yellow-400 sm:h-7 sm:w-7"
                />
                <span className="text-xl font-extrabold text-yellow-400 sm:text-3xl lg:text-4xl">
                  {stat.value}
                </span>
                <p className="mt-1 text-[10px] leading-tight text-blue-100 sm:text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nos formules */}
      <div className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Nos solutions éducatives
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-blue-950 sm:text-3xl lg:text-4xl">
              Nos formules
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
              Découvrez nos différentes formules d'accompagnement pour
              favoriser la réussite de chaque élève.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {formulas.map((formula, index) => {
              const Icon = formula.icon;

              return (
                <Link
                  key={index}
                  href="/cours"
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-800 transition-colors duration-300 group-hover:bg-blue-800 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-bold text-blue-950">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}