import { getCollection } from 'astro:content';

/** All artworks, in Works-page order (by `order`, then title). */
export async function getWorks() {
  const works = await getCollection('works');
  return works.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

type Exhibition = Awaited<ReturnType<typeof getCollection<'exhibitions'>>>[number];

/** Sort key: exact date, else 1 January of the year; undated items last. */
const when = (e: Exhibition) =>
  e.data.date?.getTime() ?? (e.data.year ? Date.UTC(e.data.year, 0, 1) : -Infinity);

/** Exhibitions, prizes, awards and events, newest first. */
export async function getExhibitions() {
  const items = await getCollection('exhibitions');
  return items.sort((a, b) => when(b) - when(a) || a.data.title.localeCompare(b.data.title));
}
