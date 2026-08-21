import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Laptop2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Target,
  Star,
  // Facebook,
  // Instagram,
  // Linkedin,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { ContactForm } from "./components/contact-form";
import { MobileMenu } from "./components/mobile-menu";

const navLinks = [
  ["Accueil", "#accueil"],
  ["À propos", "#a-propos"],
  ["Nos cours", "#cours"],
  ["Pourquoi nous", "#pourquoi-nous"],
  ["Contact", "#contact"],
];

const subjects = [
  { name: "Mathématiques", note: "Comprendre les méthodes, raisonner avec confiance.", icon: Target },
  { name: "Français", note: "Gagner en clarté, à l’écrit comme à l’oral.", icon: BookOpen },
  { name: "Anglais", note: "Progresser à son rythme et oser s’exprimer.", icon: MessageCircle },
  { name: "Sciences", note: "Physique, chimie et SVT abordées avec méthode.", icon: FlaskConical },
  { name: "Informatique", note: "Construire des bases solides pour la suite.", icon: Laptop2 },
];

const reasons = [
  ["Un accompagnement vraiment personnalisé", "Chaque élève part de son niveau, de ses objectifs et de ses questions.", HeartHandshake],
  ["Des enseignants qui transmettent", "Des explications patientes, des méthodes claires et une exigence bienveillante.", GraduationCap],
  ["Un suivi qui rend les progrès visibles", "Les acquis sont consolidés séance après séance, jusqu’à l’autonomie.", CheckCircle2],
];

const steps = [
  ["01", "Évaluer", "Identifier les acquis, les blocages et les objectifs de l’élève."],
  ["02", "Construire", "Mettre en place un accompagnement adapté à son rythme."],
  ["03", "S’entraîner", "Pratiquer, corriger et transformer les erreurs en progrès."],
  ["04", "Progresser", "Mesurer les avancées et préparer sereinement les échéances."],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f8fbff] text-[#1e293b]">
      {/* Navbar / Header */}
      <header className="relative border-b border-[#0b55b7]/10 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
          <Link href="#accueil" className="relative z-10 flex items-center transition-transform duration-300 hover:scale-[1.03]" aria-label="Polytechnique Center, accueil">
            <Image src="/logo.png" alt="Polytechnique Center" width={120} height={92} priority className="h-auto w-24 sm:w-28" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="nav-link text-sm font-bold text-[#536783] transition duration-200 hover:text-[#0b55b7]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="btn h-11 rounded-xl border-0 bg-[#f7c832] px-6 text-sm font-bold text-[#1e293b] shadow-md shadow-[#f7c832]/20 hover:bg-[#e9b719] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              Prendre contact <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative isolate overflow-hidden bg-white pb-20 pt-28 sm:pb-28 sm:pt-36">
        {/* Graphismes d'arrière-plan */}
        <div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-gradient-to-b from-[#eef5ff] to-[#f8fbff] opacity-60" />
        <div className="absolute -right-32 top-20 -z-10 h-[28rem] w-[28rem] rounded-full border-[34px] border-[#0b55b7]/8 sm:h-[40rem] sm:w-[40rem] animate-pulse-soft" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-[#f7c832]/60 bg-[#fff8db] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6800]">
              <Sparkles size={14} className="text-[#f7c832] animate-spin" style={{ animationDuration: '4s' }} /> L’exigence qui fait grandir
            </div>
            <h1 className="animate-rise animate-rise-delay-1 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-[#1e293b] sm:text-7xl">
              Réussir mieux.<br />
              <span className="text-[#0b55b7]">Apprendre mieux.</span>
            </h1>
            <p className="animate-rise animate-rise-delay-2 mt-6 max-w-xl text-base leading-8 text-[#536783] sm:text-lg">
              Polytechnique Center accompagne chaque élève, de la 6e à la Terminale, pour comprendre ses cours, structurer sa méthode de travail et préparer son avenir avec confiance.
            </p>

            <div className="animate-rise animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cours"
                className="btn h-13 rounded-xl border-0 bg-[#f7c832] px-6 font-bold text-[#1e293b] shadow-lg shadow-[#f7c832]/25 hover:bg-[#e9b719] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
              >
                Découvrir nos cours <ArrowRight size={17} />
              </a>
              <a
                href="#contact"
                className="btn h-13 rounded-xl border border-[#0b55b7]/20 bg-white px-6 font-bold text-[#0b55b7] hover:border-[#0b55b7] hover:bg-[#e7f0fb] active:scale-[0.98] transition-all duration-200 flex items-center justify-center"
              >
                Nous contacter
              </a>
            </div>

            <div className="animate-rise animate-rise-delay-3 mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#dbe7f5] pt-6 text-sm text-[#536783]">
              <span className="flex items-center gap-2 font-semibold">
                <Check size={16} className="text-[#0b55b7]" /> Tous les niveaux de la 6e à la Terminale
              </span>
              <span className="flex items-center gap-2 font-semibold">
                <Check size={16} className="text-[#0b55b7]" /> Accompagnement pédagogique sur mesure
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            {/* Forme décorative */}
            <div className="animate-drift absolute -left-5 top-12 hidden h-16 w-16 rounded-2xl bg-[#f7c832] sm:block opacity-90 shadow-md" />

            {/* Carte Promesse */}
            <div className="relative rounded-[2rem] bg-[#0b55b7] p-3.5 shadow-2xl shadow-[#1e293b]/15 transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-300">
              <div className="rounded-[1.5rem] bg-[#f7c832] p-8 text-[#1e293b] sm:p-10 shadow-inner">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1e293b]/70">Notre engagement</p>
                <p className="mt-8 font-display text-4xl font-extrabold leading-none sm:text-5xl">
                  Chaque élève a un potentiel à révéler.
                </p>
                <div className="mt-12 flex items-center justify-between border-t border-[#1e293b]/10 pt-5">
                  <span className="text-sm font-bold uppercase tracking-wider">6e → Terminale</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <GraduationCap size={28} className="text-[#1e293b]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Badge Objectif flottant */}
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-white px-5 py-4 text-[#1e293b] shadow-premium border border-[#dbe7f5] sm:-right-6 transform hover:translate-y-[-2px] transition-transform duration-200">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f0fb] text-[#0b55b7]">
                  <Target size={19} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8b9ab0]">Objectif</p>
                  <p className="text-sm font-bold">Progresser avec méthode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 pt-16 text-xs font-bold uppercase tracking-[0.2em] text-[#7b8ca3] sm:px-8 lg:px-10">
          <span className="h-0.5 w-10 bg-[#f7c832]" /> Polytechnique Center · Répétition & Accompagnement Scolaire
        </div>
      </section>

      {/* À propos Section */}
      <section id="a-propos" className="bg-white py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10">
          <div>
            <p className="eyebrow">L’approche Polytechnique</p>
            <h2 className="section-title mt-4 text-[#1e293b]">
              Le sérieux d’un cadre.<br />
              <span className="text-[#0b55b7]">La proximité d’une équipe.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-[#536783]">
              Nous croyons qu’un soutien de qualité commence par une écoute attentive. Chez Polytechnique Center, nous créons un espace rassurant où chaque élève peut poser ses questions sans crainte, assimiler les méthodes de travail et progresser sereinement vers l’excellence.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-[#f8fbff] p-6 shadow-premium-hover">
                <span className="font-display text-4xl font-extrabold text-[#0b55b7] block">01</span>
                <p className="mt-3 text-sm font-bold leading-5 text-[#1e293b]">Un cadre propice à la concentration</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-[#f8fbff] p-6 shadow-premium-hover">
                <span className="font-display text-4xl font-extrabold text-[#0b55b7] block">02</span>
                <p className="mt-3 text-sm font-bold leading-5 text-[#1e293b]">Des explications qui font sens</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-[#f8fbff] p-6 shadow-premium-hover">
                <span className="font-display text-4xl font-extrabold text-[#0b55b7] block">03</span>
                <p className="mt-3 text-sm font-bold leading-5 text-[#1e293b]">Une progression mesurée et suivie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos cours (Subjects) Section */}
      <section id="cours" className="bg-[#f8fbff] py-24 sm:py-32 border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Un accompagnement complet</p>
              <h2 className="section-title mt-4 text-[#1e293b]">
                Des bases solides,<br />
                <span className="text-[#0b55b7]">dans chaque matière.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#536783]">
              Du collège au lycée, nous personnalisons les séances selon le programme de l’élève pour cibler directement ses lacunes.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {subjects.map(({ name, note, icon: Icon }, index) => (
              <article
                key={name}
                className={`group rounded-3xl border p-7 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${index === 0
                  ? "border-0 bg-gradient-to-br from-[#0b55b7] to-[#1e293b] text-white shadow-xl shadow-[#0b55b7]/15"
                  : "border-[#dbe7f5]/80 bg-white text-[#1e293b]"
                  }`}
              >
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${index === 0 ? "bg-[#f7c832] text-[#1e293b]" : "bg-[#e7f0fb] text-[#0b55b7]"
                    }`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-extrabold">{name}</h3>
                  <p className={`mt-3 text-sm leading-6 ${index === 0 ? "text-blue-100/85" : "text-[#536783]"}`}>
                    {note}
                  </p>
                </div>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${index === 0 ? "text-[#f7c832] hover:text-[#ffdb65]" : "text-[#0b55b7] hover:text-[#1e293b]"
                    }`}
                >
                  En savoir plus
                  <ChevronRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section id="pourquoi-nous" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Pourquoi nous choisir</p>
            <h2 className="section-title mt-4 text-[#1e293b]">
              Faire de la progression<br />
              une <span className="text-[#0b55b7]">habitude.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {reasons.map(([title, text, Icon], index) => {
              const ReasonIcon = Icon as typeof Target;
              return (
                <article
                  key={title as string}
                  className="rounded-2xl border-l-4 border-[#f7c832] bg-[#f8fbff]/70 p-6 sm:p-8 shadow-premium hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#0b55b7] shadow-sm border border-slate-100">
                    <ReasonIcon size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-[#1e293b] leading-snug">
                    {title as string}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#536783]">
                    {text as string}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Méthode Pédagogique */}
      <section className="bg-[#1e293b] py-24 text-white sm:py-32 relative overflow-hidden">
        {/* Glow décoratif */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#f7c832]/5 blur-[80px]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#f7c832]">Notre méthode</p>
            <h2 className="section-title mt-4 text-white">
              Un chemin clair vers<br />
              <span className="text-[#f7c832]">plus d’autonomie.</span>
            </h2>
          </div>

          {/* Grille/Timeline interactive */}
          <div className="mt-16 grid gap-8 md:grid-cols-4 relative">
            {/* Ligne horizontale de liaison sur Desktop */}
            <div className="absolute top-[2.25rem] left-[10%] right-[10%] hidden h-[2px] bg-white/10 md:block" />

            {steps.map(([number, title, text]) => (
              <div key={number} className="relative group">
                {/* Icône / Bulle de numéro */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#0b55b7] border-4 border-[#1e293b] shadow-lg group-hover:bg-[#f7c832] transition-colors duration-300">
                  <span className="font-display text-lg font-bold text-[#f7c832] group-hover:text-[#1e293b] transition-colors duration-300">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white tracking-wide">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/70 max-w-xs">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Paroles de familles</p>
              <h2 className="section-title mt-4 text-[#1e293b]">
                La confiance se construit<br />
                <span className="text-[#0b55b7]">dans la durée.</span>
              </h2>
            </div>
            <span className="rounded-full bg-[#fff5cf] border border-[#f7c832]/30 px-4 py-2 text-xs font-bold text-[#8a6800] uppercase tracking-wider self-start sm:self-auto">
              Contenu témoin · validation en cours
            </span>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "L’accompagnement a permis à notre enfant de mieux s’organiser, de comprendre ses lacunes et de retrouver un dialogue serein autour des évaluations.",
                author: "Mme M. Eyenga",
                info: "Parent d’élève (3e)",
                stars: 5,
                initial: "E"
              },
              {
                quote: "Les explications sont beaucoup plus claires qu’en grand groupe. Je me sens beaucoup plus en confiance pour travailler mes exercices seul.",
                author: "Marc-Aurèle N.",
                info: "Élève accompagné (1ère S)",
                stars: 5,
                initial: "M"
              },
              {
                quote: "Un cadre de travail sérieux et une pédagogie bienveillante qui aide réellement à voir les progrès, semaine après semaine.",
                author: "Dr J. Kamga",
                info: "Parent d’élève (Terminale)",
                stars: 5,
                initial: "K"
              }
            ].map(({ quote, author, info, stars, initial }, i) => (
              <article
                key={i}
                className="rounded-3xl border border-[#dbe7f5]/70 bg-[#f8fbff]/30 p-8 shadow-premium hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Étoiles dorées */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(stars)].map((_, idx) => (
                      <Star key={idx} size={15} className="fill-[#f7c832] text-[#f7c832]" />
                    ))}
                  </div>

                  <Quote className="text-[#f7c832]/60" size={30} />
                  <p className="mt-4 text-sm leading-7 text-[#536783] italic">
                    « {quote} »
                  </p>
                </div>

                {/* Profil de l'auteur */}
                <div className="mt-8 flex items-center gap-3.5 border-t border-[#dbe7f5]/50 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f0fb] text-[#0b55b7] font-extrabold text-sm shadow-sm border border-white">
                    {initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1e293b]">{author}</p>
                    <p className="text-xs text-[#7b8ca3] font-semibold">{info}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Premium */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#1e293b] to-[#0b55b7] p-8 sm:p-12 md:p-16 text-white shadow-2xl border border-white/5">
            {/* Cercles luminescents en arrière-plan */}
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[#f7c832]/10 blur-3xl" />
            <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-[#ffffff]/5 blur-2xl" />

            <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f7c832]">Prêt à commencer ?</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl text-white">
                  Le prochain progrès de votre enfant commence par une simple discussion.
                </h2>
                <p className="mt-3 text-sm text-blue-100/80">
                  Contactez-nous pour réaliser un bilan pédagogique rapide et gratuit.
                </p>
              </div>
              <a
                href="#contact"
                className="btn h-13 rounded-xl border-0 bg-[#f7c832] px-7 font-bold text-[#1e293b] hover:bg-[#e9b719] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 self-start md:self-auto cursor-pointer shadow-lg shadow-[#f7c832]/10"
              >
                Parlons de votre besoin <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#f8fbff] py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:px-10">
          <div>
            <p className="eyebrow">Échangeons</p>
            <h2 className="section-title mt-4 text-[#1e293b]">
              Une question ?<br />
              <span className="text-[#0b55b7]">Une envie d’avancer ?</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#536783]">
              Échangeons sur le niveau actuel, les points de blocage et le rythme scolaire de votre enfant pour définir ensemble la formule adaptée.
            </p>

            {/* Détails de contact sous forme de micro-cartes */}
            <div className="mt-12 space-y-4">
              <a
                href="tel:+237600000000"
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-premium hover:border-[#0b55b7] transition-all duration-200 text-[#1e293b] font-bold text-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f0fb] text-[#0b55b7]">
                  <Phone size={18} />
                </div>
                <span>+237 6 00 00 00 00</span>
              </a>

              <a
                href="mailto:bonjour@polytechnique-center.com"
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-premium hover:border-[#0b55b7] transition-all duration-200 text-[#1e293b] font-bold text-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f0fb] text-[#0b55b7]">
                  <Mail size={18} />
                </div>
                <span>bonjour@polytechnique-center.com</span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-premium text-[#1e293b] font-bold text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f0fb] text-[#0b55b7]">
                  <MapPin size={18} />
                </div>
                <span>Yaoundé, Cameroun</span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-premium text-[#1e293b] font-bold text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f0fb] text-[#0b55b7]">
                  <Clock3 size={18} />
                </div>
                <span>Lun. - Sam. · 8h à 18h</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-white/5 bg-[#031433] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Colonnes du footer */}
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* Brand */}
            <div>
              <Image
                src="/logo.png"
                alt="Polytechnique Center"
                width={140}
                height={108}
                className="h-auto w-32 filter brightness-105"
              />

              <p className="mt-6 max-w-xs text-sm leading-7 text-blue-100/60">
                Accompagnement scolaire de référence pour tous les élèves,
                de la 6e à la Terminale, au Cameroun.
              </p>

              {/* Réseaux sociaux */}
              <div className="mt-6 flex gap-3">

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-100/70 transition-all duration-300 hover:bg-[#1877F2] hover:text-white"
                >
                  <FaFacebookF size={17} />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-100/70 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FCAF45] hover:text-white"
                >
                  <FaInstagram size={18} />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-100/70 transition-all duration-300 hover:bg-[#0A66C2] hover:text-white"
                >
                  <FaLinkedinIn size={17} />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/237600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-100/70 transition-all duration-300 hover:bg-[#25D366] hover:text-white"
                >
                  <FaWhatsapp size={18} />
                </a>

              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#f7c832]">
                Navigation
              </h3>

              <div className="mt-6 space-y-3.5 text-sm text-blue-100/60">
                {navLinks.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block transition hover:text-[#f7c832]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Niveaux */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#f7c832]">
                Niveaux
              </h3>

              <div className="mt-6 space-y-3.5 text-sm text-blue-100/60">
                <p>Collège · 6e à 3e</p>
                <p>Lycée · 2nde à Terminale</p>
                <p>Renforcement de niveau</p>
                <p>Préparation aux examens</p>
              </div>
            </div>

            {/* Échanges */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#f7c832]">
                Échanges
              </h3>

              <div className="mt-6 space-y-3.5 text-sm text-blue-100/60">
                <a
                  href="mailto:bonjour@polytechnique-center.com"
                  className="block hover:text-[#f7c832]"
                >
                  bonjour@polytechnique-center.com
                </a>

                <a
                  href="https://wa.me/237600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#f7c832]"
                >
                  WhatsApp Support
                </a>

                <a
                  href="#contact"
                  className="block font-semibold text-[#f7c832] hover:text-[#f7c832]"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-blue-100/40 sm:flex-row">
            <p>
              © 2026 Polytechnique Center. Tous droits réservés.
            </p>

            <p className="flex items-center gap-1.5">
              <span>Réussir aujourd’hui, exceller demain.</span>
            </p>
          </div>

        </div>
      </footer>
    </main>
  );
}
