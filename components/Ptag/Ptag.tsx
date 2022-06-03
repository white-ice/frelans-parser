import style from './Ptag.module.css'
import cn from 'classnames'
import { PtagProps } from './Ptag.props'

export const Ptag = ({ size = 'default', children, className, ...props }: PtagProps): JSX.Element => {
	return (
		<p className={cn(style.p, className, {
			[style.big]: size == 'big',
			[style.small]: size == 'small',
			[style.default]: size == 'default',
		})}
			{...props}
		>
			{children}
		</p>
	)
}