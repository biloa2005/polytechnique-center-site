
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  BookOpen,
  GraduationCap,
  Info,
  Phone,
} from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "À propos", href: "/a-propos", icon: Info },
  { name: "Cours", href: "/cours", icon: GraduationCap },
  { name: "Matières", href: "/matieres", icon: BookOpen },
  { name: "Modalités", href: "/modalites", icon: BookOpen },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white shadow-md">
      <div className="navbar mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="navbar-start flex-1">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Logo Polytechnique Center"
              width={55}
              height={55}
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
              priority
            />

            <div className="flex flex-col">
              <span className="text-base font-extrabold text-blue-800 sm:text-xl">
                Polytechnique
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-yellow-500 sm:text-xs">
                CENTER
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="rounded-lg px-4 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact desktop */}
        <div className="navbar-end hidden flex-1 justify-end lg:flex">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 font-bold text-blue-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:text-white hover:shadow-lg"
          >
            <Phone size={18} />
            Contact
          </Link>
        </div>

        {/* Bouton burger mobile */}
        <div className="flex flex-1 justify-end lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-blue-900 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-700"
          >
            {isOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={30} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile en superposition */}
      {isOpen && (
        <>
          {/* Fond semi-transparent */}
          <div
            className="fixed inset-0 top-[68px] z-[90] bg-black/40 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panneau de navigation */}
         <div
  id="mobile-menu"
  className="absolute left-3 right-3 top-[calc(100%+12px)] z-[100] rounded-2xl border border-gray-100 bg-white shadow-xl lg:hidden"
>
            <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
              <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                Navigation
              </p>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 rounded-xl px-4 py-3.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                          <Icon size={19} />
                        </span>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Contact mobile */}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 font-bold text-blue-950 shadow-sm transition-all duration-300 hover:bg-blue-700 hover:text-white"
                >
                  <Phone size={19} />
                  Nous contacter
                </Link>
              </div>

              <p className="mt-5 text-center text-xs text-gray-400">
                Polytechnique Center Votre réussite, notre priorité
              </p>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}