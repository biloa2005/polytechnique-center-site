# Polytechnique Center

Site web officiel de **Polytechnique Center**, centre de cours de répétition fondé par des étudiants de l'École Nationale Supérieure Polytechnique de Douala (ENSPD), Cameroun.

Le site présente le centre, ses formules de cours, ses matières, son équipe fondatrice et permet aux parents et aux élèves de le contacter facilement, sur mobile comme sur ordinateur.

---

## Aperçu

- **Site en ligne** : https://polytechniquecenter.vercel.app/
- **Centres** : PK16, Logbessou, PK20

---

## Fonctionnalités

- **Navbar responsive** : Accueil, À propos, Cours, Matières, Contact, avec menu mobile et bouton Contact mis en avant.
- **Présentation du centre** : mission, vision et accompagnement des apprenants.
- **Formules proposées** :
  - Soutien hebdomadaire (cours réguliers à l'année)
  - Stages intensifs (pendant les vacances scolaires)
  - Aide aux devoirs et étude dirigée (après l'école)
  - Préparation aux examens (Brevet, Baccalauréat, etc.)
- **Section « Membres fondateurs »** : slider animé avec défilement automatique, photos non rognées, miniatures synchronisées et navigation tactile.
- **Animations fluides** à l'apparition des sections et lors des changements de slide.
- **Optimisation des images** avec `next/image` (format WebP recommandé).
- **Design 100 % responsive** : mobile, tablette et grand écran.

---

## Technologies utilisées

| Catégorie | Outils |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) |
| Langage | [TypeScript](https://www.typescriptlang.org/) |
| Interface | [React](https://react.dev/) |
| Style | [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Carrousel | [Swiper](https://swiperjs.com/) |
| Icônes | [Lucide React](https://lucide.dev/) |

---

## Installation

### Prérequis

- [Node.js](https://nodejs.org/) node 24.12.0
- npm (ou yarn / pnpm)
- [Git](https://git-scm.com/)

### Étapes

```bash
# 1. Cloner le dépôt
git clone <url-du-depot>
cd polytechnique-center

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site est ensuite disponible sur [http://localhost:3000](http://localhost:3000).

---

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère la version de production |
| `npm run start` | Démarre le site en mode production (après `build`) |
| `npm run lint` | Vérifie la qualité du code avec ESLint |

---


## Auteur

Développé par **Biloa Philemon Armand**, étudiant en Génie Logiciel à l'ENSPD, avec l'équipe fondatrice de Polytechnique Center.

---

## Licence

Projet réalisé pour Polytechnique Center. Tous droits réservés.