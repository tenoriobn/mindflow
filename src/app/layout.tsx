import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mindflowdigital.vercel.app'),
  title: {
    default: 'MindFlow | Clareza mental, foco e produtividade com leveza',
    template: '%s | MindFlow',
  },

  description:
    'Desenvolva foco, clareza mental e produtividade com equilíbrio. Descubra o Método MindFlow e transforme sua rotina com leveza, intenção e resultados reais.',

  applicationName: 'MindFlow',

  referrer: 'origin-when-cross-origin',

  keywords: [
    'MindFlow',
    'produtividade',
    'clareza mental',
    'foco',
    'bem-estar',
    'equilíbrio emocional',
    'rotina saudável',
    'mindfulness',
    'organização mental',
    'alta performance',
    'produtividade leve',
    'neurociência',
    'desenvolvimento pessoal',
  ],

  authors: [
    {
      name: 'MindFlow',
      url: 'https://mindflowdigital.vercel.app',
    },
  ],

  creator: 'MindFlow',
  publisher: 'MindFlow',
  category: 'health',
  classification: 'Bem-estar, produtividade e desenvolvimento pessoal',

  alternates: {
    canonical: 'https://mindflowdigital.vercel.app',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mindflowdigital.vercel.app',
    siteName: 'MindFlow',
    title: 'MindFlow | Clareza mental, foco e produtividade com leveza',
    description:
      'Transforme sua rotina com mais foco, equilíbrio e clareza mental através do Método MindFlow.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MindFlow — Clareza mental, foco e produtividade com leveza',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MindFlow | Clareza mental, foco e produtividade com leveza',
    description: 'Descubra uma nova forma de viver com foco, leveza e produtividade real.',
    images: ['/images/og-image.jpg'],
    creator: '@mindflow',
  },

  icons: {
    icon: [{ url: '/icons/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/icons/favicon.svg'],
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#cdcddd',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={`${inter.variable} h-full antialiased`}>
      <body className={`${inter.className} flex min-h-full flex-col bg-slate-300`}>{children}</body>
    </html>
  );
}
