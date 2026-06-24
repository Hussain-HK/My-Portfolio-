import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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
  title: 'Hakeem Hussain — Data Engineer & Analytics Engineer',
  description:
    'Portfolio of Hakeem Hussain — Data Engineer, Analytics Engineer, and Data Analyst. Building scalable data infrastructure and turning raw signals into business clarity.',
  keywords: [
    'Data Engineer',
    'Analytics Engineer',
    'Data Analyst',
    'dbt',
    'Snowflake',
    'BigQuery',
    'Apache Spark',
    'Kafka',
    'Airflow',
    'Python',
    'SQL',
  ],
  authors: [{ name: 'Hakeem Hussain' }],
  openGraph: {
    title: 'Hakeem Hussain — Data Engineer & Analytics Engineer',
    description: 'Building data infrastructure that turns raw signals into business clarity.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-[#0a0a0a] text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
