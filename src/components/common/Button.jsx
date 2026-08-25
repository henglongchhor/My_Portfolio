import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon = null,
  fullWidth = false,
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 border border-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-gray-700',
    outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white',
    ghost: 'text-gray-600 hover:text-gray-950 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      type={type}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        inline-flex items-center justify-center gap-2
        font-semibold rounded-lg
        transition-all duration-300
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </button>
  )
}

export default Button
