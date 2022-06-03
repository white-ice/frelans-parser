import style from './Layout.module.css'
import cn from 'classnames'
import { LayoutProps } from './Layout.props'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'
import { FunctionComponent } from 'react'

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<main className={style.wrapper}>
			<Header className={style.header} />
			<Sidebar className={style.sidebar} />
			<div className={style.body}>
				{children}
			</div>
			<Footer className={style.footer} />
		</main>
	)
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}