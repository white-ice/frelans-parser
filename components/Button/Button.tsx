import style from './Button.module.css'
import { ButtonProps } from './Button.props'
import ArrowIcon from './arrow.svg'
import cn from 'classnames'

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(style.btn, className, {
			[style.primary]: appearance == 'primary',
			[style.ghost]: appearance == 'ghost',
		})} {...props}>
			{children}
			{arrow != 'none' && <span className={cn(style.arrow, {
				[style.down]: arrow == 'down'
			})}>
				<ArrowIcon />
			</span>}
		</button>
	)
}