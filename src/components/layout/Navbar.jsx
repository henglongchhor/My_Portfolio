import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import MobileMenu from './MobileMenu'
import LanguageToggle from '../common/LanguageToggle'
import { useLanguage } from '../../context/useLanguage'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'education', label: t('nav.education') },
    { id: 'certificates', label: t('nav.certificates') },
    { id: 'contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}
      `}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a 
              href="#home" 
              className="text-xl md:text-2xl font-bold gradient-text hover:scale-105 transition-transform"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('home')
              }}
            >
              {t('brand')}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="px-3 py-2 text-base text-gray-600 hover:text-gray-950 transition-colors rounded-lg hover:bg-gray-200/70 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/50"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.id)
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-600 hover:text-gray-950 hover:bg-gray-200/70 rounded-lg transition-colors dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/50"
                aria-label={t('controls.switchTheme', { mode: t(`controls.${darkMode ? 'light' : 'dark'}`) })}
                title={t('controls.switchTheme', { mode: t(`controls.${darkMode ? 'light' : 'dark'}`) })}
              >
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
              
              <LanguageToggle className="hidden lg:inline-flex" />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-950 hover:bg-gray-200/70 rounded-lg transition-colors relative dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/50"
                aria-label={t('controls.toggleMenu')}
              >
                {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        onNavClick={handleNavClick}
      />
    </>
  )
}

export default Navbar
