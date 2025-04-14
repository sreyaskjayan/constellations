import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/auth/login';

function Router() {
    return (
        <BrowserRouter>
            {/* Navigation Links */}
            {/* <nav>
                <Link to="/">Home</Link> | <Link to="/">About</Link> |{" "}
                <Link to="/home">Home</Link>
            </nav> */}
    
            {/* Route Definitions */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;