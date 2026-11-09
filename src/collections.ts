import { getCollection } from 'astro:content';

/** All artworks, in Works-page order (by `order`, then title). */
export async function getWorks() {
  const works = await getCollection('works');
  return works.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** Exhibitions/prizes/events, newest first; undated items go last. */
export async function getExhibitions() {
  const items = await getCollection('exhibitions');
  const key = (e: (typeof items)[number]) =>
    e.data.date?.getTime() ?? (e.data.year ? Date.UTC(e.data.year, 0, 1) : -Infinity);
  return items.sort((a, b) => key(b) - key(a) || a.data.title.localeCompare(b.data.title));
}
