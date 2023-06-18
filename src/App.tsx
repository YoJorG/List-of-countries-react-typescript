import Header from './components/Header/Header'
import useLocalStorage from './Hooks/useLocalStorage'
import { Outlet } from 'react-router-dom'

export default function App() {
	const [theme, setTheme] = useLocalStorage('theme', 'light')
	const html = document.documentElement

	if (theme === 'light') {
		html.classList.remove('dark')
	} else {
		html.classList.add('dark')
	}
	return (
		<div className='bg-gray-200 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-nunito'>
			<Header theme={theme} setTheme={setTheme} />
			<Outlet />
		</div>
	)
}
