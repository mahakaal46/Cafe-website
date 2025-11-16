import React, { useState } from 'react'

export default function Nav({ current, onNavigate, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-30 border-b dark:bg-roast-900/70 dark:border-roast-700">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-cafe-500 flex items-center justify-center text-white font-bold">C</div>
            <div>
              <a onClick={() => onNavigate('home')} className="font-heading text-xl dark:font-papyrus hover:cursor-pointer w-full">Cafe</a>
              <p className="text-sm text-roast-600 dark:text-roast-300">Cozy. Fresh. Local.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* desktop nav */}
            <nav className="hidden sm:flex items-center gap-4">
              <button onClick={() => onNavigate('home')} className={`py-2 px-3 rounded-md ${current === 'home' ? 'bg-cafe-500 text-white' : 'text-roast-700 hover:bg-roast-100 dark:text-roast-200 dark:hover:bg-roast-800/50'}`}>Home</button>
              <button onClick={() => onNavigate('menu')} className={`py-2 px-3 rounded-md ${current === 'menu' ? 'bg-cafe-500 text-white' : 'text-roast-700 hover:bg-roast-100 dark:text-roast-200 dark:hover:bg-roast-800/50'}`}>Menu</button>
              <button onClick={() => onNavigate('about')} className={`py-2 px-3 rounded-md ${current === 'about' ? 'bg-cafe-500 text-white' : 'text-roast-700 hover:bg-roast-100 dark:text-roast-200 dark:hover:bg-roast-800/50'}`}>About</button>
              <button onClick={() => onNavigate('contact')} className={`py-2 px-3 rounded-md ${current === 'contact' ? 'bg-cafe-500 text-white' : 'text-roast-700 hover:bg-roast-100 dark:text-roast-200 dark:hover:bg-roast-800/50'}`}>Contact</button>
            </nav>

            {/* theme toggle (desktop) */}
            <div className="hidden sm:block">
              <button onClick={onToggleTheme} aria-label="Toggle theme" className="ml-2 p-2 rounded-md bg-white dark:bg-roast-800 border border-roast-200 dark:border-roast-700">
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-roast-100">
                    <path d="M21.64 13a9 9 0 11-9.64-8 7 7 0 109.64 8z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-roast-800">
                    <path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 16a4 4 0 100-8 4 4 0 000 8zm9-5a1 1 0 01-1 1h-2a1 1 0 010-2h2a1 1 0 011 1zM5 12a1 1 0 01-1 1H2a1 1 0 010-2h2a1 1 0 011 1zm12.95-6.95a1 1 0 010 1.41L16.24 8.17a1 1 0 11-1.41-1.41l1.71-1.71a1 1 0 011.41 0zM7.17 16.24a1 1 0 011.41 0l1.71 1.71a1 1 0 11-1.41 1.41l-1.71-1.71a1 1 0 010-1.41zM18.36 18.36a1 1 0 01-1.41 0l-1.71-1.71a1 1 0 011.41-1.41l1.71 1.71a1 1 0 010 1.41zM6.34 5.64a1 1 0 010 1.41L4.63 8.76A1 1 0 113.22 7.36l1.71-1.71a1 1 0 011.41 0z" />
                  </svg>
                )}
              </button>
            </div>

            {/* mobile menu button */}
            <div className="sm:hidden">
              <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="p-2 rounded-md bg-white dark:bg-roast-800 border border-roast-200 dark:border-roast-700">
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-roast-800 dark:text-roast-100">
                    <path fillRule="evenodd" d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.716-4.714a.75.75 0 111.06 1.06L13.06 10.585l4.716 4.716a.75.75 0 11-1.06 1.06L12 11.645l-4.716 4.716a.75.75 0 01-1.06-1.06l4.716-4.716L6.225 5.87a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-roast-800 dark:text-roast-100">
                    <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* mobile dropdown */}
        {open && (
          <div className="sm:hidden mt-3">
            <div className="flex flex-col gap-2">
              <button onClick={() => { onNavigate('home'); setOpen(false); }} className={`w-full text-left py-2 px-3 rounded-md ${current === 'home' ? 'bg-cafe-500 text-white' : 'text-roast-700 hover:bg-roast-100 dark:text-roast-200 dark:hover:bg-roast-800/50'}`}>Home</button>
              <button onClick={() => { onNavigate('menu'); setOpen(false); }} className={`w-full text-left py-2 px-3 rounded-md ${current === 'menu' ? 'bg-cafe-500 text-white' : 'text-roast-700 hover:bg-roast-100 dark:text-roast-200 dark:hover:bg-roast-800/50'}`}>Menu</button>
              <button onClick={() => { onNavigate('about'); setOpen(false); }} className={`w-full text-left py-2 px-3 rounded-md ${current === 'about' ? 'bg-cafe-500 text-white' : 'text-roast-700 hover:bg-roast-100 dark:text-roast-200 dark:hover:bg-roast-800/50'}`}>About</button>
              <button onClick={() => { onNavigate('contact'); setOpen(false); }} className={`w-full text-left py-2 px-3 rounded-md ${current === 'contact' ? 'bg-cafe-500 text-white' : 'text-roast-700 hover:bg-roast-100 dark:text-roast-200 dark:hover:bg-roast-800/50'}`}>Contact</button>
              <div className="pt-2 border-t border-roast-100 dark:border-roast-700">
                <button onClick={() => { onToggleTheme(); setOpen(false); }} className="w-full text-left py-2 px-3 rounded-md">Toggle theme</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
