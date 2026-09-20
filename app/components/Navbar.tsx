"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  BookOpen,
  Building2,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  Menu,
  Phone,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Données de navigation : modifie ici les libellés, liens et icônes  */
/* ------------------------------------------------------------------ */

type SubItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

type NavItem = {
  label: string;
  href?: string;
  children?: SubItem[];
  align?: "left" | "right"; // côté d'ancrage du sous-menu sur desktop
  cta?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  {
    label: "Nos formules",
    children: [
      {
        label: "Soutien hebdomadaire",
        description: "Cours réguliers à l'année",
        href: "/formules/soutien-hebdomadaire",
        icon: CalendarDays,
      },
      {
        label: "Préparation aux concours",
        description: "ENSPD, Facultée de medecine, IUT...",
        href: "/formules/stages-intensifs",
        icon: Zap,
      },
      {
        label: "Aide aux devoirs & Étude dirigée",
        description: "Après l'école a domicile",
        href: "/formules/aide-aux-devoirs",
        icon: BookOpen,
      },
      {
        label: "Préparation aux examens",
        description: "Brevet, Bac, etc.",
        href: "/formules/preparation-examens",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    label: "Le Centre",
    align: "right",
    children: [
      { label: "Le Centre", href: "/le-centre", icon: Building2 },
      { label: "Notre équipe", href: "/equipe", icon: Users },
    ],
  },
  { label: "Contact", href: "/contact", cta: true },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const DESKTOP_QUERY = "(min-width: 1024px)"; // = breakpoint Tailwind `lg`

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12233f]";

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const pathname = usePathname();
  const navId = useId();
  const headerRef = useRef<HTMLElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href?: string) =>
    !!href &&
    (href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/"));

  // Ferme tout lors d'un changement de page
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Ombre sous la barre dès qu'on scrolle
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Clic à l'extérieur + touche Échap
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Bloque le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Referme le menu mobile si on passe en affichage desktop
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Survol : uniquement souris + écran desktop
  const canHover = (e: ReactPointerEvent) =>
    e.pointerType === "mouse" && window.matchMedia(DESKTOP_QUERY).matches;

  const onTriggerClick = (e: ReactMouseEvent, label: string) => {
    const pointerType = (e.nativeEvent as PointerEvent).pointerType;
    // Sur desktop, le survol a déjà ouvert le menu : un clic souris le garde ouvert
    if (pointerType === "mouse" && window.matchMedia(DESKTOP_QUERY).matches) {
      setOpenMenu(label);
      return;
    }
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <header
      ref={headerRef}
      className={cx(
        "sticky top-0 z-50 border-b border-slate-200 bg-white transition-shadow motion-reduce:transition-none",
        scrolled && "shadow-[0_8px_22px_-14px_rgba(18,35,63,0.45)]"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5 lg:h-[72px]">
        {/* ---------- Logo ---------- */}
        <Link
          href="/"
          aria-label="Polytechnique Center, retour à l'accueil"
          className={cx(
            "inline-flex items-center gap-2.5 rounded-lg text-[#12233f]",
            focusRing
          )}
        >
          {/* Remplace ce bloc par ton vrai logo (ex. <Image />) */}
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#12233f] text-[#f2b705]">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-[1.05]">
            <span className="text-[17px] font-extrabold tracking-tight">
              Polytechnique
            </span>
            <span className="text-[13px] font-semibold text-slate-500">
              Center
            </span>
          </span>
        </Link>

        {/* ---------- Bouton burger (mobile) ---------- */}
        <button
          type="button"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          aria-controls={navId}
          onClick={() => setMobileOpen((o) => !o)}
          className={cx(
            "inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-[#12233f] hover:bg-slate-100 lg:hidden",
            focusRing
          )}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* ---------- Navigation ---------- */}
        <nav
          id={navId}
          aria-label="Navigation principale"
          className={cx(
            // mobile : panneau plein écran sous la barre
            "fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-slate-200 bg-white px-5 pb-8 pt-2",
            mobileOpen ? "block" : "hidden",
            // desktop : barre horizontale classique
            "lg:static lg:block lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0"
          )}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
            {NAV_ITEMS.map((item, index) => {
              /* ----- Élément avec sous-menu ----- */
              if (item.children) {
                const open = openMenu === item.label;
                const menuId = `${navId}-menu-${index}`;
                const childActive = item.children.some((c) => isActive(c.href));

                return (
                  <li
                    key={item.label}
                    className="relative border-b border-slate-200 lg:border-0"
                    onPointerEnter={(e) => canHover(e) && setOpenMenu(item.label)}
                    onPointerLeave={(e) =>
                      canHover(e) &&
                      setOpenMenu((prev) => (prev === item.label ? null : prev))
                    }
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                        setOpenMenu((prev) => (prev === item.label ? null : prev));
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={menuId}
                      onClick={(e) => onTriggerClick(e, item.label)}
                      className={cx(
                        linkBase,
                        childActive ? linkActive : "text-slate-800",
                        focusRing
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={cx(
                          "h-4 w-4 transition-transform motion-reduce:transition-none",
                          open && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Le wrapper porte un padding-top qui évite de perdre le survol */}
                    <div
                      id={menuId}
                      className={cx(
                        "lg:absolute lg:top-full lg:pt-2 lg:transition-[opacity,transform,visibility] lg:duration-150 motion-reduce:lg:transition-none",
                        item.align === "right" ? "lg:right-0" : "lg:left-0",
                        open
                          ? "block lg:visible lg:translate-y-0 lg:opacity-100"
                          : "hidden lg:block lg:invisible lg:-translate-y-1 lg:opacity-0"
                      )}
                    >
                      <ul className="mb-3 ml-1 border-l-[3px] border-[#f2b705] pl-3 lg:mb-0 lg:ml-0 lg:w-[340px] lg:rounded-xl lg:border lg:border-slate-200 lg:bg-white lg:p-2 lg:shadow-[0_18px_40px_-18px_rgba(18,35,63,0.4)]">
                        {item.children.map((child) => {
                          const Icon = child.icon;
                          const current = isActive(child.href);
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={current ? "page" : undefined}
                                className={cx(
                                  "flex items-start gap-3 rounded-lg px-2 py-3 hover:bg-slate-100 lg:px-3",
                                  current && "shadow-[inset_3px_0_0_#f2b705]",
                                  focusRing
                                )}
                              >
                                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#12233f]/5 text-[#12233f]">
                                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                                </span>
                                <span className="flex flex-col gap-0.5">
                                  <span className="text-[15px] font-semibold leading-snug text-[#12233f]">
                                    {child.label}
                                  </span>
                                  {child.description && (
                                    <span className="text-[13px] text-slate-500">
                                      {child.description}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }

              /* ----- Bouton d'action (Contact) ----- */
              if (item.cta) {
                return (
                  <li key={item.label} className="pt-5 lg:pt-0">
                    <Link
                      href={item.href!}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cx(
                        "inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#f2b705] px-5 py-3.5 text-base font-bold text-[#12233f] transition-colors hover:bg-[#dea500] motion-reduce:transition-none lg:ml-2 lg:w-auto lg:py-2.5 lg:text-[15px]",
                        focusRing
                      )}
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                );
              }

              /* ----- Lien simple ----- */
              return (
                <li
                  key={item.label}
                  className="border-b border-slate-200 lg:border-0"
                >
                  <Link
                    href={item.href!}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cx(
                      linkBase,
                      isActive(item.href) ? linkActive : "text-slate-800",
                      focusRing
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Classes partagées par les liens et les boutons de sous-menu        */
/* ------------------------------------------------------------------ */

const linkBase =
  "relative inline-flex w-full items-center justify-between gap-1.5 px-1 py-4 text-[17px] font-medium hover:text-[#12233f] lg:w-auto lg:justify-start lg:rounded-lg lg:px-3 lg:py-2.5 lg:text-[15px] lg:hover:bg-slate-100";

// Soulignement jaune : court sous le texte sur mobile, pleine largeur sur desktop
const linkActive =
  "font-semibold text-[#12233f] after:absolute after:bottom-2 after:left-1 after:h-[3px] after:w-7 after:rounded after:bg-[#f2b705] after:content-[''] lg:after:bottom-1 lg:after:left-3 lg:after:right-3 lg:after:w-auto";
