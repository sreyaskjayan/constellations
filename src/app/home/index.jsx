import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import { logout } from '@/store/authSlice'

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const theme = useSelector(state => state.theme.mode)

	const handleLogout = () => {
		dispatch(logout());
		navigate('/', { replace: true });
	};

	const onClick = () => {
		dispatch(toggleTheme())
	}

	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<Button onClick={onClick}>{theme}</Button>
			<Button onClick={handleLogout}>LogOut</Button>
			<h1>hii</h1>
		</div>
	);
}

export default Home
