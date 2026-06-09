import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="border-b">
            <div className="container mx-auto flex justify-between items-center h-16 px-4">
                <Link
                    to="/"
                    className="text-xl font-bold"
                >
                    CareerPilot AI
                </Link>

                <div className="flex gap-6">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;