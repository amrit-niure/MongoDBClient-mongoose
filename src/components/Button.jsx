import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'

export const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants : {
      variant : {
        default :'bg-slate-900 text-slate-200 hover:bg-slate-800 dark:bg-slate-300  dark:text-slate-900 ',
        ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
        outlined : 'text-slate-900 dark:text-slate-200 border-2 dark:hover:bg-slate-300 dark:hover:text-slate-900 border-slate-900 dark:border-white'
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 py-1 px-2',           
        lg: 'h-11 py-4 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
  )

const Button = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}>
      {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
      {children}
    </button>
  )
}

export default Button
