import { useLanguage } from '../../context/useLanguage'
import Flag from 'react-flagkit'

const LanguageToggle = ({ className = '' }) => {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-primary-500/30 bg-primary-500/10 px-3 py-2 text-base font-semibold text-primary-600 transition-colors hover:bg-primary-500/20 dark:text-primary-300 ${className}`}
      aria-label={t('controls.switchLanguage')}
      title={t('controls.switchLanguage')}
    >
      <span className="inline-flex items-center gap-2">
        {language === 'en' ? (
          <>
            <Flag country="KH" size={22} />
            <span>ខ្មែរ</span>
          </>
        ) : (
          <>
            <Flag country="GB" size={22} />
            <span>EN</span>
          </>
        )}
      </span>
    </button>
  )
}

export default LanguageToggle
