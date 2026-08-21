"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import Image from "next/image";

const links = [
  ["Accueil", "#accueil"],
  ["À propos", "#a-propos"],
  ["Cours", "#cours"],
  ["Pourquoi nous", "#pourquoi-nous"],
  ["Contact", "#contact"],
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* ==============================
          BOUTON BURGER
      =============================== */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={isOpen}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-lg
          border-2
          border-[#1f4f73]
          bg-[#1f4f73]
          text-white
          shadow-lg
          transition-all
          duration-200
          hover:bg-[#20252b]
          hover:scale-105
          active:scale-95
        "
      >
        <HiMenuAlt3 size={25} />
      </button>

      {/* ==============================
          MENU RENDU DIRECTEMENT DANS BODY
      =============================== */}
      {mounted &&
        createPortal(
          <>
            {/* OVERLAY */}
            <div
              onClick={() => setIsOpen(false)}
              className={`
                fixed
                inset-0
                z-[99998]
                bg-black
                transition-opacity
                duration-300
                ${isOpen
                  ? "pointer-events-auto opacity-70"
                  : "pointer-events-none opacity-0"
                }
              `}
            />

            {/* DRAWER */}
            <aside
              id="mobile-navigation-drawer"
              className={`
                fixed
                right-0
                top-0
                z-[99999]
                flex
                h-[100dvh]
                w-[85vw]
                max-w-[340px]
                flex-col
                overflow-y-auto
                border-l-4
                border-[#e5b83f]
                text-white
                shadow-2xl
                transition-transform
                duration-300
                ease-out
                ${isOpen
                  ? "translate-x-0"
                  : "translate-x-full"
                }
              `}
              style={{
                background: "#20252b",
                backgroundColor: "#20252b",
                opacity: 1,
                visibility: "visible",
              }}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <Image
                  src="/logo.png"
                  alt="Polytechnique Center"
                  width={110}
                  height={85}
                  priority
                  className="h-auto w-24"
                />

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fermer le menu"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                    text-white
                    transition
                    hover:bg-white/20
                  "
                >
                  <HiX size={23} />
                </button>
              </div>

              {/* NAVIGATION */}
              <nav className="flex flex-col gap-1 p-4">
                {links.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-4
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      duration-200
                      hover:bg-white/10
                    "
                  >
                    <span>{label}</span>

                    <FiArrowRight
                      size={16}
                      className="
                        text-[#e5b83f]
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </a>
                ))}
              </nav>

              {/* ESPACE */}
              <div className="flex-1" />

              {/* BAS */}
              <div className="space-y-4 border-t border-white/10 p-5">
                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-[#292f36]
                    p-4
                  "
                >
                  <div
                    className="
                      mb-2
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#e5b83f]
                    "
                  >
                    <IoSchoolOutline size={16} />

                    <span>Accompagnement</span>
                  </div>

                  <p className="text-sm font-semibold text-white">
                    Cours pour toutes les classes
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    Douala, Cameroun
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#e5b83f]
                    py-3.5
                    text-sm
                    font-bold
                    text-[#20252b]
                    transition-all
                    hover:bg-[#c9961f]
                  "
                >
                  Prendre contact

                  <FiArrowRight size={16} />
                </a>
              </div>
            </aside>
          </>,
          document.body
        )}
    </>
  );
}