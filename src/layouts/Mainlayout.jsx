import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Particles from '../components/Particles'
import SwarmCursor from '../components/SwarmCursor'

const particleColors = ['#818CF8', '#6366F1', '#8B5CF6', '#C084FC']

const MainLayout = ({ children }) => {
  return (
    <div className="relative isolate min-h-screen bg-slate-50 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-white via-primary-50/70 to-slate-100 dark:from-gray-950 dark:via-primary-950/25 dark:to-gray-950" />
        <Particles
          className="absolute inset-0 opacity-60 dark:opacity-90"
          particleCount={200}
          particleSpread={12}
          speed={0.08}
          particleColors={particleColors}
          alphaParticles
          particleBaseSize={200}
          sizeRandomness={1.4}
          cameraDistance={20}
        />
        <div className="absolute inset-0 bg-white/25 dark:bg-gray-950/10" />
      </div>
      <SwarmCursor
        aria-hidden="true"
        global
        className="pointer-events-none fixed inset-0 z-60 hidden mix-blend-difference pointer-fine:block"
        color="#ffffff"
        accentColor="#ffffff"
        count={8}
        size={5}
        speed={2.5}
        spread={100}
        wander={0.25}
        trail={0.75}
        scatterOnClick
      />
      <Navbar />
      <main className="relative z-10 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
