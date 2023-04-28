import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();

  return (
    location.pathname == '/login' || location.pathname == '/register' ? null :
    <header className="flex items-center md:justify-around justify-between w-full">
        <Link to="/"><img src="logo_black.png" alt="logo" className='w-[90px] md:m-0 ml-4'/></Link>
        <ul className="gap-6 m-2 w-[60%] justify-end uppercase text-[14px] md:flex hidden">
            <NavLink className="hover:underline cursor-pointer hover:text-[#F8AD9D] duration-200" to="/">Louer</NavLink>
            <NavLink className="hover:underline cursor-pointer hover:text-[#F8AD9D] duration-200" to="/faq">FAQ</NavLink>
            <NavLink className="hover:underline cursor-pointer hover:text-[#F8AD9D] duration-200" to="/login">Connexion</NavLink>
            <NavLink className="hover:underline cursor-pointer hover:text-[#F8AD9D] duration-200" to="/register">Inscription</NavLink>
        </ul>
        <FaBars className="md:hidden flex mr-4 cursor-pointer hover:text-[#F8AD9D] duration-200" size={20}/>
    </header>
  )
}

export default Navbar