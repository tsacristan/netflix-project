# Netflix Project - Frontend User

Application frontend utilisateur pour le projet Netflix, construite avec React, Vite et Tailwind CSS.

## Structure du Projet

```
frontend-user/
├── src/
│   ├── App.jsx              # Composant principal de l'application
│   ├── App.css              # Styles du composant App
│   ├── main.jsx             # Point d'entrée de l'application
│   ├── index.css            # Styles globaux
│   ├── assets/              # Images, icônes et autres ressources
│   ├── components/          # Composants réutilisables
│   │   ├── common/          # Composants communs
│   │   ├── layout/          # Composants de mise en page
│   │   └── movies/          # Composants liés aux films
│   ├── context/             # Contextes React
│   ├── pages/               # Pages de l'application
│   ├── services/            # Services API
│   └── utils/               # Fonctions utilitaires
├── public/                  # Ressources publiques statiques
├── index.html               # Template HTML principal
├── package.json             # Dépendances et scripts
├── vite.config.js           # Configuration Vite
└── eslint.config.js         # Configuration ESLint
```

## Technologies Utilisées

- **React** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **ESLint** - Linter JavaScript

## Installation

```bash
npm install
```

## Scripts Disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Linter le code
npm run lint
```

## Configuration Vite

Ce template utilise [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) avec Babel pour le Fast Refresh.

## Développement

Le serveur de développement démarre sur `http://localhost:5173` par défaut.

