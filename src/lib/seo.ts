// src/lib/seo.ts
import { Metadata } from "next";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Génère les métadonnées SEO pour chaque page
 */
export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/og-image.jpg", // Image par défaut pour le partage social
  noIndex = false,
}: PageSEOProps): Metadata {
  // URL de base du site
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grandepharmaciedessalines.com";
  
  // URL canonique complète
  const url = `${baseUrl}${path}`;
  
  // Image OG avec URL complète
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;
  
  return {
    title: `${title} | Grande Pharmacie des Salines`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Grande Pharmacie des Salines",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    metadataBase: new URL(baseUrl),
  };
}

/**
 * Métadonnées pour la page d'accueil
 */
export const homeMetadata = generatePageMetadata({
  title: "Pharmacie à Ajaccio",
  description: "La Grande Pharmacie des Salines à Ajaccio vous accueille avec une équipe de professionnels pour vous conseiller et vous accompagner dans votre parcours de santé.",
  path: "/",
});

/**
 * Métadonnées pour la page Présentation
 */
export const presentationMetadata = generatePageMetadata({
  title: "Notre histoire et nos valeurs",
  description: "Découvrez l'histoire de la Grande Pharmacie des Salines à Ajaccio, notre équipe de professionnels qualifiés et les valeurs qui guident notre travail au quotidien.",
  path: "/presentation",
});

/**
 * Métadonnées pour la page Services
 */
export const servicesMetadata = generatePageMetadata({
  title: "Nos services pharmaceutiques",
  description: "La Grande Pharmacie des Salines à Ajaccio propose une gamme complète de services pharmaceutiques : conseil personnalisé, préparations magistrales, vaccinations et plus encore.",
  path: "/services",
});

/**
 * Métadonnées pour la page Contact
 */
export const contactMetadata = generatePageMetadata({
  title: "Nous contacter",
  description: "Contactez la Grande Pharmacie des Salines à Ajaccio. Nos coordonnées, horaires d'ouverture et formulaire de contact pour toutes vos questions.",
  path: "/contact",
});

/**
 * Métadonnées pour la page Mentions légales
 */
export const legalMetadata = generatePageMetadata({
  title: "Mentions légales",
  description: "Mentions légales et informations réglementaires concernant le site internet de la Grande Pharmacie des Salines à Ajaccio.",
  path: "/mentions-legales",
});

/**
 * Métadonnées pour la page Politique de confidentialité
 */
export const privacyMetadata = generatePageMetadata({
  title: "Politique de confidentialité",
  description: "Découvrez comment la Grande Pharmacie des Salines à Ajaccio protège vos données personnelles et respecte votre vie privée.",
  path: "/politique-confidentialite",
});