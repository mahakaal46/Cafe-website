import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-roast-900 text-roast-100 py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Cafe — Small frontend template. Built with React + Tailwind.</p>
      </div>
    </footer>
  )
}
