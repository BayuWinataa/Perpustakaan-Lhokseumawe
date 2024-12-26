import React from 'react';

function Sejarah() {
	return (
		<div className="bg-gray-100 min-h-screen py-12 px-4">
			<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
				<h1 className="text-3xl font-semibold text-center text-blue-800 mb-6">Sejarah Dinas Perpustakaan dan Kearsipan Kota Lhokseumawe</h1>
				<p className="text-lg text-gray-700 leading-relaxed mb-4">
					Kantor Perpustakaan dan Arsip Kota Lhokseumawe terbentuk berdasarkan Qanun Kota Lhokseumawe Nomor 4 Tahun 2012. Bertujuan untuk membantu mencerdaskan anak bangsa dan sebagai salah satu akses dalam rangka meningkatkan kualitas
					Sumber Daya Manusia dengan peningkatan minat baca.
				</p>
				<p className="text-lg text-gray-700 leading-relaxed mb-4">
					Dinas Perpustakaan dan Kearsipan Kota Lhokseumawe dibentuk dan disahkan berdasarkan Qanun Kota Lhokseumawe Nomor 9 Tahun 2016 tentang pembentukan dan susunan perangkat daerah Kota Lhokseumawe serta Peraturan Kota Lhokseumawe, dan
					Peraturan Walikota Nomor 22 Tahun 2017 tentang Kedudukan, Susunan Organisasi, Tugas dan Fungsi, Tata Kerja Dinas Perpustakaan dan Kearsipan Kota Lhokseumawe.
				</p>
				<p className="text-lg text-gray-700 leading-relaxed mb-4">
					Undang-Undang 43 Tahun 2007 Tentang Perpustakaan dan Undang-Undang Nomor 43 Tahun 2009 Tentang Kearsipan, Qanun, serta peraturan Walikota memberikan landasan hukum yang kuat bagi fungsi serta keberadaan perpustakaan dan kearsipan.
				</p>

				<div className="mt-8">
					<h2 className="text-2xl font-semibold text-blue-800 mb-4">Landasan Hukum</h2>
					<ul className="list-disc pl-5 space-y-2 text-gray-700">
						<li>Qanun Kota Lhokseumawe Nomor 4 Tahun 2012</li>
						<li>Qanun Kota Lhokseumawe Nomor 9 Tahun 2016</li>
						<li>Peraturan Walikota Nomor 22 Tahun 2017</li>
						<li>Undang-Undang 43 Tahun 2007 Tentang Perpustakaan</li>
						<li>Undang-Undang Nomor 43 Tahun 2009 Tentang Kearsipan</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sejarah;
