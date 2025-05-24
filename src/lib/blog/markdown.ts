// src/lib/blog/markdown.ts
import fs from 'fs';
import path from 'path';

// Fonction pour lire un fichier Markdown depuis le dossier content
export async function readMarkdownFile(slug: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'articles', `${slug}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier ${slug}.md:`, error);
    return '';
  }
}

// Alternative pour lire depuis le côté client (si fichiers publics)
export async function readMarkdownFromPublic(slug: string): Promise<string> {
  try {
    const response = await fetch(`/articles/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Fichier non trouvé: ${slug}.md`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Erreur lors de la lecture du fichier ${slug}.md:`, error);
    return '';
  }
}