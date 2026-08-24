import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarker, FaPaperPlane } from 'react-icons/fa'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'

const Contact = () => {
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
    { icon: FaEnvelope, label: 'Email', value: 'john@example.com' },
    { icon: FaPhone, label: 'Phone', value: '+1 234 567 890' },
    { icon: FaMapMarker, label: 'Location', value: 'San Francisco, CA' },
  ]

  return (
    <section id="contact" className="section-padding bg-gray-800/30">
      <Container>
        <SectionTitle
          badge="Contact"
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Let's Talk</h3>
            <p className="text-gray-400">
              I'm always interested in hearing about new opportunities, 
              interesting projects, or just having a chat about tech.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-effect p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect p-6 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                <FaPaperPlane className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact