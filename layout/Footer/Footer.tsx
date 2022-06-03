import style from './Footer.module.css'
import { FooterProps } from './Footer.props'
import cn from 'classnames'
import { format } from 'date-fns'


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<div className={cn(className, style.footer)} {...props}>
			<div className='copyright'>
				OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<div><a href="#" target="_blank">Пользовательское соглашение</a></div>
			<div><a href="#" target="_blank">Политика конфиденциальности</a></div>
		</div>
	)
}