import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import { certificates } from '../data/certificates'
import { useLanguage } from '../context/useLanguage'

const Certificates = () => {
  const { localize, t } = useLanguage()

  return (
    <section id="certificates" className="section-padding">
      <Container>
        <SectionTitle
          badge={t('certificates.badge')}
          title={t('certificates.title')}
          subtitle={t('certificates.subtitle')}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <article className="glass-effect group flex min-h-60 h-full overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105">
                <div className="flex w-full flex-col p-5 sm:p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-950 dark:text-white">
                    {localize(cert, 'name')}
                  </h3>
                  <p className="mb-4 text-base text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-base font-medium text-primary-500">
                      {cert.date}
                    </span>
                  </div>

                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-full items-center justify-center rounded-lg border-2 border-primary-500 px-4 py-2 text-base font-semibold text-primary-500 transition-all duration-300 hover:bg-primary-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  >
                    {t('certificates.view')}
                  </a>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Certificates
