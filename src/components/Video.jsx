function Example() {
	return (
		<div className="my-10 px-4">
			<h1 className="text-center text-3xl font-bold mb-8">Video</h1>

			{/* Grid untuk video */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 container mx-auto place-items-center">
				{/* Video  */}
				<div className="flex justify-center items-center my-6">
					<figure className="w-full max-w-md">
						{/* Video */}
						<video className="w-full rounded-lg shadow-lg" controls>
							<source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>

						{/* Caption */}
						<figcaption className="text-center mt-3 text-sm text-gray-500">Video Bersama Para Pengunjung</figcaption>
					</figure>
				</div>
				{/* Video  */}
				<div className="flex justify-center items-center my-6">
					<figure className="w-full max-w-md">
						{/* Video */}
						<video className="w-full rounded-lg shadow-lg" controls>
							<source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>

						{/* Caption */}
						<figcaption className="text-center mt-3 text-sm text-gray-500">TVideo Bersama Para Petugas.</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
}

export default Example;
