import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarWithMegaMenu from './components/MegaNavbar';
import Home from './pages/Home';
import About from './pages/About';
import GambaranUmum from './pages/GambaranUmum';
import Sejarah from './pages/Sejarah';
import SusunanOrganisasi from './pages/SusunanOrganisasi';
import Visimisi from './pages/VisiMisi';
import TugasFungsi from './pages/TugasFungsi';
import SaranaPrasarana from './pages/SaranaPrasarana';
import Berita from './pages/Berita';
import Pengumuman from './pages/Pengumuman';
import Gambar from './pages/Gambar';
import Video from './pages/Video';
import Contact from './pages/Contact';
import Footer from './components/Footer';



function App() {
	return (
		<Router>
			<NavbarWithMegaMenu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/GambaranUmum" element={<GambaranUmum />} />
				<Route path="/Sejarah" element={<Sejarah />} />
				<Route path="/SusunanOrganisasi" element={<SusunanOrganisasi />} />
				<Route path="/VisiMisi" element={<Visimisi />} />
				<Route path="/TugasFungsi" element={<TugasFungsi />} />
				<Route path="/SaranaPrasarana" element={<SaranaPrasarana />} />
				<Route path="/Berita" element={<Berita />} />
				<Route path="/Pengumuman" element={<Pengumuman />} />
				<Route path="/Gambar" element={<Gambar />} />
				<Route path="/Video" element={<Video />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

// import React from 'react';
// import Home from './pages/Home';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import GambaranUmum from './pages/GambaranUmum';

// function App() {
// 	return (
// 		<>
// 			<Home />
// 		</>
// 	);
// }

// export default App;
