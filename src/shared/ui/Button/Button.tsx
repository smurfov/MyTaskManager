import type { ComponentProps, ReactNode } from 'react'

import './Button.scss'

type ButtonProps = {
	children: ReactNode
	className?: string
} & ComponentProps<'button'>

export function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button className={`btn ${className || ''}`} {...rest}>
			{children}
		</button>
	)
}
