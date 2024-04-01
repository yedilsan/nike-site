import { PopularProductCard } from '../components';
import { products } from '../constants';

const PopularProducts = () => {
	return (
		<section id='products' className='max-container max-sm:mt-12'>
			<div className='flex flex-col justify-start gap-5'>
				<h2 className='text-4xl font-palanquin font-bold'>
					Our <span className='text-coral-red'> Popular </span> Products
				</h2>
				<p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
					Explore the pinnacle of comfort, design, and value with our coveted
					collection of sneakers. Embrace a realm where quality meets style,
					elevating your every step. Experience unparalleled craftsmanship and
					the latest trends, curated just for you. Unveil a world where every
					pair tells a story of superior comfort and timeless elegance. Discover
					the essence of excellence in every step you take.
				</p>
			</div>

			<div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
				{products.map(product => (
					<PopularProductCard key={product.name} {...product} />
				))}
			</div>
		</section>
	);
};

export default PopularProducts;
