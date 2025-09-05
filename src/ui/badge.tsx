
import * as React from 'react'
import clsx from 'clsx'

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => (
  <span className={clsx('inline-flex items-center rounded-md border border-white/10 px-2 py-1 text-xs', className)} {...props} />
)

export default Badge
