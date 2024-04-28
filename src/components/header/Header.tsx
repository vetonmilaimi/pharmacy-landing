import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
	{
		id: 'home',
		title: 'Home',
		link: '/',
	},
	{
		id: 'service',
		title: 'Service',
		link: '/service',
	},
	{
		id: 'about-us',
		title: 'About Us',
		link: '/about',
	},
	{
		id: 'contact-us',
		title: 'Contact Us',
		link: '/contact',
	},
]

const Header = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<div className="bg-primary w-full overflow-hidden">
			<div className={`sm:px-16 px-6 flex justify-center items-center`}>
				<div className={`w-full`}>
					<nav className="w-full flex py-2 justify-between items-center navbar">
						<a href="/" className="flex justify-center gap-3 items-center">
							<p className="text-2xl text-white ">ExpressPharm</p>
						</a>

						{/* Desktop Navigation */}
						<ul className="list-none sm:flex hidden justify-end items-center flex-1">
							{navLinks.map((nav, index) => (
								<li
									key={nav.id}
									className={`font-poppins font-normal  cursor-pointer text-[16px] 
                    text-white
                  ${
										index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
									} hover:text-secondary hover:border-b-2 hover:border-b-secondary px-2 `}
								>
									<a href={nav.link}>{nav.title}</a>
								</li>
							))}
						</ul>

						<div className="sm:hidden flex flex-1 justify-end items-center">
							<div
								className="w-[28px] h-[28px] object-contain text-white flex items-center"
								onClick={() => setToggle(!toggle)}
							>
								{!toggle ? <Menu /> : <X />}
							</div>

							{/* Sidebar */}
							<div
								className={`${
									!toggle ? 'hidden' : 'flex'
								} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar`}
							>
								<ul className="list-none flex justify-end items-start flex-1 flex-col">
									{navLinks.map((nav, index) => (
										<li
											key={nav.id}
											className={`font-medium cursor-pointer text-[16px] ${'text-white'} ${
												index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
											}`}
										>
											<a href={nav.link}>{nav.title}</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Header
