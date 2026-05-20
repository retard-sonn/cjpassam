import type {Metadata} from 'next';
import { Inter, JetBrains_Mono, Bowlby_One, Oswald } from 'next/font/google';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const bowlby = Bowlby_One({ weight: '400', subsets: ['latin'], variable: '--font-display' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-condensed' });

export const metadata: Metadata = {
  title: 'Cockroach Janta Party - Assam Wing',
  description: 'The Voice of the Lazy and Unemployed. Assam Edition.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${bowlby.variable} ${oswald.variable} scroll-smooth`}>
      <body className="bg-[#F4EBD7] text-[#1A1108] font-sans antialiased min-h-screen flex flex-col selection:bg-[#E0651E] selection:text-[#F4EBD7]" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
