import { useState } from 'react';
import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className='padding-x py-8 absolute z-10 w-full'>
			<nav className='flex flex-wrap justify-between items-center max-container'>
				<a href='/'>
					<img src={headerLogo} alt='Logo' width={130} height={29} />
				</a>

				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map(item => (
						<li key={item.label} className=''>
							<a
								href={item.href}
								className='font-monserrat leading-normal text-lg text-slate-gray hover:text-slate-800 hover:border-b border-slate-800'
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className='hidden max-lg:block cursor-pointer'>
					<img
						src={hamburger}
						alt='Hamburder menu'
						width={25}
						height={25}
						onClick={toggleMenu}
					/>
				</div>
				{isMenuOpen && (
					<div className='flex flex-col items-center basis-full bg-slate-50 rounded-md border-slate-300 shadow-md w-50 mt-4'>
						<ul className=''>
							{navLinks.map(item => (
								<li
									key={item.label}
									className='hover:text-slate-800 hover:border-b border-slate-800'
								>
									<a
										href={item.href}
										className='font-monserrat leading-normal text-xl text-slate-gray '
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
};

export default NavBar;
