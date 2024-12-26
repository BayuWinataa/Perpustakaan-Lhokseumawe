import React from 'react';

function Visimisi() {
	return (
		<div className="bg-gray-100 min-h-screen py-12 px-4 mt-24">
			<div className="max-w-4xl  bg-white rounded-lg shadow-md p-6 container mx-auto">
				<h1 className="text-3xl font-semibold text-center text-blue-800 mb-6">Visi dan Misi Dinas Perpustakaan dan Kearsipan Kota Lhokseumawe</h1>

				{/* Visi Section */}
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-blue-700 mb-4"> Visi</h2>
					<p className="text-lg text-gray-700 leading-relaxed mb-4">Terwujudnya Perpustakaan dan Arsip Sebagai Pusat Ilmu Pengetahuan, Informasi, Dokumentasi Dalam Upaya Mencerdaskan Bangsa.</p>
				</div>

				{/* Misi Section */}
				<div>
					<h2 className="text-2xl font-semibold text-blue-700 mb-4"> Misi</h2>
					<p className="text-lg text-gray-700 leading-relaxed mb-4">Adapun misi dari Dinas Perpustakaan dan Kearsipan Kota Lhokseumawe, antara lain:</p>
					<ul className="list-decimal pl-5 space-y-2 text-gray-700">
						<li>Merupakan sarana bagi pengguna agar terampil belajar sepanjang hayat dan mampu mengembangkan daya pikir agar mereka dapat hidup sebagai warga yang bertanggung jawab.</li>
						<li>Meningkatkan Kualitas atau Kuantitas Kelembagaan Aparatur Perpustakaan.</li>
						<li>Menumbuhkembangkan kemauan dan kebiasaan membaca bagi kalangan masyarakat luas.</li>
						<li>Memberikan pelayanan informasi kepustakaan dan kearsipan kepada masyarakat dan instansi terkait.</li>
						<li>Memberikan pelayanan teknis perpustakaan keliling pada sekolah-sekolah, kampus dan tempat umum lainnya.</li>
						<li>Meningkatkan upaya pelayanan, penyelamatan dan pelestarian bahan pustaka.</li>
						<li>Pengelolaan dan pendayagunaan kearsipan yang bernilai guna sebagai alat bukti yang valid.</li>
						<li>Memberikan pembinaan dan petunjuk teknis tentang pengelolaan perpustakaan dan kearsipan.</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Visimisi;
