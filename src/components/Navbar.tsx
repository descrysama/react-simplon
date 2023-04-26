import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  return (
    <header className="flex items-center md:justify-around justify-between w-full">
        <img src="logo_black.png" alt="logo" className='w-[90px] md:m-0 ml-4'/>
        <ul className="gap-2 m-2 w-[60%] justify-end uppercase text-[14px] md:flex hidden">
            <NavLink className="hover:underline cursor-pointer hover:text-[#F8AD9D] duration-200" to="/">Louer</NavLink>
            <NavLink className="hover:underline cursor-pointer hover:text-[#F8AD9D] duration-200" to="/">FAQ</NavLink>
            <NavLink className="hover:underline cursor-pointer hover:text-[#F8AD9D] duration-200" to="/">Connexion</NavLink>
            <NavLink className="hover:underline cursor-pointer hover:text-[#F8AD9D] duration-200" to="/">Inscription</NavLink>
        </ul>
        <FaBars className="md:hidden flex mr-4 cursor-pointer hover:text-[#F8AD9D] duration-200" size={20}/>
    </header>
  )
}

export default Navbar