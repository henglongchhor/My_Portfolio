import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'

const DEFAULT_COLORS = ['#6366f1', '#818cf8', '#c084fc', '#34d399', '#fbbf24']

export const Confetti = forwardRef(function Confetti(
  {
    particleCount = 40,
    spread = 110,
    startVelocity = 24,
    colors = DEFAULT_COLORS,
    className = '',
  },
  ref
) {
  const [bursts, setBursts] = useState([])
  const cleanupTimers = useRef([])

  const burst = useCallback(() => {
    const id = `${Date.now()}-${Math.random()}`
    const particles = Array.from({ length: particleCount }, (_, index) => {
      const angle = (-90 - spread / 2 + Math.random() * spread) * (Math.PI / 180)
      const distance = startVelocity * (2.2 + Math.random() * 2.2)

      return {
        id: `${id}-${index}`,
        color: colors[index % colors.length],
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance + 55 + Math.random() * 45,
        rotation: 180 + Math.random() * 540,
        delay: Math.random() * 90,
        width: 5 + Math.random() * 5,
        height: 3 + Math.random() * 7,
      }
    })

    setBursts(current => [...current, { id, particles }])
    const timer = window.setTimeout(
      () => setBursts(current => current.filter(item => item.id !== id)),
      1200
    )
    cleanupTimers.current.push(timer)
  }, [colors, particleCount, spread, startVelocity])

  useImperativeHandle(ref, () => ({ burst }), [burst])

  useEffect(
    () => () => cleanupTimers.current.forEach(timer => window.clearTimeout(timer)),
    []
  )

  return (
    <span aria-hidden="true" className={`pointer-events-none absolute left-1/2 top-1/2 z-20 ${className}`}>
      {bursts.flatMap(item =>
        item.particles.map(particle => (
          <span
            key={particle.id}
            className="absolute left-0 top-0 block rounded-sm"
            style={{
              width: particle.width,
              height: particle.height,
              backgroundColor: particle.color,
              '--confetti-x': `${particle.x}px`,
              '--confetti-y': `${particle.y}px`,
              '--confetti-rotation': `${particle.rotation}deg`,
              animation: `confetti-burst 900ms cubic-bezier(0.2, 0.75, 0.35, 1) ${particle.delay}ms forwards`,
            }}
          />
        ))
      )}
    </span>
  )
})
