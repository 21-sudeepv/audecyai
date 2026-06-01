import './globals.css';

export const metadata = {
  title: 'Audecy AI — Intelligence, Engineered for Outcomes.',
  description: 'Audecy AI: Premier consulting and product development agency. We design and build enterprise AI, machine learning models, and automated business solutions.',
  keywords: 'AI, Machine Learning, Automation, Business Consulting, Product Development, Audecy AI',
  openGraph: {
    title: 'Audecy AI — Intelligence. Built.',
    description: 'Premier consulting and product development agency for enterprise AI and automation.',
    type: 'website',
    url: 'https://audecyai.com',
  },
  icons: {
    icon: '/logo.png',
  },
};

export const viewport = {
  themeColor: '#080808',
};

import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#080808" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400&family=Outfit:wght@300;400;500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Mono:wght@400&family=Outfit:wght@300;400;500&display=swap"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
