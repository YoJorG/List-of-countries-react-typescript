import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

type ThemeTypes = {
	theme: 'dark' | 'light'
	setTheme: (value: string) => void
}

export default function ThemeButton({ theme, setTheme }: ThemeTypes) {
	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<button className='pt-2 pb-2 flex items-center' onClick={() => toggleTheme()}>
			{theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
		</button>
	)
}
