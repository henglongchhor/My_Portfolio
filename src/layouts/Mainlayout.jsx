import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
