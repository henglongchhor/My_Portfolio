import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import LogoLoop from '../components/LogoLoop'
import { skills } from '../data/skills'
import { useLanguage } from '../context/useLanguage'

const frontendNames = [
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'Vue.js',
  'React',
  'Next.js',
]

const frontendSkills = skills.filter((skill) => frontendNames.includes(skill.name))
const developmentSkills = skills.filter((skill) => !frontendNames.includes(skill.name))

const SkillLoopItem = ({ skill }) => {
  const Icon = skill.icon

  return (
    <div className="glass-effect flex min-w-48 items-center gap-4 rounded-2xl px-5 py-4 shadow-sm transition-colors hover:border-primary-400/70 hover:bg-primary-500/10">
      <span className={`text-4xl ${skill.iconClass}`} aria-hidden="true">
        <Icon />
      </span>
      <span className="whitespace-nowrap text-base font-semibold text-gray-800 dark:text-gray-100">
        {skill.name}
      </span>
    </div>
  )
}

const Skills = () => {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section-padding">
      <Container>
        <SectionTitle
          badge={t('skills.badge')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <motion.div
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <LogoLoop
            logos={frontendSkills}
            direction="right"
            speed={45}
            logoHeight={64}
            gap={20}
            pauseOnHover
            scaleOnHover
            renderItem={(skill) => <SkillLoopItem skill={skill} />}
            ariaLabel="Frontend technologies"
            className="py-2"
          />

          <LogoLoop
            logos={developmentSkills}
            direction="left"
            speed={45}
            logoHeight={64}
            gap={20}
            pauseOnHover
            scaleOnHover
            renderItem={(skill) => <SkillLoopItem skill={skill} />}
            ariaLabel="Programming, backend, and development tools"
            className="py-2"
          />
        </motion.div>
      </Container>
    </section>
  )
}

export default Skills
