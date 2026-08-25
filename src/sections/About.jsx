import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Programming Languages', value: '5+' },
  ]

  return (
    <section id="about" className="section-padding">
      <Container>
        <SectionTitle
          badge="About Me"
          title="Know Me Better"
          subtitle="A passionate developer dedicated to creating impactful digital solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm a <span className="gradient-text">Full Stack Developer</span>
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed dark:text-gray-400">
              With over 5 years of experience in web development, I specialize in building
              modern, responsive, and performant web applications using cutting-edge technologies.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-400">
              I'm passionate about creating seamless user experiences and writing clean,
              maintainable code. I believe in continuous learning and staying updated with
              the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary"><a href="/public/CV/CV_Heng_Longchhor.docx" download>Download CV</a></Button>
              <Button variant="outline">Contact Me</Button>
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
                className={`glass-effect p-6 rounded-2xl text-center ${
                  index === stats.length - 1 ? 'col-span-2 justify-self-center' : ''
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default About
