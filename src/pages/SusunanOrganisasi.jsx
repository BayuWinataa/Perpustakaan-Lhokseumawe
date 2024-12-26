import img from '../assets/organisasi.png';

function SusunanOrganisasi() {
	return (
		<div className="container mx-auto my-32 px-4">
			<h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Susunan Organisasi</h1>

			{/* Gambar Susunan Organisasi */}
			<div className="flex justify-center">
				<img src={img} alt="Organisasi" className="rounded-lg shadow-lg max-w-full h-auto border-4 border-blue-300" />
			</div>

			{/* Deskripsi (Optional) */}
			<div className="text-center mt-6 text-gray-700 text-sm">
				<p>Gambar di atas menunjukkan susunan organisasi Dinas Perpustakaan Kota Lhokseumawe.</p>
			</div>
		</div>
	);
}

export default SusunanOrganisasi;
