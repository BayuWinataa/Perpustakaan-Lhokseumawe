import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

function Icon({ id, open }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
		</svg>
	);
}

function AccordionCustomIcon() {
	const [open, setOpen] = React.useState(0);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	return (
		<div className="container mx-auto my-24">
			<Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(1)}>Apa itu Website Dinas Perpustakaan Kota Lhokseumawe?</AccordionHeader>
				<AccordionBody>
					Website ini adalah sarana bagi masyarakat untuk mengakses informasi mengenai layanan perpustakaan di Kota Lhokseumawe. Melalui website ini, pengunjung dapat mengetahui berbagai informasi terkait perpustakaan, seperti koleksi buku,
					kegiatan, serta pengaduan layanan.
				</AccordionBody>
			</Accordion>

			<Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(2)}>Bagaimana cara mengakses layanan di Website Dinas Perpustakaan Kota Lhokseumawe?</AccordionHeader>
				<AccordionBody>
					Pengguna dapat mengakses layanan perpustakaan dengan mudah melalui menu-menu yang tersedia di website, seperti pengajuan pengaduan, pencarian buku, dan informasi terkait kegiatan perpustakaan. Anda tidak perlu login untuk
					mengajukan pengaduan atau mencari informasi.
				</AccordionBody>
			</Accordion>

			<Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(3)}>Apa yang dapat saya lakukan di Website Dinas Perpustakaan Kota Lhokseumawe?</AccordionHeader>
				<AccordionBody>
					Di website ini, pengunjung dapat mencari informasi mengenai koleksi buku yang tersedia, mengetahui jadwal kegiatan dan acara di perpustakaan, serta mengajukan pengaduan atau masukan terkait layanan. Website ini juga menyediakan
					informasi mengenai fasilitas dan layanan yang ada di perpustakaan.
				</AccordionBody>
			</Accordion>

			<Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(4)}>Bagaimana cara mengajukan pengaduan melalui Website Dinas Perpustakaan Kota Lhokseumawe?</AccordionHeader>
				<AccordionBody>
					Untuk mengajukan pengaduan, pengunjung dapat langsung mengisi formulir pengaduan yang tersedia pada menu Pengaduan di website. Anda hanya perlu mencantumkan nama, email, dan deskripsi masalah yang dialami, tanpa perlu melakukan
					login. Pengaduan akan segera diproses oleh pihak perpustakaan.
				</AccordionBody>
			</Accordion>

			<Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(5)}>Apakah Website ini dapat diakses di perangkat mobile?</AccordionHeader>
				<AccordionBody>
					Ya, Website Dinas Perpustakaan Kota Lhokseumawe dirancang responsif dan dapat diakses dengan baik di perangkat mobile maupun desktop. Anda dapat mengakses semua informasi dan layanan melalui perangkat apa pun.
				</AccordionBody>
			</Accordion>
		</div>
	);
}

export default AccordionCustomIcon;
