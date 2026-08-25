import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import SocialLinks from '../components/common/SocialLinks'
import TextType from '../components/ui/TextType'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
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
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full"
            >
              👋 Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm
              <br />
              <TextType
                text={["Heng Longchhor"]}
                typingSpeed={130}
                deletingSpeed={80}
                pauseDuration={2000}
                initialDelay={500}
                loop
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
                className="gradient-text"
              />
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 dark:text-gray-400"
            >
              Passionate about creating beautiful, functional, and user-centric
              digital experiences. Specializing in React, Node.js, and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button variant="primary" size="lg">Get in Touch</Button>
              <Button variant="outline" size="lg">View Projects</Button>
            </motion.div>

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
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-effect px-6 py-3 rounded-full animate-float">
                <span className="text-sm font-semibold text-primary-400">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
