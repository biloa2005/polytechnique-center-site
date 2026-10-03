import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos cours", href: "/cours" },
  { label: "Nos matières", href: "/matieres" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-12">
          
          {/* Présentation */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-extrabold text-white">
                Polytechnique <span className="text-yellow-400"> Center</span>
              </h2>
            </Link>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Un accompagnement éducatif de qualité pour aider chaque élève à développer son potentiel et à atteindre ses objectifs scolaires.
            </p>
            {/* Réseaux sociaux */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-blue-700 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Liens rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition hover:text-yellow-400"
                  >
                    <ArrowRight
                      size={14}
                      className="text-yellow-400 transition-transform group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nos services */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Nos services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/cours" className="transition hover:text-yellow-400">
                  Cours au centre
                </Link>
              </li>
              <li>
                <Link href="/cours" className="transition hover:text-yellow-400">
                  Stages intensifs
                </Link>
              </li>
              <li>
                <Link href="/cours" className="transition hover:text-yellow-400">
                  Aide aux devoirs
                </Link>
              </li>
              <li>
                <Link href="/cours" className="transition hover:text-yellow-400">
                  Préparation examens
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="mb-5 text-lg font-bold text-white">Nous contacter</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={19} className="mt-0.5 shrink-0 text-yellow-400" />
                <span>
                  Yassa, entrée Genico <br /> Douala, Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={19} className="shrink-0 text-yellow-400" />
                <a href="tel:+237600000000" className="transition hover:text-yellow-400">
                  +237 600 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={19} className="shrink-0 text-yellow-400" />
                <a
                  href="mailto:contact@polytechniquecenter.cm"
                  className="break-all transition hover:text-yellow-400"
                >
                  contact@polytechniquecenter.cm
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-gray-500 sm:flex-row sm:text-sm">
            <p>© {new Date().getFullYear()} Polytechnique Center. Tous droits réservés.</p>
            
            {/* Crédits discrets ajoutés ici */}
            <p className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
              <span>Développé par</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors inline-flex items-center gap-1"
              >
                <FaGithub size={12} /> biloa2005
              </a>
              <span>•</span>
              <a 
                href="mailto:biloaphilemon@gmail.com" 
                className="hover:text-yellow-400 transition-colors"
              >
                biloaphilemon@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
