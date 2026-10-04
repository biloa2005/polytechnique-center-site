
"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("./contact-map"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-full min-h-[400px] w-full items-center justify-center bg-slate-100 text-sm text-slate-500 sm:min-h-[500px]"
      role="status"
    >
      Chargement de la carte...
    </div>
  ),
});

const centers = [
  {
    name: "Centre de Logbessou",
    address: "École publique, Logbessou, Douala, Cameroun",
    position: [4.087, 9.783] as [number, number],
  },
  {
    name: "Centre de PK20",
    address: "École primaire Blessing, PK20, Douala, Cameroun",
    position: [4.075, 9.817] as [number, number],
  },
  {
    name: "Centre de PK16",
    address: "Derrière Jackson, PK16, Douala, Cameroun",
    position: [4.075, 9.801] as [number, number],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* Décoration d'arrière-plan */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-yellow-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-14 text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-800"
          >
           
            Restons en contact
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className=" font-serif mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Nous sommes à votre{" "}
            <span className="text-blue-800">écoute</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Notre équipe est disponible pour répondre à vos questions
            et vous accompagner dans la réussite scolaire de vos enfants.
          </motion.p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-5">
          {/* Colonne des contacts */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 lg:col-span-2"
          >
            {/* Téléphone */}
            <motion.div
              variants={itemVariants}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-800 text-white shadow-md shadow-blue-800/20">
                  <Phone size={25} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Appelez-nous
                  </p>
                  <h3 className="font-serif mt-1 text-xl font-extrabold text-slate-900">
                    Téléphone
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+236693889445"
                  className="block rounded-xl bg-slate-50 px-4 py-3 text-lg font-extrabold tracking-wide text-gray-900 transition hover:bg-blue-50 sm:text-xl"
                >
                  +236 693 889 445
                </a>

                <a
                  href="tel:+236677769047"
                  className="block rounded-xl bg-slate-50 px-4 py-3 text-lg font-extrabold tracking-wide text-gray-900 transition hover:bg-blue-50 sm:text-xl"
                >
                  +236 677 769 047
                </a>
              </div>
            </motion.div>

            {/* E-mail */}
            <motion.div
              variants={itemVariants}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 shadow-md shadow-yellow-400/20">
                  <Mail size={25} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Écrivez-nous
                  </p>
                  <h3 className="font-serif mt-1 text-xl font-extrabold text-slate-900">
                    Adresse e-mail
                  </h3>
                </div>
              </div>

              <a
                href="mailto:polytechniquecenter@gmail.com"
                className="mt-6 block break-all rounded-xl bg-yellow-50 px-4 py-4 text-base font-extrabold leading-relaxed text-slate-900 transition hover:bg-yellow-100 sm:text-lg"
              >
                polytechniquecenter@gmail.com
              </a>
            </motion.div>

            {/* Centres */}
            <motion.div
              variants={itemVariants}
              className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                  <MapPin size={23} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-extrabold text-slate-900">
                    Nos trois centres
                  </h3>
                  <p className="text-sm text-slate-500">
                    Retrouvez-nous à Douala
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {centers.map((center, index) => (
                  <div key={center.name} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-800 text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-slate-900">
                        {center.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {center.address}
                      </p>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-blue-800 hover:text-blue-600"
                      >
                        Voir l&apos;itinéraire
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Carte */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg lg:col-span-3"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-7">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                    Nos implantations
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Localisez nos centres
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Explorez la carte interactive.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700 sm:flex">
                <MapPin size={24} />
              </div>
            </div>

            <div className="relative min-h-[400px] flex-1 sm:min-h-[500px]">
              <ContactMap centers={centers} />
            </div>

            <div className="flex items-center gap-3 border-t border-blue-100 bg-blue-50 px-5 py-4 sm:px-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-800 shadow-sm">
                <MapPin size={20} />
              </div>
              <p className="text-sm font-medium leading-relaxed text-blue-950">
                Trois centres à Douala pour accompagner les élèves
                au plus près de chez eux.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}