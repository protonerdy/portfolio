/** @type {import('next').Metadata} */
export const rootMetadata = {
  // metadataBase: new URL('https://dennis-snellenberg-portfolio.vercel.app/'),
  title: {
    template: '%s | Protonicgod',
    default: 'Protonicgod • Freelance Designer & Developer',
  },
  description:
    'Building safe, thriving communities for brands and creators. With over 5 years of experience as a professional Discord Community Manager, I help you engage, moderate, and grow vibrant spaces. © Managed by Protonicgod',
  generator: 'ProtonicGod',
  applicationName: 'ProtonicGod',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Develope', 'Freelance'],
  authors: [
    { name: 'Ali Bagheri', url: 'https://www.github.com/alibagheri2079' },
  ],
  creator: 'Ali Bagheri',
  publisher: 'Ali Bagheri',
  twitter: {
    card: 'summary_large_image',
    title: 'Dennis Snellenberg',
    description:
      'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
    siteId: '1467726470533754880',
    creator: '@AliBagheri2079',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://dennis-snellenberg-portfolio.vercel.app/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
