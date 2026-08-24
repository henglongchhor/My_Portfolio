import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import { certificates } from '../data/certificates'

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding">
      <Container>
        <SectionTitle
          badge="Certificates"
          title="My Certificates"
          subtitle="Professional certifications and achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-2xl hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="text-4xl text-primary-400 mb-4">
                <FaCertificate />
              </div>
              <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
              <p className="text-primary-400 text-sm mt-2">{cert.date}</p>
              <a 
                href={cert.link} 
                className="inline-block mt-4 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Certificates