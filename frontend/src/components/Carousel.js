import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
const sliderProps = {
	showThumbs: false,
	infiniteLoop: true,
	showArrows: true,
	useKeyboardArrows: true,
	centerMode: true,
	emulateTouch: true,
	showIndicators: false,
	centerSlidePercentage: 50,
	autoPlay: true,
};
const CarouselComponent = ({ products }) => {
	const [centerSlidePercentage, setCenterSlidePercentage] = useState(45);
	const onWindowResize = () => {
		if (window.innerWidth <= 1000) {
			setCenterSlidePercentage(100);
		} else {
			setCenterSlidePercentage(45);
		}
	};
	useEffect(() => {
		window.addEventListener('resize', onWindowResize);
		return onWindowResize();
	}, []);
	return (
		<div className=''>
			<Carousel {...sliderProps} centerSlidePercentage={centerSlidePercentage}>
				{products?.map((prod) => {
					return (
						<div className='slider-image-container' key={prod._id}>
							<img src={prod.image} alt='img' className='slider-image' />
							<Link to={`/product/${prod._id}`}>
								<p className='legend'>{prod.name}</p>
							</Link>
						</div>
					);
				})}
			</Carousel>
			<hr />
		</div>
	);
};

export default CarouselComponent;
