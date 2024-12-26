import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';

function CardDefault() {
	return (
		<>
			<h1 className="w-full text-center text-3xl font-bold text-blue-600 mt-6">Berita Terbaru</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 container mx-auto">
				{/* Card 1 */}
				<Card className="w-full ">
					<CardHeader color="blue-gray" className="relative h-56">
						<img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" className="w-full h-full object-cover" />
					</CardHeader>
					<CardBody>
						<Typography variant="h5" color="blue-gray" className="mb-2">
							UI/UX Review Check
						</Typography>
						<Typography>The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.</Typography>
					</CardBody>
					<CardFooter className="pt-0">
						<Button>Read More</Button>
					</CardFooter>
				</Card>

				{/* Card 2 */}
				<Card className="w-full ">
					<CardHeader color="blue-gray" className="relative h-56">
						<img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" className="w-full h-full object-cover" />
					</CardHeader>
					<CardBody>
						<Typography variant="h5" color="blue-gray" className="mb-2">
							UI/UX Review Check
						</Typography>
						<Typography>The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.</Typography>
					</CardBody>
					<CardFooter className="pt-0">
						<Button>Read More</Button>
					</CardFooter>
				</Card>

				{/* Card 3 */}
				<Card className="w-full ">
					<CardHeader color="blue-gray" className="relative h-56">
						<img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" className="w-full h-full object-cover" />
					</CardHeader>
					<CardBody>
						<Typography variant="h5" color="blue-gray" className="mb-2">
							UI/UX Review Check
						</Typography>
						<Typography>The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.</Typography>
					</CardBody>
					<CardFooter className="pt-0">
						<Button>Read More</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}

export default CardDefault;
