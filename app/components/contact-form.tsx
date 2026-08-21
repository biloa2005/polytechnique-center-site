"use client";

import { FormEvent, useState } from "react";
import { FiSend, FiUser, FiMail, FiPhone, FiBookOpen, FiCheckCircle, FiLoader } from "react-icons/fi";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    }, 1300);
  }

  if (status === "success") {
    return (
      <div className="anim-fade flex min-h-[28rem] flex-col items-center justify-center border border-[#1f4f73]/20 bg-[#20252b] p-10 text-center text-white">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#e7c3a5]">
          <FiCheckCircle size={30} className="text-[#20252b]" strokeWidth={2.5} />
        </div>
        <h3 className="text-2xl font-black">Message envoyé !</h3>
        <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
          Notre équipe pédagogique reviendra vers vous très rapidement pour définir ensemble le meilleur accompagnement.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-none border border-white/20 px-6 py-2.5 text-sm font-bold text-white/70 transition hover:border-[#e7c3a5] hover:text-[#e7c3a5]"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  const fieldClass = "w-full rounded-none border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:border-[#e7c3a5] focus:ring-2 focus:ring-[#e7c3a5]/20";
  const iconClass = "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-white/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-[#20252b] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Nom */}
        <div className="space-y-1.5">
          <label className="label-sm text-white/50">Votre nom</label>
          <div className="relative">
            <div className={iconClass}><FiUser size={16} /></div>
            <input required name="name" type="text" placeholder="Nom complet" disabled={status === "loading"}
              className={`${fieldClass} pl-10`} />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="label-sm text-white/50">Email</label>
          <div className="relative">
            <div className={iconClass}><FiMail size={16} /></div>
            <input required name="email" type="email" placeholder="vous@exemple.com" disabled={status === "loading"}
              className={`${fieldClass} pl-10`} />
          </div>
        </div>

        {/* Téléphone */}
        <div className="space-y-1.5">
          <label className="label-sm text-white/50">Téléphone</label>
          <div className="relative">
            <div className={iconClass}><FiPhone size={16} /></div>
            <input name="phone" type="tel" placeholder="+237 ..." disabled={status === "loading"}
              className={`${fieldClass} pl-10`} />
          </div>
        </div>

        {/* Niveau */}
        <div className="space-y-1.5">
          <label className="label-sm text-white/50">Niveau de l&apos;élève</label>
          <div className="relative">
            <div className={iconClass}><FiBookOpen size={16} /></div>
            <select required name="level" defaultValue="" disabled={status === "loading"}
              className={`${fieldClass} pl-10 appearance-none`}>
              <option value="" disabled className="bg-[#20252b]">Choisir un niveau</option>
              <option className="bg-[#20252b]">Primaire</option>
              <option className="bg-[#20252b]">Collège</option>
              <option className="bg-[#20252b]">Lycée</option>
              <option className="bg-[#20252b]">Études supérieures</option>
              <option className="bg-[#20252b]">Je ne sais pas encore</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5 sm:col-span-2">
          <label className="label-sm text-white/50">Votre message</label>
          <textarea required name="message" rows={4} placeholder="Décrivez les besoins de l'élève..."
            disabled={status === "loading"} className={`${fieldClass} resize-none`} />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center gap-2.5 rounded-none bg-[#e5b83f] px-7 py-3.5 text-sm font-black text-[#20252b] shadow-lg shadow-[#e5b83f]/20 transition-all hover:bg-[#c9961f] active:scale-[0.97] disabled:opacity-60"
        >
          {status === "loading" ? (
            <><FiLoader size={16} className="animate-spin" /> Envoi...</>
          ) : (
            <><FiSend size={16} /> Envoyer ma demande</>
          )}
        </button>
        <p className="text-xs text-white/30">Aucune inscription automatique.</p>
      </div>
    </form>
  );
}