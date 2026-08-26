import { FaGithub, FaTelegram, FaFacebook, FaInstagram } from 'react-icons/fa'

const SocialLinks = ({ className = '', iconSize = 24 }) => {
  const socials = [
    { icon: FaGithub, href: 'https://github.com/henglongchhor', label: 'GitHub' },
    { icon: FaTelegram, href: 'https://t.me/henglongchhor', label: 'Telegram' },
    { icon: FaInstagram, href: 'https://www.instagram.com/henglongchhor/', label: 'Instagram' },
    { icon: FaFacebook, href: 'https://web.facebook.com/longchhor.heng.1/', label: 'facebook' },
  ]

  return (
    <div className={`flex gap-1 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 text-blue-700 hover:text-blue-500 hover:bg-gray-200 rounded-full transition-all duration-300 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
          aria-label={social.label}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
