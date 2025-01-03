import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Ikon sosial media
import { MdEmail } from 'react-icons/md'; // Ikon Email

function ContactUs() {
	return (
		<div className="my-10 px-4 container mx-auto">
			{/* Judul */}
			<h1 className="text-center text-3xl font-bold mb-8">Kontak Kami</h1>

			{/* Grid untuk Kontak Umum */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
				{/* Informasi Layanan Perpustakaan & Kearsipan */}
				<Card className="w-full shadow-lg p-6">
					<CardBody>
						<Typography variant="h6" color="blue-gray" className="mb-4 font-semibold text-lg">
							DINAS PERPUSTAKAAN KOTA LHOKSEUMAWE
						</Typography>

						<div className="flex items-center gap-3 mb-4">
							<MapPinIcon className="h-6 w-6 text-blue-500" />
							<div>
								<Typography variant="h6" color="blue-gray" className="font-semibold">
									Layanan Perpustakaan
								</Typography>
								<Typography className="text-sm">Jl. Stadiun Tunas Bangsa No.1, Mon Geudong, Kec. Banda Sakti, Kota Lhokseumawe, Aceh 24355</Typography>
							</div>
						</div>

						<div className="flex items-center gap-3 mb-4">
							<MapPinIcon className="h-6 w-6 text-blue-500" />
							<div>
								<Typography variant="h6" color="blue-gray" className="font-semibold">
									Layanan Kearsipan
								</Typography>
								<Typography className="text-sm">Jl. Stadion Tunas Bangsa, Mon Geudong, Kec. Banda Sakti, Kota Lhokseumawe, Aceh</Typography>
							</div>
						</div>
					</CardBody>
				</Card>

				{/* Jam/Waktu Layanan dan Media Sosial */}
				<Card className="w-full shadow-lg p-6">
					<CardBody>
						{/* Jam/Waktu Layanan */}
						<Typography variant="h6" color="blue-gray" className="font-semibold mb-2">
							Jam/Waktu Layanan
						</Typography>
						<Typography className="text-sm mb-4 w-1/2">
							<div className="flex justify-between">
								<span>Senin – Jum'at</span>
								<span>08.00 – 16.00</span>
							</div>
							<div className="flex justify-between">
								<span>Sabtu</span>
								<span>Libur</span>
							</div>
							<div className="flex justify-between">
								<span>Minggu</span>
								<span>Libur</span>
							</div>
						</Typography>

						{/* Media Sosial */}
						<Typography variant="h6" color="blue-gray" className="font-semibold mb-2">
							Media Sosial
						</Typography>

						<div className="flex items-center gap-3 mb-2">
							<FaInstagram className="h-6 w-6 text-blue-500" />
							<Typography className="text-sm">
								<strong>Instagram:</strong>{' '}
								<a href="https://www.instagram.com/disperpuslhokseumawe" className="text-blue-600" target="_blank" rel="noopener noreferrer">
									disperpuslhokseumawe
								</a>
							</Typography>
						</div>

						<div className="flex items-center gap-3 mb-2">
							<FaFacebook className="h-6 w-6 text-blue-500" />
							<Typography className="text-sm">
								<strong>Facebook:</strong>{' '}
								<a href="https://www.facebook.com/disperpuslhokseumawe" className="text-blue-600" target="_blank" rel="noopener noreferrer">
									disperpuslhokseumawe
								</a>
							</Typography>
						</div>

						<div className="flex items-center gap-3 mb-4">
							<MdEmail className="h-6 w-6 text-blue-500" />
							<div>
								<Typography className="text-sm">
									<strong>Email:</strong>{' '}
									<a href="mailto:disperpus@lhokseumawe.go.id" className="text-blue-600">
										info@lhokseumawekota.go.id
									</a>
								</Typography>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>

			{/* Iframe Google Maps */}
			<div className="my-8">
				<Typography variant="h6" color="blue-gray" className="text-center font-semibold mb-4">
					Lokasi Kami
				</Typography>
				<div className="flex justify-center">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.567440983904!2d97.13634707355925!3d5.173054137384669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30478371b4df1311%3A0x244d0f709419a1b6!2sPerpustakaan%20Kota%20Lhokseumawe!5e0!3m2!1sid!2sid!4v1735203037026!5m2!1sid!2sid"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="rounded-lg shadow-md"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
