import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

const PAGES = {
  HOME: 'home',
  MENU: 'menu',
  ABOUT: 'about',
  CONTACT: 'contact',
}


function App() {
  const [page, setPage] = useState(PAGES.HOME)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch (e) {
      return 'light'
    }
  })

  // apply theme to documentElement
  useState(() => {
    // ensure initial render sync
    if (typeof document !== 'undefined') {
      if (theme === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }
  })

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch (e) {}
    if (next === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  return (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-cafe-50 to-roast-50 dark:from-roast-900 dark:to-roast-900 text-roast-800 dark:text-roast-100 transition-colors duration-300">
      <Nav current={page} onNavigate={(p) => setPage(p)} theme={theme} onToggleTheme={toggleTheme} />

      <main className="flex-grow container mx-auto px-6 py-12">
        {page === PAGES.HOME && <Home onNavigate={(p) => setPage(p)} />}
        {page === PAGES.MENU && <Menu />}
        {page === PAGES.ABOUT && <About />}
        {page === PAGES.CONTACT && <Contact />}
      </main>

      <Footer />
    </div>
  )
}

export default App
