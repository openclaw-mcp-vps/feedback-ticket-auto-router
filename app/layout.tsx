import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FeedbackRouter — Smart routing of customer feedback to teams',
  description: 'AI analyzes customer feedback and automatically routes to the right team with priority scoring. Built for customer success teams at growing SaaS companies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="22672e80-2a4d-45a3-b882-39a1b60d5373"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
