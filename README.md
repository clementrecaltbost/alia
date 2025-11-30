# Alia WebApp

Ce projet implémente les pages d'authentification d'Alia basées sur le design Figma : connexion, inscription et récupération de mot de passe.

## Installation

Installez les dépendances :

```bash
npm install
```

## Développement

Lancez le serveur de développement :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## Build

Pour créer une version de production :

```bash
npm run build
```

## Routes disponibles

- `/login` - Page de connexion (route par défaut)
- `/register` - Page d'inscription
- `/forgot-password` - Page de récupération de mot de passe

## Technologies utilisées

- React 18
- React Router DOM 6
- Vite
- Tailwind CSS
- PostCSS

## Optimisations de performance

- **Images locales** : Toutes les images sont stockées localement dans `public/assets/` pour un chargement instantané
- **Preloading** : Les images critiques sont préchargées dans le HTML et via un composant React
- **Priorité de chargement** : Les images importantes utilisent `fetchPriority="high"` et `loading="eager"`

## Structure du projet

```
├── src/
│   ├── components/
│   │   ├── Login.jsx          # Page de connexion
│   │   ├── Register.jsx        # Page d'inscription
│   │   ├── ForgotPassword.jsx  # Page de récupération de mot de passe
│   │   ├── AliaLogo.jsx       # Composant du logo Alia
│   │   └── SideNav.jsx        # Composant de la barre latérale (partagé)
│   ├── App.jsx                # Composant racine avec routing
│   ├── main.jsx               # Point d'entrée de l'application
│   └── index.css              # Styles globaux et Tailwind
├── index.html                 # Fichier HTML principal
├── package.json               # Dépendances du projet
├── vite.config.js             # Configuration Vite
├── tailwind.config.js         # Configuration Tailwind
└── postcss.config.js          # Configuration PostCSS
```

