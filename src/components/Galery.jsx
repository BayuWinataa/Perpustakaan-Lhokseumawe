function MasonryGridGallery() {
	const images = ['../src/assets/1.jpeg', '../src/assets/2.jpeg', '../src/assets/3.jpeg', '../src/assets/4.jpeg', '../src/assets/5.jpeg', '../src/assets/6.jpeg', '../src/assets/7.jpeg', '../src/assets/8.jpeg', '../src/assets/9.jpeg', '../src/assets/10.jpeg'];

	return (
		<div >
			<h1 className="text-center text-3xl font-bold text-blue-600 mt-32">GALERI GAMBAR</h1>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 container mx-auto my-20">
				<div className="grid gap-4">
					{images.slice(0, 3).map((src, index) => (
						<div key={index}>
							<img className="h-auto max-w-full rounded-lg object-cover object-center" src={src} alt={`gallery-photo-${index + 1}`} />
						</div>
					))}
				</div>
				<div className="grid gap-4">
					{images.slice(3, 6).map((src, index) => (
						<div key={index + 3}>
							<img className="h-auto max-w-full rounded-lg object-cover object-center" src={src} alt={`gallery-photo-${index + 4}`} />
						</div>
					))}
				</div>
				<div className="grid gap-4">
					{images.slice(6, 9).map((src, index) => (
						<div key={index + 6}>
							<img className="h-auto max-w-full rounded-lg object-cover object-center" src={src} alt={`gallery-photo-${index + 7}`} />
						</div>
					))}
				</div>
				<div className="grid gap-4">
					{images.slice(9, 10).map((src, index) => (
						<div key={index + 9}>
							<img className="h-auto max-w-full rounded-lg object-cover object-center" src={src} alt={`gallery-photo-${index + 10}`} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default MasonryGridGallery;
