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
				<AccordionHeader onClick={() => handleOpen(1)}>Apa itu Website ini?</AccordionHeader>
				<AccordionBody>
					Website ini adalah platform yang menyediakan informasi penting dan layanan yang dapat diakses dengan mudah oleh pengunjung. Melalui website ini, pengguna dapat memperoleh berbagai informasi yang relevan dan mengakses berbagai
					fitur yang disediakan.
				</AccordionBody>
			</Accordion>

			<Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(2)}>Bagaimana cara mengakses layanan di Website ini?</AccordionHeader>
				<AccordionBody>Pengguna dapat dengan mudah mengakses layanan melalui menu navigasi yang tersedia di website. Semua layanan dan informasi yang dibutuhkan dapat diakses hanya dengan beberapa klik.</AccordionBody>
			</Accordion>

			<Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(3)}>Apa yang dapat saya lakukan di Website ini?</AccordionHeader>
				<AccordionBody>
					Di website ini, pengunjung dapat mencari informasi, menemukan panduan, atau menggunakan berbagai fitur interaktif yang membantu memenuhi kebutuhan mereka. Website ini dirancang untuk memberikan kemudahan dalam mengakses informasi
					secara efisien.
				</AccordionBody>
			</Accordion>

			<Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(4)}>Bagaimana cara mencari informasi di Website ini?</AccordionHeader>
				<AccordionBody>Untuk mencari informasi, pengunjung cukup menggunakan fitur pencarian atau menjelajahi menu yang ada. Semua konten sudah diorganisir dengan baik untuk memudahkan pencarian informasi yang relevan.</AccordionBody>
			</Accordion>

			<Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
				<AccordionHeader onClick={() => handleOpen(5)}>Apakah Website ini dapat diakses di perangkat mobile?</AccordionHeader>
				<AccordionBody>Ya, website ini dirancang responsif sehingga dapat diakses dengan lancar di perangkat mobile, tablet, dan desktop. Anda dapat mengakses semua fitur dan informasi di mana saja dan kapan saja.</AccordionBody>
			</Accordion>
		</div>
	);
}

export default AccordionCustomIcon;
