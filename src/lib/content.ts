import { getEntry } from "astro:content";

export async function getPageContent(slug: string) {
  const entry = await getEntry("pages", slug);

  if (!entry) {
    throw new Error(`Page content not found for slug: ${slug}`);
  }

  return entry;
}