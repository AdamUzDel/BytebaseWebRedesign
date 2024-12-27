import { ReactNode } from 'react'

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto">
        {children}
      </main>
    </div>
  )
}

