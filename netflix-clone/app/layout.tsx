import './globals.css'


export const metadata = {
  title: 'Netflix At Home',
  description: 'we have netflix at home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
