import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'
import { education } from '../data/education'
import { useLanguage } from '../context/useLanguage'

const Education = () => {
  const { localize, t } = useLanguage()

  return (
    <section id="education" className="section-padding">
      <Container>
        <SectionTitle
          badge={t('education.badge')}
          title={t('education.title')}
          subtitle={t('education.subtitle')}
        />

        <ScrollStack
          className="mx-auto max-w-4xl"
          useWindowScroll
          itemDistance={110}
          itemScale={0.025}
          itemStackDistance={26}
          stackPosition="18%"
          scaleEndPosition="8%"
          baseScale={0.9}
          blurAmount={0.35}
        >
          {education.map((edu, index) => (
            <ScrollStackItem
              key={edu.degree}
              itemClassName="overflow-hidden border border-white/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/90"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary-400 via-primary-500 to-violet-500" />
              <div className="pointer-events-none absolute -right-10 -top-16 text-[10rem] font-bold leading-none text-primary-500/5 dark:text-primary-400/5">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative flex min-h-56 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/25">
                    <FaGraduationCap size={20} />
                  </div>
                  <span className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1.5 text-base font-semibold tracking-wide text-primary-600 dark:text-primary-300">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-auto pt-8">
                  <p className="mb-2 text-base font-semibold uppercase tracking-[0.2em] text-primary-500">
                    {t('education.cardLabel')} {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl dark:text-white">
                    {localize(edu, 'degree')}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-gray-700 dark:text-gray-300">
                    {localize(edu, 'institution')}
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    {localize(edu, 'description')}
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </Container>
    </section>
  )
}

export default Education
