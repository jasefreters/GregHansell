/**
 * Site-wide settings. Edit this file to change the site name, tagline,
 * contact email, gallery and social links.
 */
export const SITE = {
  name: 'Greg Hansell',
  tagline: 'Australian painter · Hawkesbury, NSW',
  description:
    'Greg Hansell is an Australian painter working in handmade earth pastels and oil, based at Windsor in the Hawkesbury region of New South Wales.',
  locale: 'en_AU',

  /** Greg's public contact email, e.g. 'studio@example.com'. Leave '' to hide it. */
  email: '',

  /** Gallery that currently shows and sells Greg's work. Leave url '' to hide it. */
  gallery: {
    name: 'Purple Noon Gallery',
    place: 'Freemans Reach, NSW',
    url: 'https://purplenoongallery.com.au/artists/greg-hansell/',
  },

  /** Social links. Leave `url` as '' to hide a link. */
  socials: [
    { label: 'Instagram', url: '' },
    { label: 'Facebook', url: '' },
  ],
};

/** Main navigation, in the order it appears in the header. */
export const NAV = [
  { label: 'Works', href: '/works/' },
  { label: 'Exhibitions', href: '/exhibitions/' },
  { label: 'Book', href: '/book/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
