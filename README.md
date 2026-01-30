# Netflix Project

## Description
Projet de cours Netflix - Une application de streaming vidéo inspirée de Netflix.

## Fonctionnalités
- Interface utilisateur moderne et responsive
- Catalogue de films et séries
- Système de recherche
- Lecture vidéo
- Gestion des profils utilisateurs

## Technologies utilisées
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js / Python (à définir)
- Base de données: MongoDB / PostgreSQL (à définir)

## Architecture Front-end - Les 3 couches

### 1. Couche de Présentation (HTML)
Structure et contenu sémantique de l'application :
- Définition des éléments visuels (titres, sections, images, vidéos)
- Organisation hiérarchique du contenu
- Accessibilité et sémantique web
- Formulaires et éléments interactifs

### 2. Couche de Style (CSS)
Apparence et mise en page :
- Design responsive et adaptation multi-écrans
- Styles visuels (couleurs, typographie, espacements)
- Animations et transitions
- Grilles et layouts (Flexbox, Grid)
- Thèmes (clair/sombre)

### 3. Couche Logique (JavaScript)
Comportement dynamique et interactivité :
- Gestion des événements utilisateurs (clics, scroll, etc.)
- Manipulation du DOM
- Communication avec l'API backend (fetch/axios)
- Gestion d'état de l'application
- Logique métier côté client
- Routage et navigation

## Page d'Accueil - Éléments Principaux

### En-tête (Header)
- **Logo Netflix** : Lien vers la page d'accueil
- **Menu de navigation** : Accueil, Séries, Films, Nouveautés, Ma liste
- **Barre de recherche** : Icône avec champ de recherche extensible
- **Icônes utilisateur** : Notifications, profil avec menu déroulant

### Section Hero (Bannière principale)
- **Contenu mis en avant** : Film ou série du moment en grand format
- **Image de fond** : Visuel haute qualité avec dégradé
- **Informations** : Titre, description courte, note
- **Boutons d'action** :
  - Lecture (▶ Lire)
  - Plus d'infos (ⓘ Plus d'infos)
- **Badges** : Top 10, Nouveau, Tendance

### Carrousels de Contenu
Plusieurs rangées scrollables horizontalement :
- **Tendances actuelles** : Contenus populaires du moment
- **Nouveautés** : Derniers ajouts à la plateforme
- **Top 10** : Classement avec badges numérotés
- **Continuer à regarder** : Reprendre où vous en étiez avec barre de progression
- **Ma liste** : Contenus sauvegardés par l'utilisateur
- **Recommandations personnalisées** : "Parce que vous avez aimé..."
- **Catégories** : Action, Comédie, Documentaires, etc.

### Cartes de Contenu (Vignettes)
Pour chaque film/série :
- **Miniature** : Image de couverture attractive
- **Au survol (hover)** :
  - Agrandissement de la carte
  - Lecture automatique de la bande-annonce (muet)
  - Boutons : Lire, Ajouter à ma liste, J'aime/Je n'aime pas
  - Informations : Durée, année, note de correspondance, catégorie
  - Genres et description courte

### Pied de page (Footer)
- **Liens** : Centre d'aide, Conditions d'utilisation, Confidentialité
- **Réseaux sociaux** : Icônes Facebook, Instagram, Twitter, YouTube
- **Sélecteur de langue**
- **Informations légales**

### Fonctionnalités Interactives
- **Scroll infini** : Chargement progressif du contenu
- **Navigation au clavier** : Flèches pour les carrousels
- **Animations fluides** : Transitions smooth entre les états
- **Responsive** : Adaptation mobile, tablette, desktop

```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Installer les dépendances
npm install
# ou
pip install -r requirements.txt
```

## Utilisation

```bash
# Démarrer l'application
npm start
# ou
python app.py
```

## Structure du projet

```
Netflix/
├── README.md
├── src/
├── public/
└── config/
```

## Auteur
Thurian

## Licence

Ce projet est à des fins éducatives.
