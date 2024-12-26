import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';

const cardData = [
	{
		image: img1,
		title: 'UI/UX Review Check',
		description: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio'",
	},
	{
		image: img2,
		title: 'Business Strategies',
		description: 'Explore the latest strategies in the business world. Learn more about new innovations and market trends.',
	},
	{
		image: img3,
		title: 'Design Thinking',
		description: "A deep dive into design thinking and how it can drive innovation in today's competitive market.",
	},
	{
		image: img4,
		title: 'Design Thinking',
		description: "A deep dive into design thinking and how it can drive innovation in today's competitive market.",
	},
	{
		image: img5,
		title: 'Design Thinking',
		description: "A deep dive into design thinking and how it can drive innovation in today's competitive market.",
	},
	{
		image: img6,
		title: 'Design Thinking',
		description: "A deep dive into design thinking and how it can drive innovation in today's competitive market.",
	},
];

function CardDefault() {
	return (
		<>
			<h1 className="w-full text-center text-3xl font-bold text-blue-600 mt-6">Berita Terbaru</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 container mx-auto">
				{cardData.map((card, index) => (
					<Card key={index} className="w-full mt-5">
						<CardHeader color="blue-gray" className="relative h-56">
							<img src={card.image} alt="card-image" className="w-full h-full object-contain" />
						</CardHeader>
						<CardBody>
							<Typography variant="h5" color="blue-gray" className="mb-2">
								{card.title}
							</Typography>
							<Typography className='hover:text-blue-600 transition duration-300'>{card.description}</Typography>
						</CardBody>
						<CardFooter className="pt-0">
							<Button>Baca Selengkapnya</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</>
	);
}

export default CardDefault;
