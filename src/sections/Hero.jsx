import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SocialLinks from '../components/common/SocialLinks'
import TextType from '../components/ui/TextType'
import { useLanguage } from '../context/useLanguage'

const Hero = () => {
  const { language, t } = useLanguage()

  return (
    <section id="home" className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-10 sm:py-14 lg:py-20">
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-12 sm:gap-16 lg:flex-row lg:gap-20 xl:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-base font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full"
            >
              {t('hero.welcome')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              {t('hero.greeting')}
              <br />
              <span className="relative inline-block whitespace-nowrap pr-2">
                <span aria-hidden="true" className="invisible tracking-tight">
                  {t('hero.name')}|
                </span>
                <TextType
                  key={language}
                  text={t('hero.name')}
                  typingSpeed={130}
                  deletingSpeed={80}
                  pauseDuration={2000}
                  initialDelay={500}
                  loop
                  showCursor
                  cursorBlinkDuration={0.5}
                  className="absolute inset-0 gradient-text"
                  style={{ whiteSpace: 'nowrap' }}
                />
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400">
                {t('hero.role')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 dark:text-gray-400"
            >
              {t('hero.description')}
            </motion.p>

            <SocialLinks className="justify-center lg:justify-start" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl shadow-primary-500/20 bg-linear-to-br from-primary-100 to-primary-300 dark:from-primary-950 dark:to-gray-800">
                <img
                  src="/Hero/image.png"
                  alt={t('hero.profileAlt')}
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-effect px-6 py-3 rounded-full animate-float">
                <span className="text-base font-semibold text-primary-400">{t('hero.available')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
