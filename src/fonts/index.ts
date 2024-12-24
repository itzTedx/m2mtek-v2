import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

export const aloevera = localFont({
  src: [
    {
      path: './aloevera/AloeveraDisplay-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './aloevera/AloeveraDisplay-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './aloevera/AloeveraDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './aloevera/AloeveraDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './aloevera/AloeveraDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './aloevera/AloeveraDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './aloevera/AloeveraDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './aloevera/AloeveraDisplay-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './aloevera/AloeveraDisplay-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-aloevera',
})
