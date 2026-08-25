import { createElement, useEffect, useMemo, useState } from 'react'

const TextType = ({
  text,
  texts,
  as: Component = 'span',
  typingSpeed = 50,
  initialDelay = 500,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  ...props
}) => {
  const sentences = useMemo(() => {
    const value = text ?? texts ?? ['']
    return Array.isArray(value) ? value : [value]
  }, [text, texts])

  const [displayedText, setDisplayedText] = useState('')
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [hasStarted, setHasStarted] = useState(initialDelay === 0)

  useEffect(() => {
    if (hasStarted) return undefined
    const timeout = setTimeout(() => setHasStarted(true), initialDelay)
    return () => clearTimeout(timeout)
  }, [hasStarted, initialDelay])

  useEffect(() => {
    if (!hasStarted || sentences.length === 0) return undefined

    const currentSentence = sentences[sentenceIndex] ?? ''
    const isComplete = displayedText === currentSentence
    const isLastSentence = sentenceIndex === sentences.length - 1

    if (!isDeleting && isComplete && !loop && isLastSentence) return undefined

    let delay = isDeleting ? deletingSpeed : typingSpeed

    if (!isDeleting && isComplete) delay = pauseDuration
    if (variableSpeedEnabled && !isDeleting && !isComplete) {
      delay = Math.random() * (variableSpeedMax - variableSpeedMin) + variableSpeedMin
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && displayedText === '') {
        setSentenceIndex(previous => (previous + 1) % sentences.length)
        setIsDeleting(false)
        return
      }

      setDisplayedText(previous =>
        isDeleting
          ? previous.slice(0, -1)
          : currentSentence.slice(0, previous.length + 1)
      )
    }, delay)

    return () => clearTimeout(timeout)
  }, [
    deletingSpeed,
    displayedText,
    hasStarted,
    isDeleting,
    loop,
    pauseDuration,
    sentenceIndex,
    sentences,
    typingSpeed,
    variableSpeedEnabled,
    variableSpeedMax,
    variableSpeedMin,
  ])

  const cursorIsHidden =
    hideCursorWhileTyping && displayedText.length < (sentences[sentenceIndex]?.length ?? 0)

  return createElement(
    Component,
    {
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    displayedText,
    showCursor && !cursorIsHidden && (
      <span
        aria-hidden="true"
        className={`ml-1 inline-block text-primary-500 ${cursorClassName}`}
        style={{
          animation: `text-type-cursor ${cursorBlinkDuration * 2}s ease-in-out infinite`,
          WebkitTextFillColor: 'currentColor',
        }}
      >
        {cursorCharacter}
      </span>
    )
  )
}

export default TextType
