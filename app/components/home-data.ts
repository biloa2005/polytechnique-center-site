import type { LucideIcon } from "lucide-react";
import { BookOpen, Check, FlaskConical, GraduationCap, HeartHandshake, Laptop2, MessageCircle, Target } from "lucide-react";

export const navigationLinks = [["Accueil", "#accueil"], ["Notre approche", "#a-propos"], ["Les matières", "#cours"], ["La méthode", "#pourquoi-nous"], ["Contact", "#contact"]] as const;

export const subjects: { name: string; description: string; icon: LucideIcon }[] = [
  { name: "Mathématiques", description: "Comprendre, raisonner, résoudre.", icon: Target },
  { name: "Français", description: "Écrire et s’exprimer avec précision.", icon: BookOpen },
  { name: "Anglais", description: "Progresser et prendre la parole.", icon: MessageCircle },
  { name: "Sciences", description: "Observer, expérimenter, démontrer.", icon: FlaskConical },
  { name: "Informatique", description: "Apprendre les bases pour construire.", icon: Laptop2 },
];

export const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Un accompagnement attentif", description: "Chaque élève est écouté, compris et accompagné depuis son niveau réel.", icon: HeartHandshake },
  { title: "Des méthodes qui restent", description: "Des explications claires et des habitudes de travail qui rendent autonome.", icon: GraduationCap },
  { title: "Des progrès que l’on mesure", description: "Un suivi régulier pour rendre les acquis visibles et garder le cap.", icon: Check },
];
