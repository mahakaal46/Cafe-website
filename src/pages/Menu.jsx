import React from 'react'

const MENU = [
  { id: 1, name: 'Espresso', price: '$2.50', desc: 'Rich and bold single shot.', img: 'https://images.unsplash.com/photo-1517984922945-0a3f7f1d9e6d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example' },
  { id: 2, name: 'Americano', price: '$3.00', desc: 'Espresso with hot water.', img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example' },
  { id: 3, name: 'Cappuccino', price: '$4.00', desc: 'Espresso, steamed milk, foam.', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example' },
  { id: 4, name: 'Latte', price: '$4.50', desc: 'Velvety milk with espresso.', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example' },
  { id: 5, name: 'Mocha', price: '$5.00', desc: 'Chocolatey and smooth.', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example' },
  { id: 6, name: 'Cold Brew', price: '$4.50', desc: 'Slow-steeped and refreshing.', img: 'https://images.unsplash.com/photo-1541823701221-9c9b3a1bcd2a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example' },
]

function Badge({ children }) {
  return <span className="inline-block bg-cafe-500 text-white text-xs px-2 py-1 rounded-full">{children}</span>
}

export default function Menu() {
  return (
    <section>
      <h2 className="font-heading text-3xl dark:font-papyrus mb-6">Menu</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MENU.map((item, i) => (
          <article key={item.id} className={`relative overflow-hidden rounded-lg card-shadow transform hover:-translate-y-1 transition-transform bg-white dark:bg-roast-800`}>
            <div className="relative h-52 sm:h-56">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              {/* decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-roast-900/60 rounded-lg" />

              {/* angled ribbon */}
              <div className="absolute left-3 -bottom-4 rotate-6 transform bg-cafe-500 text-white px-3 py-1 rounded shadow">{i % 2 === 0 ? 'House' : 'Classic'}</div>

              <div className="absolute right-3 top-3">
                <div className="bg-white/80 dark:bg-roast-900/60 text-roast-800 dark:text-roast-100 px-3 py-1 rounded-full font-semibold">{item.price}</div>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg dark:font-papyrus dark:text-roast-100">{item.name}</h3>              </div>
              <p className="text-sm text-roast-600 dark:text-roast-200">{item.desc}</p>
              <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button className="w-full sm:w-auto px-3 py-2 rounded-md border border-roast-200 dark:border-roast-700 text-roast-700 dark:text-roast-200">Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
