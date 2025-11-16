import React from 'react'
import { motion } from "motion/react"

export default function Home({ onNavigate }) {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-heading dark:font-papyrus mb-4">Welcome to Cafe</h2>
          <p className="text-roast-700 dark:text-roast-200 mb-6">A cozy place to enjoy expertly roasted coffee and freshly baked pastries. Relax, work, or meet friends — we've got you covered.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => onNavigate('menu')} className="w-full sm:w-auto px-4 py-2 rounded-md bg-cafe-500 text-white">View Menu</button>
            <button onClick={() => onNavigate('contact')} className="w-full sm:w-auto px-4 py-2 rounded-md border border-roast-200 text-roast-700 dark:text-roast-200">Contact</button>
          </div>
        </div>

        <div>
          <div className="rounded-lg overflow-hidden card-shadow">
            <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=example" alt="Coffee cup" />
          </div>
        </div>
      </div>

      <div className="mt-10">
  <h3 className="font-heading text-2xl dark:font-papyrus mb-4">Popular items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-roast-800 rounded-lg card-shadow">
            <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example" alt="Latte" className="h-40 w-full object-cover rounded-md mb-3" />
            <h4 className="font-semibold">Latte</h4>
            <p className="text-sm text-roast-600 dark:text-roast-200">Smooth espresso with steamed milk.</p>
            <div className="mt-3 font-bold">$4.50</div>
          </div>

          <div className="p-4 bg-white dark:bg-roast-800 rounded-lg card-shadow">
            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example" alt="Croissant" className="h-40 w-full object-cover rounded-md mb-3" />
            <h4 className="font-semibold">Butter Croissant</h4>
            <p className="text-sm text-roast-600 dark:text-roast-200">Flaky and buttery, baked fresh.</p>
            <div className="mt-3 font-bold">$3.00</div>
          </div>

          <div className="p-4 bg-white dark:bg-roast-800 rounded-lg card-shadow">
            <img src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example" alt="Avocado toast" className="h-40 w-full object-cover rounded-md mb-3" />
            <h4 className="font-semibold">Avocado Toast</h4>
            <p className="text-sm text-roast-600 dark:text-roast-200">Sourdough with smashed avocado and olive oil.</p>
            <div className="mt-3 font-bold">$6.50</div>
          </div>
        </div>
      </div>
    </section>
  )
}
