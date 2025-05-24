// src/app/blog/[slug]/page.tsx
"use client";

import { SiteContainer } from "@/components/layout/SiteContainer";
import { ArticlePage } from "@/components/sections/blog/ArticlePage";
import { getArticleBySlug, getRelatedArticles } from "@/lib/blog/articles";
import { MobileCallButton } from "@/components/ui/mobile-call-button";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

// Contenu Markdown d'exemple pour les articles
const articleContents: Record<string, string> = {
  'grippe-prevention-2025': `# Prévenir la grippe : guide complet 2025

La saison grippale approche et il est essentiel de se préparer efficacement. En tant que pharmaciens experts, nous vous accompagnons avec nos meilleurs conseils pour passer un hiver en bonne santé.

## Pourquoi se faire vacciner ?

La vaccination reste le moyen le plus efficace de se protéger contre la grippe. Cette année, le vaccin a été adapté aux souches circulantes et offre une protection optimale.

### Les bénéfices de la vaccination

- **Protection personnelle** : Réduction de 40 à 60% du risque de contracter la grippe
- **Protection collective** : Participation à l'immunité de groupe
- **Prévention des complications** : Diminution des risques d'hospitalisation

## Les gestes barrières essentiels

Au-delà de la vaccination, adopter les bons réflexes au quotidien est crucial :

### Hygiène des mains
- Se laver les mains régulièrement avec du savon pendant 30 secondes
- Utiliser une solution hydroalcoolique si nécessaire
- Éviter de toucher son visage avec des mains non lavées

### Port du masque
Dans les situations à risque (transports en commun, lieux bondés), le port du masque reste recommandé, particulièrement pour les personnes fragiles.

## Renforcer son système immunitaire

### Alimentation équilibrée
- **Vitamine C** : Agrumes, kiwis, brocolis
- **Vitamine D** : Poissons gras, œufs, exposition solaire modérée
- **Zinc** : Fruits de mer, graines de courge, légumineuses

### Sommeil de qualité
Un sommeil réparateur de 7 à 8 heures par nuit est essentiel pour maintenir un système immunitaire efficace.

## Que faire en cas de symptômes ?

Si malgré toutes ces précautions vous ressentez des symptômes grippaux :

1. **Isolez-vous** pour éviter la contagion
2. **Consultez un professionnel de santé** si nécessaire
3. **Hydratez-vous** abondamment
4. **Reposez-vous** jusqu'à la guérison complète

## Notre accompagnement à la pharmacie

À la Grande Pharmacie des Salines, nous proposons :

- **Vaccination antigrippale** sans rendez-vous
- **Conseils personnalisés** selon votre profil
- **Gamme complète** de produits pour l'hiver
- **Suivi de vos traitements** si nécessaire

N'hésitez pas à nous rendre visite ou à prendre rendez-vous pour un conseil personnalisé.

---

*Cet article a été rédigé par nos pharmaciens experts et mis à jour en janvier 2025. Pour toute question spécifique, contactez-nous au 04 95 22 28 31.*`,

  'medicaments-generiques-guide': `# Médicaments génériques : tout comprendre

Les médicaments génériques suscitent encore des interrogations chez de nombreux patients. En tant que pharmaciens, nous vous expliquons tout ce qu'il faut savoir pour faire des choix éclairés.

## Qu'est-ce qu'un médicament générique ?

Un médicament générique est une copie d'un médicament de marque (appelé "princeps") dont le brevet a expiré. Il contient la même substance active, à la même dose, sous la même forme pharmaceutique.

### Les garanties d'efficacité

- **Même substance active** : Identique au médicament d'origine
- **Bioéquivalence démontrée** : Même effet thérapeutique
- **Contrôles rigoureux** : Mêmes exigences de qualité

## Pourquoi choisir les génériques ?

### Avantages économiques
- **Prix réduit** : 20 à 30% moins cher en moyenne
- **Économies pour l'Assurance Maladie** : Meilleur remboursement
- **Budget santé maîtrisé** : Reste à charge diminué

### Même qualité thérapeutique
Les génériques subissent les mêmes contrôles de qualité que les médicaments d'origine et sont produits selon les mêmes standards.

## Différences avec les médicaments de marque

### Ce qui peut changer
- **Aspect** : Couleur, forme, taille du comprimé
- **Excipients** : Composants non actifs (colorants, conservateurs)
- **Conditionnement** : Boîte, notice

### Ce qui reste identique
- **Substance active** : Molécule thérapeutique
- **Dosage** : Concentration du principe actif
- **Efficacité** : Même effet thérapeutique

## Conseils de nos pharmaciens

### Questions fréquentes
- **"Puis-je refuser un générique ?"** : Oui, mais le remboursement sera moindre
- **"Les génériques sont-ils moins efficaces ?"** : Non, ils ont la même efficacité
- **"Puis-je alterner entre générique et princeps ?"** : Consultez votre pharmacien

### Notre accompagnement
Nous prenons le temps de vous expliquer les changements et de répondre à toutes vos questions concernant vos traitements génériques.

---

*Article rédigé avec l'expertise de nos pharmaciens pour vous aider à mieux comprendre les médicaments génériques.*`,

  'sommeil-qualite-conseils': `# 7 conseils pour un sommeil réparateur

Un bon sommeil est essentiel pour votre santé physique et mentale. Découvrez nos conseils d'experts pour améliorer la qualité de vos nuits.

## L'importance du sommeil

Le sommeil joue un rôle crucial dans :
- **Récupération physique** : Réparation des tissus
- **Consolidation de la mémoire** : Apprentissage
- **Régulation hormonale** : Équilibre métabolique
- **Renforcement immunitaire** : Défenses naturelles

## Nos 7 conseils essentiels

### 1. Respecter un horaire régulier
Couchez-vous et levez-vous à heures fixes, même le week-end. Votre horloge biologique vous remerciera.

### 2. Créer un environnement propice
- **Température** : 18-20°C idéalement
- **Obscurité** : Rideaux occultants ou masque
- **Silence** : Bouchons d'oreilles si nécessaire
- **Literie** : Matelas et oreillers de qualité

### 3. Éviter les écrans avant le coucher
La lumière bleue perturbe la production de mélatonine. Arrêtez les écrans 1h avant le coucher.

### 4. Adopter une routine apaisante
- **Lecture** : Livre léger et relaxant
- **Tisane** : Camomille, tilleul, mélisse
- **Relaxation** : Méditation ou respiration profonde

### 5. Surveiller votre alimentation
- **Éviter** : Caféine après 16h, repas copieux le soir
- **Privilégier** : Dîner léger 2-3h avant le coucher
- **Limiter** : Alcool qui fragmente le sommeil

### 6. Faire de l'exercice régulièrement
L'activité physique améliore la qualité du sommeil, mais évitez le sport intense en soirée.

### 7. Gérer le stress et les préoccupations
Tenez un journal ou pratiquez des techniques de relaxation pour calmer votre mental.

## Quand consulter ?

Consultez un professionnel si vous ressentez :
- Difficultés d'endormissement persistantes
- Réveils fréquents dans la nuit
- Fatigue au réveil malgré une nuit complète
- Somnolence diurne excessive

## Solutions naturelles à la pharmacie

Nous proposons une gamme de produits naturels pour favoriser le sommeil :
- **Phytothérapie** : Valériane, passiflore, aubépine
- **Aromathérapie** : Huiles essentielles relaxantes
- **Compléments** : Mélatonine, magnésium

Notre équipe vous conseille selon vos besoins spécifiques.

---

*Conseils élaborés par notre équipe pharmaceutique pour vous aider à retrouver un sommeil de qualité.*`
};

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(params.slug, 3);
  const content = articleContents[params.slug] || '';

  return (
    <SiteContainer>
      <ArticlePage 
        article={article}
        relatedArticles={relatedArticles}
        content={content}
      />
      <MobileCallButton />
    </SiteContainer>
  );
}