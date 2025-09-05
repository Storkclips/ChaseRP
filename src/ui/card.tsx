
import * as React from 'react'
import clsx from 'clsx'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={clsx('rounded-2xl border border-white/10 bg-neutral-900/60', className)} {...props} />
)

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={clsx('p-4 sm:p-5', className)} {...props} />
)

export const CardTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={clsx('text-lg font-semibold', className)} {...props} />
)

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={clsx('p-4 sm:p-5 pt-0', className)} {...props} />
)

export default Card
