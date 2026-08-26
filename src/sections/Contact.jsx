import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarker, FaPaperPlane } from 'react-icons/fa'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { useLanguage } from '../context/useLanguage'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    { icon: FaEnvelope, label: t('contact.email'), value: 'john@example.com' },
    { icon: FaPhone, label: t('contact.phone'), value: '+1 234 567 890' },
    { icon: FaMapMarker, label: t('contact.location'), value: 'San Francisco, CA' },
  ]

  return (
    <section id="contact" className="section-padding">
      <Container>
        <SectionTitle
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{t('contact.heading')}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t('contact.description')}
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-effect p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                    <div className="text-gray-900 dark:text-white">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect p-6 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-300">{t('contact.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:placeholder-gray-500"
                  placeholder={t('contact.namePlaceholder')}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-300">{t('contact.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:placeholder-gray-500"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-300">{t('contact.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:placeholder-gray-500"
                  placeholder={t('contact.messagePlaceholder')}
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                <FaPaperPlane className="mr-2" />
                {t('contact.send')}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
