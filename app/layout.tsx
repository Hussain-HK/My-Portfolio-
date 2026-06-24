import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hakeem Hussain — Senior BI Developer',
  description:
    'Portfolio of Hakeem Hussain — Senior Business Intelligence Developer with 7+ years experience in Power BI, DAX, SQL, and Python. Microsoft Certified Data Analyst.',
  keywords: [
    'Power BI',
    'DAX',
    'Business Intelligence',
    'Data Analyst',
    'SQL',
    'Python',
    'Data Visualization',
    'Microsoft Certified',
    'Power Automate',
    'Tableau',
  ],
  authors: [{ name: 'Hakeem Hussain' }],
  openGraph: {
    title: 'Hakeem Hussain — Senior BI Developer',
    description: 'Transforming raw data into executive-ready insights with Power BI, DAX, and Python.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-t1 font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
