import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CommonLayout from "@/components/client-view/common-layout";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Igor Guariroba',
  description: 'Um lugar onde eu posso compartilhar todos os melhores projetos da internet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
      <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  )
}
