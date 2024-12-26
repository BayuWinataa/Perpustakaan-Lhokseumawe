import React from 'react';
import { Navbar, Collapse, Typography, Button, IconButton, List, ListItem, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Bars4Icon, GlobeAmericasIcon, NewspaperIcon, PhoneIcon, RectangleGroupIcon, SquaresPlusIcon, SunIcon, TagIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

// Data untuk kedua menu
const navListMenuItems1 = [
	{
		title: 'Gambaran Umum',
		icon: SquaresPlusIcon,
		link: '/GambaranUmum', // Tambahkan link di sini
	},
	{
		title: 'Sejarah',
		icon: UserGroupIcon,
		link: '/sejarah', // Tambahkan link di sini
	},
	{
		title: 'Susunan Organisasi',
		icon: GlobeAmericasIcon,
		link: '/susunanorganisasi', // Tambahkan link di sini
	},
	{
		title: 'Visi dan Misi',
		icon: UserGroupIcon,
		link: '/visimisi', // Tambahkan link di sini
	},
	// {
	// 	title: 'Tugas dan Fungsi',
	// 	icon: UserGroupIcon,
	// 	link: '/tugasfungsi', // Tambahkan link di sini
	// },
	// {
	// 	title: 'Sarana dan Prasarana',
	// 	icon: UserGroupIcon,
	// 	link: '/saranaprasarana', // Tambahkan link di sini
	// },
];

const navListMenuItems2 = [
	{
		title: 'Berita',
		icon: Bars4Icon,
		link: '/berita', // Tambahkan link di sini
	},
	{
		title: 'Pengumuman',
		icon: PhoneIcon,
		link: '/pengumuman', // Tambahkan link di sini
	},
];

const navListMenuItems3 = [
	{
		title: 'Gambar',
		icon: Bars4Icon,
		link: '/gambar', // Tambahkan link di sini
	},
	{
		title: 'Video',
		icon: PhoneIcon,
		link: '/video', // Tambahkan link di sini
	},
];

function NavListMenu() {
	const [isMenuOpen1, setIsMenuOpen1] = React.useState(false);
	const [isMenuOpen2, setIsMenuOpen2] = React.useState(false);
    const [isMenuOpen3, setIsMenuOpen3] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	// Render items untuk Menu 1
	const renderItems1 = navListMenuItems1.map(({ icon, title, link }, key) => (
		<Link to={link} key={key}>
			<MenuItem className="flex items-center gap-3 rounded-lg">
				<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">{React.createElement(icon, { strokeWidth: 2, className: 'h-6 text-gray-900 w-6' })}</div>
				<div>
					<Typography variant="h6" color="blue-gray" className="flex items-center text-sm font-bold">
						{title}
					</Typography>
				</div>
			</MenuItem>
		</Link>
	));

	// Render items untuk Menu 2
	const renderItems2 = navListMenuItems2.map(({ icon, title, link }, key) => (
		<Link to={link} key={key}>
			<MenuItem className="flex items-center gap-3 rounded-lg">
				<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">{React.createElement(icon, { strokeWidth: 2, className: 'h-6 text-gray-900 w-6' })}</div>
				<div>
					<Typography variant="h6" color="blue-gray" className="flex items-center text-sm font-bold">
						{title}
					</Typography>
				</div>
			</MenuItem>
		</Link>
	));
	// Render items untuk Menu 2
	const renderItems3 = navListMenuItems3.map(({ icon, title, link }, key) => (
		<Link to={link} key={key}>
			<MenuItem className="flex items-center gap-3 rounded-lg">
				<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">{React.createElement(icon, { strokeWidth: 2, className: 'h-6 text-gray-900 w-6' })}</div>
				<div>
					<Typography variant="h6" color="blue-gray" className="flex items-center text-sm font-bold">
						{title}
					</Typography>
				</div>
			</MenuItem>
		</Link>
	));

	return (
		<React.Fragment>
			{/* Menu 1 */}
			<Menu open={isMenuOpen1} handler={setIsMenuOpen1} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
				<MenuHandler>
					<Typography as="div" variant="small" className="font-medium">
						<ListItem className="flex items-center gap-2 py-2 pr-4 font-bold text-lg  text-gray-900" selected={isMenuOpen1 || isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
							Profil
							<ChevronDownIcon strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen1 ? 'rotate-180' : ''}`} />
							<ChevronDownIcon strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">{renderItems1}</ul>
				</MenuList>
			</Menu>

			{/* Menu 2 */}
			<Menu open={isMenuOpen2} handler={setIsMenuOpen2} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
				<MenuHandler>
					<Typography as="div" variant="small" className="font-medium">
						<ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-lg text-gray-900" selected={isMenuOpen2 || isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
							Publikasi
							<ChevronDownIcon strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen2 ? 'rotate-180' : ''}`} />
							<ChevronDownIcon strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">{renderItems2}</ul>
				</MenuList>
			</Menu>

			{/* Menu 3 */}
			<Menu open={isMenuOpen3} handler={setIsMenuOpen3} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
				<MenuHandler>
					<Typography as="div" variant="small" className="font-medium">
						<ListItem className="flex items-center gap-2 py-2 pr-4 font-bold text-lg text-gray-900" selected={isMenuOpen3 || isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
							Galery
							<ChevronDownIcon strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen3 ? 'rotate-180' : ''}`} />
							<ChevronDownIcon strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">{renderItems3}</ul>
				</MenuList>
			</Menu>

			{/* Collapse Menu untuk versi mobile */}
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>
					{renderItems1}
					{renderItems2}
					{renderItems3}
				</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavList() {
	return (
		<List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
			<Typography as="a" href="/" variant="small" color="blue-gray" className="font-medium">
				<ListItem className="flex items-center gap-2 py-2 pr-4 font-bold text-lg">Beranda</ListItem>
			</Typography>
			<NavListMenu />
			<Typography as="a" href="/contact" variant="small" color="blue-gray" className="font-medium">
				<ListItem className="flex items-center gap-2 py-2 pr-4 font-bold text-lg">Kontak</ListItem>
			</Typography>
		</List>
	);
}

function NavbarWithMegaMenu() {
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	return (
		<Navbar className="fixed top-0 left-0 right-0 w-full max-w-full mx-auto px-4 py-2 bg-white shadow-md z-50">
			<div className="flex items-center justify-between text-blue-gray-900">
				<Typography as="a" href="/" variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center">
					<img src={Logo} alt="Logo Kota Lhokseumawe" className="w-20 h-auto" />
					<h1 className="ml-2 font-semibold text-xl">Dinas Perpustakaan <br /> Kota Lhokseumawe</h1>
				</Typography>

				<div className="hidden lg:block">
					<NavList />
				</div>
				<IconButton variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
					{openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
}

export default NavbarWithMegaMenu;

