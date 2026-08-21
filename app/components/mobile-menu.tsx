"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Burger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f172a] text-white transition-all duration-200 hover:bg-[#1a56db]"
      >
        <HiMenuAlt3 size={22} />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      {isOpen && (
        <div className="drawer-animate fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-[340px] flex-col bg-[#0f172a] text-white">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <Image src="/logo.png" alt="Polytechnique Center" width={110} height={85} className="h-auto w-24 brightness-200" />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
            >
              <HiX size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-1 p-4">
            {links.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span>{label}</span>
                <FiArrowRight size={15} className="text-[#f59e0b]" />
              </a>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* CTA & Info */}
          <div className="border-t border-white/10 p-5 space-y-4">
            <div className="rounded-xl bg-white/5 p-4">
              <div className="flex items-center gap-2.5 text-[#f59e0b] text-xs font-bold uppercase tracking-widest mb-2">
                <IoSchoolOutline size={15} />
                <span>Accompagnement</span>
              </div>
              <p className="text-sm font-semibold text-white">De la 6e à la Terminale</p>
              <p className="text-xs text-white/40 mt-1">Yaoundé, Cameroun</p>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f59e0b] py-3.5 text-sm font-bold text-[#0f172a] transition-all hover:bg-[#fcd34d]"
            >
              Prendre contact <FiArrowRight size={15} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
