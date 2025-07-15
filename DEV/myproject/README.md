# Motiv Sport - Landing Page

Une landing page moderne et responsive pour Motiv Sport, l'application qui connecte les passionnés de sport.

## 🚀 Fonctionnalités

- **Design responsive** : Optimisé pour mobile, tablette et desktop
- **Animations fluides** : Logo animé et transitions élégantes
- **Vidéo d'arrière-plan** : Présentation immersive de l'application
- **Section équipe** : Présentation des fondateurs avec liens sociaux
- **Interface moderne** : Utilisation de Tailwind CSS pour un design épuré

## 🛠️ Technologies utilisées

- **Next.js 15** : Framework React pour le développement web
- **TypeScript** : Typage statique pour un code plus robuste
- **Tailwind CSS** : Framework CSS utilitaire pour le design
- **React 19** : Bibliothèque JavaScript pour l'interface utilisateur

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/VidadTol/Motiv-Sport-LandingPage.git
cd Motiv-Sport-LandingPage/DEV/myproject
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🚀 Déploiement sur Vercel

Cette landing page est optimisée pour un déploiement facile sur Vercel :

1. Connectez votre repository GitHub à Vercel
2. Configurez le dossier racine sur `DEV/myproject`
3. Vercel détectera automatiquement Next.js et configurera le build

### Configuration Vercel

- **Framework Preset** : Next.js
- **Root Directory** : `DEV/myproject`
- **Build Command** : `npm run build`
- **Output Directory** : `.next`

## 📁 Structure du projet

```
DEV/myproject/
├── app/
│   ├── page.tsx              # Page principale (landing page)
│   ├── layout.tsx            # Layout global
│   ├── globals.css           # Styles globaux
│   └── home/
│       └── components/       # Composants de la landing page
│           ├── NavLink.tsx   # Navigation
│           ├── Cookies.tsx   # Gestion des cookies
│           └── TextSection.tsx # Sections de contenu
├── public/                   # Assets statiques (images, vidéos)
├── components/               # Composants UI réutilisables
└── lib/                     # Utilitaires
```

## 🎨 Personnalisation

### Couleurs

Le thème utilise principalement :
- **Vert** : `from-green-500 to-green-700`
- **Bleu** : `from-blue-200 to-blue-600`
- **Dégradés** : Transitions fluides entre les couleurs

### Contenu

Modifiez le contenu dans `app/page.tsx` :
- Titre et descriptions des sections
- Informations de l'équipe
- Liens sociaux

## 👥 Équipe

- **David Tolza** - Chef de projet & Développeur full-stack
  - [LinkedIn](https://www.linkedin.com/in/david-tolza/)
  - [GitHub](https://github.com/VidadTol)

- **Jordan Baroux** - Chef de projet & Développeur full-stack
  - [LinkedIn](https://www.linkedin.com/in/jordan-baroux/)
  - [GitHub](https://github.com/JoBEph)

## 📄 Licence

Ce projet est développé dans le cadre de la formation Holberton School.

## 🔗 Liens utiles

- [Holberton School](https://www.holbertonschool.fr/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
