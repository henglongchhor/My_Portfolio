import { useEffect, useRef, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
} from 'react-icons/fa'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import { Confetti } from '@/components/motion-ui/confetti'
import { useLanguage } from '../context/useLanguage'

const CONFETTI_COLORS = ['#6366f1', '#818cf8', '#c084fc', '#34d399', '#fbbf24']

const contactSchema = z.object({
  name: z.string().trim()
    .min(1, 'contact.nameRequired')
    .min(2, 'contact.nameMin')
    .max(60, 'contact.nameMax'),
  email: z.string().trim()
    .min(1, 'contact.emailRequired')
    .email('contact.emailInvalid'),
  message: z.string().trim()
    .min(1, 'contact.messageRequired')
    .min(10, 'contact.messageMin')
    .max(1000, 'contact.messageMax'),
})

const Contact = () => {
  const { t } = useLanguage()
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const confettiRef = useRef(null)
  const toastTimerRef = useRef(null)

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: { name: '', email: '', message: '' },
  })

  const messageLength = useWatch({ control, name: 'message' })?.length ?? 0

  const handleValidSubmit = () => {
    confettiRef.current?.burst()
    setShowSuccessToast(true)
    window.clearTimeout(toastTimerRef.current)
    toastTimerRef.current = window.setTimeout(() => setShowSuccessToast(false), 3000)
    reset()
  }

  useEffect(
    () => () => window.clearTimeout(toastTimerRef.current),
    []
  )

  const contactInfo = [
    { icon: FaEnvelope, label: t('contact.email'), value: 'henglongchhor@gmail.com' },
    { icon: FaPhone, label: t('contact.phone'), value: '+ (885) 17463243' },
    { icon: FaMapMarkerAlt, label: t('contact.location'), value: 'Phnom Penh, Cambodia' },
  ]

  const inputClassName = error => `
    w-full rounded-xl border bg-white/80 px-4 py-3.5 text-gray-950 outline-none
    transition-all duration-200 placeholder:text-gray-400 focus:ring-4
    dark:bg-gray-950/60 dark:text-white dark:placeholder:text-gray-600
    ${error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
      : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500/10 dark:border-gray-700'}
  `

  return (
    <section id="contact" className="section-padding">
      {showSuccessToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-20 z-[80] flex w-[calc(100%-2rem)] max-w-sm gap-3 rounded-2xl border border-emerald-500/20 bg-white/95 p-4 text-emerald-800 shadow-2xl shadow-gray-950/15 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300 dark:bg-gray-900/95 dark:text-emerald-300"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
            <FaCheckCircle />
          </div>
          <div className="min-w-0">
            <p className="font-semibold">{t('contact.validatedTitle')}</p>
            <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              {t('contact.validatedMessage')}
            </p>
          </div>
        </div>
      )}

      <Container>
        <SectionTitle
          badge={t('contact.badge')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="mx-auto mt-12 grid max-w-6xl overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr] dark:border-white/10 dark:bg-gray-900/70">
          <aside className="relative overflow-hidden bg-linear-to-br from-primary-50 via-white to-violet-100 p-7 text-gray-950 sm:p-10 lg:p-12 dark:from-gray-950 dark:via-gray-950 dark:to-primary-950 dark:text-white">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative">
              <span className="mb-5 inline-flex rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-base font-semibold uppercase tracking-[0.18em] text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-primary-300">
                {t('contact.badge')}
              </span>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('contact.heading')}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-gray-600 dark:text-gray-400">{t('contact.description')}</p>

              <div className="mt-10 space-y-3">
                {contactInfo.map(info => (
                  <div
                    key={info.label}
                    className="group flex items-center gap-4 rounded-2xl border border-primary-500/10 bg-white/70 p-4 shadow-sm transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/15 text-primary-600 transition-transform group-hover:scale-105 dark:text-primary-300">
                      <info.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-medium uppercase tracking-wider text-gray-500">{info.label}</p>
                      <p className="mt-1 truncate font-medium text-gray-900 dark:text-gray-100">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="p-7 sm:p-10 lg:p-12">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
                  {t('contact.title')}
                </h3>
                <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{t('contact.requiredNote')}</p>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 sm:flex">
                <FaPaperPlane size={19} />
              </div>
            </div>

            <form onSubmit={event => handleSubmit(handleValidSubmit)(event)} className="space-y-5" noValidate>
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-base font-semibold text-gray-700 dark:text-gray-300">
                  {t('contact.name')}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={inputClassName(errors.name)}
                  placeholder={t('contact.namePlaceholder')}
                  {...register('name')}
                />
                {errors.name && (
                  <p id="contact-name-error" role="alert" className="mt-2 flex items-center gap-2 text-base text-red-500">
                    <FaExclamationCircle size={13} /> {t(errors.name.message)}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-base font-semibold text-gray-700 dark:text-gray-300">
                  {t('contact.email')}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={inputClassName(errors.email)}
                  placeholder={t('contact.emailPlaceholder')}
                  {...register('email')}
                />
                {errors.email && (
                  <p id="contact-email-error" role="alert" className="mt-2 flex items-center gap-2 text-base text-red-500">
                    <FaExclamationCircle size={13} /> {t(errors.email.message)}
                  </p>
                )}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label htmlFor="contact-message" className="text-base font-semibold text-gray-700 dark:text-gray-300">
                    {t('contact.message')}
                  </label>
                  <span className={`text-base ${messageLength > 1000 ? 'text-red-500' : 'text-gray-400'}`}>
                    {messageLength}/1000
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  rows="5"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`${inputClassName(errors.message)} resize-none`}
                  placeholder={t('contact.messagePlaceholder')}
                  {...register('message')}
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" className="mt-2 flex items-center gap-2 text-base text-red-500">
                    <FaExclamationCircle size={13} /> {t(errors.message.message)}
                  </p>
                )}
              </div>

              <div className="relative pt-1">
                <Confetti
                  ref={confettiRef}
                  particleCount={40}
                  spread={110}
                  startVelocity={24}
                  colors={CONFETTI_COLORS}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-linear-to-r from-primary-500 to-violet-500 px-6 py-4 font-semibold text-white shadow-lg shadow-primary-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="absolute inset-0 translate-y-full bg-linear-to-r from-primary-600 to-violet-500 transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative">{t('contact.send')}</span>
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                    <FaPaperPlane size={13} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
