import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
	<head></head>
    
	<body  className={twMerge('bg-background', inter.className)}>
    <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
	 
	  <main>
      
  {children}
                <Toaster /></main>
         
      </ThemeProvider>
	</body>
    </html>
    
  );
}1