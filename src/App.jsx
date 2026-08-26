import React from 'react'
import MainLayout from './layouts/Mainlayout'
import Home from './pages/Home'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </LanguageProvider>
  )
}

export default App
