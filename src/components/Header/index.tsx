import { useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MenuContext } from "../../context/MenuContext";
import MobileMenu from "./MobileMenu";
import { navLinksArray } from "./constants/navLinks";
import { Link, NavLink, useLocation } from "react-router-dom";
import RightButtons from "./RightButtons";


function Header() {

	const { isMenuOpen, toggleMenu } = useContext(MenuContext)!
	const location = useLocation();

	return (
		<header className="bg-[#142C8E] h-[100px] w-full text-white">
			<nav className={`lg:px-10 max-w-[1250px] h-full m-auto flex items-center justify-between py-4 px-4 text-2xl transition-all duration-300 ${isMenuOpen? "pl-[310px]" : ""}`}>
				<div className="flex">
					{/*toggle menu*/}
					<button className="lg:hidden" onClick={toggleMenu}>
					 	{isMenuOpen? 
					 	<AiOutlineClose/>
					 	:
					 	<AiOutlineMenu/>}
					</button>
					{/*logo*/}
					<Link to={"/"}>
						<img src="https://cdn-icons-png.flaticon.com/256/1145/1145485.png" className="hidden lg:flex" alt="logo" height={30} width={30}/>
					</Link>
					{/*navigation bar*/}
					<ul className="hidden lg:flex gap-x-2 text-base font-medium text-[#D1F1FF] px-1">
						{navLinksArray.map((item,i)=>(
							<li key={i}>
								<NavLink to={item.url} className={`py-2 px-4 rounded-2xl transition duration-200 hover:ring-1 focus:ring-1  hover:text-white ${location.pathname === item.url? "bg-[#27419A] text-white" : ""}`}>
									{item.text}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<Link to={"/"}>
					<img src="https://cdn-icons-png.flaticon.com/256/1145/1145485.png" className="flex lg:hidden" alt="logo" height={30} width={30}/>
				</Link>
				{/*Notifications*/}
				<RightButtons/>
				
			</nav>
			<MobileMenu/>
		</header>
	)
}

export default Header