import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'
import { Button } from "@/components/ui/button"
import { useEffect } from 'react'

const Home = () => {
	const dispatch = useDispatch()
	const theme = useSelector(state => state.theme.mode)

	
	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);


	const onClick = () => {
		dispatch(toggleTheme())
	}
	return (
        <div className="flex flex-col items-center justify-center min-h-svh">
			<Button onClick={onClick}>{theme}</Button>
		</div>
	)
}

export default Home