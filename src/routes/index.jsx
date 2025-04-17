import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './protectedRoute'
import Home from '../app/home';
import Login from '@/app/auth/login';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/home" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;