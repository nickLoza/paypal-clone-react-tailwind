import { useContext } from 'react'
import { MdSettings } from 'react-icons/md'
import { MenuContext } from '../../context/MenuContext'
import { navLinksArray } from './constants/navLinks'
import { NavLink } from 'react-router-dom'

function MobileMenu() {

	const { isMenuOpen, toggleMenu } = useContext(MenuContext)!

	return (
		<div className={`fixed lg:hidden z-[500] left-0 top-0 w-[300px] h-[100vh] text-[#D1F1FF] font-semibold bg-[#142C8E] transition duration-300 ${isMenuOpen? "translate-x-0" : "translate-x-[-382px]"}`}>
				<div className="flex align-items justify-between bg-[#142C8E] p-4 pt-6">
					<p>LOG OUT</p>
					<button>
							<MdSettings/>
					</button>
				</div>
				{/*profile name*/}
				<div className='bg-[#142C8E] p-4 text-center text-xl'>
					<p>John Doe Williams</p>
				</div>
				<ul className="flex flex-col  gap-y-4 pt-4">
					{navLinksArray.map((item,i)=>(
						<li key={i} className="">
				          <NavLink to={item.url} className={`w-full block px-6 py-4 ${location.pathname === item.url ? "bg-[#27419A]" : ""}`}
				          onClick={toggleMenu}>
				            {item.text}
				          </NavLink>
       				   </li>
					))}
				</ul>
		</div>
	)
}

export default MobileMenu