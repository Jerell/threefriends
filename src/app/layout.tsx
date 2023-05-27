import './globals.css';
import { Charis_SIL } from 'next/font/google';
import clsxm from '@/lib/clsxm';
import Header from '@/components/Header';

const charis = Charis_SIL({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-charis',
});

export const metadata = {
  title: '3f | three friends',
  description: 'cookin up a lil something',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={clsxm([
          charis.className,
          'flex flex-col items-center justify-between pb-1',
        ])}
      >
        <Header />
        <main className='flex h-full w-full grow flex-col items-center p-2'>
          {children}
        </main>
      </body>
    </html>
  );
}
