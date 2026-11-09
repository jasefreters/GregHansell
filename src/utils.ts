/**
 * Prefix an internal path with the site's base path ("/GregHansell"),
 * so links keep working on GitHub Pages and on a custom domain.
 *
 *   url('/about/')  ->  '/GregHansell/about/'
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** True when `href` is the current page (or a section the page sits under). */
export function isCurrent(href: string, pathname: string): boolean {
  const target = url(href);
  if (href === '/') return pathname === target || pathname === url('');
  return pathname.startsWith(target);
}
