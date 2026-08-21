import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight, FiArrowUpRight, FiCheck, FiMail, FiMapPin, FiPhone, FiClock,
} from "react-icons/fi";
import {
  HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineChartBar,
  HiOutlineHeart, HiOutlineUserGroup,
} from "react-icons/hi2";
import {
  IoCalculatorOutline, IoBookOutline, IoLanguageOutline,
  IoFlaskOutline, IoLaptopOutline, IoSchoolOutline,
} from "react-icons/io5";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp,
} from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
import { ContactForm } from "./components/contact-form";
import { MobileMenu } from "./components/mobile-menu";

// ─── Data ───────────────────────────────────────────────────────────
const navLinks = [
  ["Accueil", "#accueil"],
  ["À propos", "#a-propos"],
  ["Cours", "#cours"],
  ["Pourquoi nous", "#pourquoi-nous"],
  ["Contact", "#contact"],
];

const stats = [
  { value: "500+", label: "Élèves accompagnés" },
  { value: "6e–Tle", label: "Tous les niveaux" },
  { value: "7+", label: "Matières enseignées" },
  { value: "98%", label: "Taux de satisfaction" },
];

const subjects = [
  { name: "Mathématiques", desc: "Raisonnement, calcul et méthode.", icon: IoCalculatorOutline, color: "bg-[#1a56db]" },
  { name: "Français", desc: "Expression écrite et orale.", icon: IoBookOutline, color: "bg-[#f59e0b]" },
  { name: "Anglais", desc: "Compréhension et communication.", icon: IoLanguageOutline, color: "bg-[#0f172a]" },
  { name: "Sciences", desc: "Physique, chimie et SVT.", icon: IoFlaskOutline, color: "bg-[#1a56db]" },
  { name: "Informatique", desc: "Bases numériques solides.", icon: IoLaptopOutline, color: "bg-[#f59e0b]" },
  { name: "Tous niveaux", desc: "6e jusqu'à la Terminale.", icon: IoSchoolOutline, color: "bg-[#0f172a]" },
];

const reasons = [
  { title: "Suivi personnalisé", desc: "Chaque élève avance à son rythme, avec son propre plan de progression.", icon: HiOutlineHeart },
  { title: "Enseignants qualifiés", desc: "Des formateurs passionnés, pédagogues et rigoureux.", icon: HiOutlineAcademicCap },
  { title: "Méthode prouvée", desc: "4 étapes claires pour transformer les difficultés en acquis.", icon: HiOutlineLightBulb },
  { title: "Résultats visibles", desc: "Des progrès mesurables, séance après séance.", icon: HiOutlineChartBar },
  { title: "Ambiance bienveillante", desc: "Un cadre rassurant qui favorise la concentration.", icon: HiOutlineUserGroup },
];

const steps = [
  { num: "01", title: "Évaluation", desc: "Identifier les acquis, les lacunes et les objectifs de l'élève." },
  { num: "02", title: "Programme", desc: "Construire un plan d'accompagnement adapté à son niveau." },
  { num: "03", title: "Entraînement", desc: "Pratiquer, corriger et consolider les notions clés." },
  { num: "04", title: "Progression", desc: "Mesurer les avancées et préparer les échéances scolaires." },
];

const testimonials = [
  { quote: "Mon fils a retrouvé confiance en quelques semaines. Les explications sont claires et les enseignants très patients.", name: "Mme Eyenga", role: "Parent d'élève · 3e", initial: "E", stars: 5 },
  { quote: "Je comprends enfin les maths ! Je me prépare beaucoup mieux aux contrôles depuis que je suis chez Polytechnique Center.", name: "Marc-Aurèle N.", role: "Élève · 1ère S", initial: "M", stars: 5 },
  { quote: "Un suivi sérieux et bienveillant. On voit les progrès semaine après semaine. Je recommande sans hésiter.", name: "Dr Kamga", role: "Parent d'élève · Terminale", initial: "K", stars: 5 },
];

// ─── Page ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-[#0f172a]">

      {/* ── NAVBAR ────────────────────────────────────────── */}
      <header id="accueil" className="relative border-b border-[#0f172a]/8 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
          <Link href="#accueil" aria-label="Polytechnique Center">
            <Image src="/logo.png" alt="Polytechnique Center" width={130} height={100} priority className="h-auto w-24 sm:w-28" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="nav-link-new text-sm font-bold text-[#64748b] transition-colors hover:text-[#0f172a]">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:+237677769047" className="flex items-center gap-2 text-sm font-semibold text-[#64748b] transition hover:text-[#0f172a]">
              <FiPhone size={15} /> +237 677 76 90 47
            </a>
            <a href="#contact" className="flex items-center gap-2 rounded-xl bg-[#0f172a] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#1a56db] active:scale-[0.97]">
              Nous contacter <FiArrowRight size={14} />
            </a>
          </div>
          <MobileMenu />
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0f172a]">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-5" style={{ background: "radial-gradient(ellipse at 70% 40%, #1a56db 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#f59e0b]/10 blur-3xl" />
          <div className="absolute right-1/4 top-20 h-48 w-48 rounded-full bg-[#1a56db]/15 blur-2xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-10 lg:py-32">
          {/* Left content */}
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="anim-rise mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f59e0b]">
              <PiStarFourFill size={12} />
              Centre de répétition · Yaoundé
            </div>

            {/* Main heading */}
            <h1 className="anim-rise anim-rise-1 display-xl text-white">
              Réussir<br />
              <span className="hl text-white">mieux.</span>
              <br />
              <span className="text-[#1a56db]">Apprendre</span>
              <br />
              <span className="text-[#f59e0b]">mieux.</span>
            </h1>

            {/* Subtext */}
            <p className="anim-rise anim-rise-2 mt-8 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
              Polytechnique Center accompagne chaque élève, de la <strong className="text-white">6e à la Terminale</strong>, avec un soutien pédagogique personnalisé et des enseignants qualifiés.
            </p>

            {/* CTAs */}
            <div className="anim-rise anim-rise-3 mt-10 flex flex-wrap gap-3">
              <a href="#cours" className="flex items-center gap-2 rounded-xl bg-[#f59e0b] px-7 py-3.5 text-sm font-black text-[#0f172a] shadow-lg shadow-[#f59e0b]/20 transition-all hover:bg-[#fcd34d] active:scale-[0.97]">
                Voir nos cours <FiArrowRight size={16} />
              </a>
              <a href="#contact" className="flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/5">
                Nous contacter
              </a>
            </div>

            {/* Checks */}
            <div className="anim-rise anim-rise-3 mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-8">
              {["Tous les niveaux", "Suivi personnalisé", "Méthode éprouvée", "Résultats garantis"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-xs font-semibold text-white/50">
                  <FiCheck size={13} className="text-[#f59e0b]" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="anim-float mx-auto w-full max-w-xs shrink-0 lg:mx-0">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Top yellow bar */}
              <div className="bg-[#f59e0b] p-6 text-[#0f172a]">
                <p className="label-sm text-[#0f172a]/60">Notre promesse</p>
                <p className="mt-3 text-2xl font-black leading-tight">
                  Chaque élève a un potentiel à révéler.
                </p>
              </div>
              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-px bg-white/10">
                {[["6e → Tle", "Niveaux"], ["7+", "Matières"], ["Méthode", "Personnalisée"], ["Yaoundé", "Cameroun"]].map(([val, lab]) => (
                  <div key={lab} className="bg-[#0f172a] p-4">
                    <p className="text-lg font-black text-white">{val}</p>
                    <p className="text-xs text-white/40">{lab}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom angled border */}
        <div className="h-10 w-full bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="bg-[#f59e0b]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#0f172a]/10 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center bg-[#f59e0b] px-6 py-8 text-center">
              <span className="stat-num text-[#0f172a]">{value}</span>
              <span className="mt-1.5 text-xs font-bold text-[#0f172a]/60">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── À PROPOS ──────────────────────────────────────── */}
      <section id="a-propos" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left – text */}
            <div>
              <p className="label-sm text-[#1a56db]">L'approche Polytechnique</p>
              <h2 className="display-md mt-4 text-[#0f172a]">
                Un cadre sérieux.<br />
                <span className="text-[#1a56db]">Une équipe proche.</span>
              </h2>
              <p className="mt-6 text-base leading-7 text-[#64748b]">
                Chez Polytechnique Center, nous croyons qu'un accompagnement de qualité commence par l'écoute. Chaque élève est différent : ses difficultés, son rythme, ses ambitions. Notre rôle est de l'aider à les dépasser.
              </p>
              <a href="#cours" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#1a56db] transition hover:text-[#0f172a]">
                Découvrir nos cours <FiArrowUpRight size={15} />
              </a>
            </div>

            {/* Right – cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "01", title: "Écoute active", bg: "bg-[#0f172a] text-white" },
                { num: "02", title: "Plan sur-mesure", bg: "bg-[#f59e0b] text-[#0f172a]" },
                { num: "03", title: "Pratique régulière", bg: "bg-[#1a56db] text-white" },
                { num: "04", title: "Progression mesurée", bg: "bg-[#f8fafc] text-[#0f172a] border border-[#e2e8f0]" },
              ].map(({ num, title, bg }) => (
                <div key={num} className={`card-lift rounded-2xl p-6 ${bg}`}>
                  <span className="display-md opacity-20">{num}</span>
                  <p className="mt-3 text-sm font-bold leading-snug">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-[#0f172a]/8 bg-[#f8fafc] py-4">
        <div className="ticker-track flex w-max gap-10 whitespace-nowrap">
          {[...Array(2)].map((_, i) =>
            ["Mathématiques", "Français", "Anglais", "Physique-Chimie", "SVT", "Informatique", "Méthode personnalisée", "De la 6e à la Terminale"].map((item) => (
              <span key={`${i}-${item}`} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#64748b]">
                <PiStarFourFill size={10} className="text-[#f59e0b]" /> {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── COURS / MATIÈRES ──────────────────────────────── */}
      <section id="cours" className="bg-[#0f172a] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="label-sm text-[#f59e0b]">Nos matières</p>
              <h2 className="display-md mt-4 text-white">
                Des bases solides<br />
                <span className="text-[#1a56db]">dans chaque discipline.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/40">
              Du collège au lycée, nous adaptons les contenus au programme réel de chaque élève.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map(({ name, desc, icon: Icon, color }) => (
              <div key={name} className="card-lift group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-[#f59e0b]/40">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 60%)" }} />
                <div className={`relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="relative z-10 text-lg font-black text-white">{name}</h3>
                <p className="relative z-10 mt-2 text-sm leading-6 text-white/50">{desc}</p>
                <a href="#contact" className="relative z-10 mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#f59e0b] transition hover:gap-2">
                  En savoir plus <FiArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS ─────────────────────────────────── */}
      <section id="pourquoi-nous" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="label-sm text-[#1a56db]">Pourquoi nous choisir</p>
            <h2 className="display-md mx-auto mt-4 max-w-2xl text-[#0f172a]">
              Faire de la réussite<br />
              <span className="text-[#f59e0b]">une habitude.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={title}
                className={`card-lift rounded-2xl p-7 ${i === 0 ? "bg-[#0f172a] text-white sm:row-span-1" : "border border-[#e2e8f0] bg-white"}`}
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${i === 0 ? "bg-[#f59e0b] text-[#0f172a]" : "bg-[#f8fafc] text-[#1a56db]"}`}>
                  <Icon size={22} />
                </div>
                <h3 className={`mt-5 text-lg font-black ${i === 0 ? "text-white" : "text-[#0f172a]"}`}>{title}</h3>
                <p className={`mt-2.5 text-sm leading-6 ${i === 0 ? "text-white/60" : "text-[#64748b]"}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTHODE ───────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="label-sm text-[#1a56db]">Notre méthode</p>
              <h2 className="display-md mt-4 text-[#0f172a]">
                4 étapes vers<br />
                <span className="text-[#f59e0b]">plus d&apos;autonomie.</span>
              </h2>
              <p className="mt-6 text-sm leading-7 text-[#64748b]">
                Une progression claire, structurée et adaptée à chaque élève pour passer de la difficulté à la maîtrise.
              </p>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#1a56db] via-[#f59e0b] to-transparent hidden sm:block" />

              <div className="space-y-5">
                {steps.map(({ num, title, desc }) => (
                  <div key={num} className="card-lift flex gap-5 rounded-2xl border border-[#e2e8f0] bg-white p-6">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f172a] text-sm font-black text-[#f59e0b]">
                      {num}
                    </div>
                    <div>
                      <h3 className="font-black text-[#0f172a]">{title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-[#64748b]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ───────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-sm text-[#1a56db]">Paroles de familles</p>
              <h2 className="display-md mt-4 text-[#0f172a]">
                La confiance se construit<br />
                <span className="text-[#f59e0b]">dans la durée.</span>
              </h2>
            </div>
            <span className="rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f59e0b] self-start sm:self-auto">
              Témoins · validation en cours
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map(({ quote, name, role, initial, stars }) => (
              <div key={name} className="card-lift flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-7">
                {/* Stars */}
                <div>
                  <div className="mb-5 flex gap-1">
                    {[...Array(stars)].map((_, i) => (
                      <PiStarFourFill key={i} size={13} className="text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-[#64748b] italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
                {/* Author */}
                <div className="mt-8 flex items-center gap-3 border-t border-[#e2e8f0] pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f172a] text-sm font-black text-[#f59e0b]">
                    {initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">{name}</p>
                    <p className="text-xs text-[#94a3b8]">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="bg-[#f59e0b] py-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-14 text-center sm:px-8 md:flex-row md:text-left lg:px-10">
          <div>
            <p className="label-sm text-[#0f172a]/50">Prêt à commencer ?</p>
            <h2 className="display-md mt-3 max-w-xl text-[#0f172a]">
              Le prochain progrès commence par une conversation.
            </h2>
          </div>
          <a
            href="#contact"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-[#0f172a] px-8 py-4 text-sm font-black text-white shadow-xl transition-all hover:bg-[#1a56db] active:scale-[0.97]"
          >
            Parlons de votre besoin <FiArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section id="contact" className="bg-[#0f172a] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
            {/* Left – info */}
            <div>
              <p className="label-sm text-[#f59e0b]">Parlons-nous</p>
              <h2 className="display-md mt-4 text-white">
                Une question ?<br />
                <span className="text-[#1a56db]">Une envie d&apos;avancer ?</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/50">
                Décrivez-nous la situation de l&apos;élève et nous revienrons vers vous rapidement pour définir la meilleure formule d&apos;accompagnement.
              </p>

              {/* Contact cards */}
              <div className="mt-10 space-y-3">
                {[
                  { icon: FiPhone, label: "+237 677 76 90 47", href: "tel:+237677769047" },
                  { icon: FiMail, label: "bonjour@polytechnique-center.com", href: "mailto:bonjour@polytechnique-center.com" },
                  { icon: FiMapPin, label: "Yaoundé, Cameroun", href: "#" },
                  { icon: FiClock, label: "Lun. – Sam. · 8h à 18h", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/80 transition-all hover:border-[#f59e0b]/50 hover:text-white"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f59e0b]/10 text-[#f59e0b]">
                      <Icon size={17} />
                    </div>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right – form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-[#020d1e] py-14 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 border-b border-white/8 pb-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Image src="/logo.png" alt="Polytechnique Center" width={130} height={100} className="h-auto w-28 brightness-[1.8]" />
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
                Cours de répétition et accompagnement scolaire pour tous les élèves, de la 6e à la Terminale au Cameroun.
              </p>
              {/* Socials */}
              <div className="mt-6 flex gap-3">
                {[
                  { icon: FaFacebookF, href: "#", label: "Facebook", color: "hover:bg-[#1877F2]" },
                  { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:bg-[#E1306C]" },
                  { icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
                  { icon: FaWhatsapp, href: "https://wa.me/237677769047", label: "WhatsApp", color: "hover:bg-[#25D366]" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:text-white ${color}`}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="label-sm text-[#f59e0b]">Navigation</h3>
              <div className="mt-5 space-y-3 text-sm text-white/50">
                {navLinks.map(([label, href]) => (
                  <a key={href} href={href} className="block transition hover:text-[#f59e0b]">{label}</a>
                ))}
              </div>
            </div>

            {/* Niveaux */}
            <div>
              <h3 className="label-sm text-[#f59e0b]">Niveaux</h3>
              <div className="mt-5 space-y-3 text-sm text-white/50">
                <p>Collège · 6e à 3e</p>
                <p>Lycée · 2nde à Terminale</p>
                <p>Renforcement de niveau</p>
                <p>Préparation aux examens</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="label-sm text-[#f59e0b]">Contact</h3>
              <div className="mt-5 space-y-3 text-sm text-white/50">
                <a href="mailto:bonjour@polytechnique-center.com" className="block hover:text-[#f59e0b]">Email</a>
                <a href="https://wa.me/237677769047" target="_blank" rel="noopener noreferrer" className="block hover:text-[#f59e0b]">WhatsApp</a>
                <a href="#contact" className="block font-semibold text-[#f59e0b]">Prendre RDV</a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col justify-between gap-3 pt-8 text-xs text-white/30 sm:flex-row">
            <p>© 2026 Polytechnique Center. Tous droits réservés.</p>
            <p>Réussir aujourd&apos;hui, exceller demain.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
