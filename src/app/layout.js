import localFont from 'next/font/local'

import { Inter } from 'next/font/google'
import './globals.css'
import TopNav from '@/shared/topNav/TopNav'
import Header from '@/shared/header/Header'
import Navbar from '@/shared/navbar/Navbar'
import Footer from '@/shared/footer/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThemeConfig from "@/utilities/themeConfig/ThemeConfig";
import BackToTop from '@/utilities/backToTop/BackToTop'
import AuthProvider from '@/context/AuthProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

const myFont = localFont({
  src: '../../public/Century-Gothic.ttf',
  display: 'swap',
})

export const metadata = {
  title: 'The Korean Mall - Korean Cosmetics and Skin Care Products',
  description: 'The Korean Mall Bangladesh is a skin care company whose motto is providing the most effective and selective Korean cosmetics according to the consumer’s skin concerns. Korean Mall always ensure the safest and authentic K-Beauty products to the shoppers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <meta name="keywords" content="Korean Mall, Korean Cosmetics, Korean Skin Care Products, Korean Beauty Products, K-beauty, Korean Makeup, Korean Hair Care, Korean Face Masks, Korean Beauty Brands, Buy Korean Cosmetics Online, Korean Beauty Shop, Best Korean Beauty Products, Korean Skincare Routine, Korean Beauty Online Store, Korean Beauty Supplies, Affordable Korean Beauty Products, Korean Beauty Trends, Korean Beauty Secrets" />
      <meta content='https://koreanmallbd.org' name='url' />
      <meta property="og:title" content="The Korean Mall - Korean Cosmetics and Skin Care Products" />
      <meta property="og:url" content="https://koreanmallbd.org" />
      <meta property="og:image" content="http://res.cloudinary.com/dksi7q3so/image/upload/v1688992935/DesktopBannerImages/1688992933510-banner3_ndikod.webp" />
      <body className={myFont.className}>
        <AuthProvider>
          <ThemeConfig />
          <BackToTop />
          <TopNav />
          <Header />
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}
