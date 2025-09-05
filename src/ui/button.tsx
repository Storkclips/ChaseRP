
import * as React from 'react'
import clsx from 'clsx'

type Variant = 'default' | 'outline' | 'ghost'
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-0 ring-fuchsia-500 disabled:opacity-50 disabled:pointer-events-none'
const variants: Record<Variant, string> = {
  default: 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white',
  outline: 'border border-white/20 text-neutral-100 hover:bg-white/10',
  ghost: 'text-neutral-100 hover:bg-white/10',
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = 'default', ...props }, ref) => {
    return <button ref={ref} className={clsx(base, variants[variant], className)} {...props} />
  }
)
Button.displayName = 'Button'
export default Button
