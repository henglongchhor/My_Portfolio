import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const SocialLinks = ({ className = '', iconSize = 24 }) => {
  const socials = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ]

  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-300"
          aria-label={social.label}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks