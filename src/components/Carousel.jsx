import { Carousel, Typography } from '@material-tailwind/react';
import img1 from '../assets/11.jpeg';
import img2 from '../assets/12.jpeg';
import img3 from '../assets/13.jpeg';

 function CarouselWithContent() {
	return (
		<Carousel className="rounded h-96 mt-24">
			<div className="relative h-full w-full">
				<img src={img1} alt="image 1" className="h-full w-full object-cover" />
				<div className="absolute inset-0 grid h-full w-full place-items-center ">
					{/* <div className="w-3/4 text-center md:w-2/4">
						<Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							The Beauty of Nature
						</Typography>
						<Typography variant="lead" color="white" className="mb-12 opacity-80">
							It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.
						</Typography>
					</div> */}
				</div>
			</div>
			<div className="relative h-full w-full">
				<img src={img2} alt="image 1" className="h-full w-full object-fill" />
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
					{/* <div className="w-3/4 text-center md:w-2/4">
						<Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							The Beauty of Nature
						</Typography>
						<Typography variant="lead" color="white" className="mb-12 opacity-80">
							It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.
						</Typography>
					</div> */}
				</div>
			</div>
			<div className="relative h-full w-full">
				<img src={img3} alt="image 1" className="h-full w-full object-fill" />
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
					{/* <div className="w-3/4 text-center md:w-2/4">
						<Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							The Beauty of Nature
						</Typography>
						<Typography variant="lead" color="white" className="mb-12 opacity-80">
							It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit.
						</Typography>
					</div> */}
				</div>
			</div>
		</Carousel>
	);
}

export default CarouselWithContent;