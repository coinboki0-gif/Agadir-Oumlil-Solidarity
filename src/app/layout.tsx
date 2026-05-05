import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Association Agadir Oumlil | جمعية أكادير أوملال',
  description: 'Association Agadir Oumlil for Development and Solidarity - Serving vulnerable communities in Taroudant, Morocco.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20">{children}</body>
    </html>
  );
}
