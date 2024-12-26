import React from 'react';

function GambaranUmum() {
	return (
		<div className="bg-gray-100 min-h-screen py-12 px-4">
			<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
				<h1 className="text-3xl font-semibold text-center text-blue-800 mb-6">Gambaran Umum Perpustakaan Kota Lhokseumawe</h1>

				{/* Deskripsi Umum */}
				<div className="mb-8">
					<p className="text-lg text-gray-700 leading-relaxed mb-4">
						Perpustakaan Kota Lhokseumawe didirikan sebagai bagian dari upaya untuk mendukung visi dan misi Dinas Perpustakaan dan Kearsipan Kota Lhokseumawe dalam mencerdaskan bangsa dan meningkatkan minat baca di kalangan masyarakat.
						Perpustakaan ini menyediakan berbagai koleksi buku, majalah, jurnal, dan berbagai sumber daya informasi yang dapat diakses oleh masyarakat secara gratis. Dengan fasilitas yang modern dan berbagai program layanan, perpustakaan
						ini bertujuan untuk menjadi pusat pendidikan non-formal yang dapat menunjang kualitas sumber daya manusia di kota Lhokseumawe.
					</p>
				</div>

				{/* Sejarah Perpustakaan */}
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-blue-700 mb-4">Sejarah Perpustakaan Kota Lhokseumawe</h2>
					<p className="text-lg text-gray-700 leading-relaxed mb-4">
						Perpustakaan Kota Lhokseumawe telah berdiri sejak tahun 2000 dan terus berkembang untuk memenuhi kebutuhan masyarakat akan akses informasi. Seiring dengan berjalannya waktu, perpustakaan ini tidak hanya menyediakan koleksi buku,
						tetapi juga menghadirkan berbagai layanan digital dan teknologi informasi. Hal ini bertujuan untuk memudahkan masyarakat dalam mengakses informasi terbaru dan relevan di era digital.
					</p>
				</div>

				{/* Fasilitas dan Layanan */}
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-blue-700 mb-4">Fasilitas dan Layanan</h2>
					<ul className="list-disc pl-5 space-y-2 text-gray-700">
						<li>Penyediaan buku, jurnal, dan majalah dalam berbagai bidang ilmu</li>
						<li>Layanan internet gratis untuk masyarakat</li>
						<li>Penyediaan ruang baca yang nyaman dan kondusif</li>
						<li>Layanan perpustakaan keliling untuk menjangkau masyarakat di daerah terpencil</li>
						<li>Penyelenggaraan program literasi dan pelatihan untuk meningkatkan keterampilan masyarakat</li>
					</ul>
				</div>

				{/* Tujuan Perpustakaan */}
				<div>
					<h2 className="text-2xl font-semibold text-blue-700 mb-4">Tujuan Perpustakaan Kota Lhokseumawe</h2>
					<p className="text-lg text-gray-700 leading-relaxed mb-4">
						Tujuan utama dari Perpustakaan Kota Lhokseumawe adalah untuk menjadi pusat informasi dan literasi yang mampu mendukung pendidikan masyarakat. Melalui berbagai layanan dan fasilitas yang disediakan, perpustakaan ini berkomitmen
						untuk mendukung peningkatan kualitas pendidikan dan menciptakan masyarakat yang lebih cerdas dan terinformasi.
					</p>
				</div>
			</div>
		</div>
	);
}

export default GambaranUmum;
