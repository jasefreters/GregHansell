/**
 * Site-wide settings. Edit this file to change the site name, tagline,
 * contact email and social links shown in the header and footer.
 */
export const SITE = {
  name: 'Greg Hansell',
  tagline: 'Pastel paintings of Australian light',
  description:
    'Greg Hansell is an Australian artist working in pastel, based in the Hawkesbury region of New South Wales.',
  locale: 'en_AU',

  /**
   * PLACEHOLDER: add Greg's public contact email, e.g. 'studio@example.com'.
   * Leave as an empty string ('') to hide the email link everywhere.
   */
  email: '',

  /**
   * PLACEHOLDER: add social links. Delete any you don't need.
   * Leave `url` empty ('') to hide that link.
   */
  socials: [
    { label: 'Instagram', url: '' },
    { label: 'Facebook', url: '' },
  ],
};

/** Main navigation, in the order it appears in the header. */
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Works', href: '/works/' },
  { label: 'Exhibitions', href: '/exhibitions/' },
  { label: 'Book', href: '/book/' },
  { label: 'Contact', href: '/contact/' },
];
