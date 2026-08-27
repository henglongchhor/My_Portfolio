import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { useLanguage } from '../context/useLanguage'

const About = () => {
  const { t } = useLanguage()
  const stats = t('about.stats')

  return (
    <section id="about" className="section-padding">
      <Container>
        <SectionTitle
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {t('about.headingPrefix')} <span className="gradient-text">{t('about.role')}</span>
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed dark:text-gray-400">
              {t('about.paragraphOne')}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-400">
              {t('about.paragraphTwo')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary"><a href="/CV/CV_Heng_Longchhor.docx" download>{t('about.downloadCv')}</a></Button>
              <Button variant="outline">{t('about.contactMe')}</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect rounded-2xl p-5 text-center sm:p-6 ${
                  index === stats.length - 1 ? 'col-span-2 justify-self-center' : ''
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default About
