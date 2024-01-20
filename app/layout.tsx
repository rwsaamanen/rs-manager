import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import Notification from '@/components/notification'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: 'Swiftyfi',
  description: 'Project Manager',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`antialiased bg-[#fdfdfd] text-[#252525] ${poppins.className}`}>
        <Notification />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
};
