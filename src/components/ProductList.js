import React, { useState } from 'react';
import { SliderData } from './SliderData';

export default function ProductList( { slides } ) {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current -1);
	}
	
	if(!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	
	return (
		<body>
			<div className="product_name">
				<h1>ASRock X570 AQUA</h1>
			</div>
			<div className="gallery">
				{SliderData.map((slide, index) => {
					return (
						<div className='mySlides' key = {index}>
							{index === current && (<img style={{ width: 480, height: 400}} src = { slide.image } alt = 'Products' />)}
						</div>
					)
				})}
				<button className="w3-button w3-display-left" onClick={prevSlide}>&#10094;</button>
				<button className="w3-button w3-display-right" onClick={nextSlide}>&#10095;</button>

			</div>
			<div className="contain">
				<div className="content_text_1">
					<div className="title">
						<h1>DEFY THE LIMITS</h1>
					</div>
					<div className="content_1">
						<p>ASRock is a company that is always open for new challenges, seeking ways to defy the limits.</p>
					</div>
					<div className="content_2">
						<p>The X570 AQUA was created to be different, using the latest and greatest technology with
							revolutionary design philosophy.</p>
					</div>
				</div>
				<div className="content_text_1_img">
					<img src="./images/product/lamd.png" alt="" />
				</div>

			</div>
			<div className="contain_2">
				<div className="content_text_1">
					<div className="title">
						<h1>LIMITED EDITION YOUR MASTERPIECE MOTHERBOARD</h1>
					</div>
					<div className="content_1">
						<p>Unprecedentedly created to be the best without any compromise, the sophistically designed water block
							and aluminum cover that defines the gorgeous look of X570 AQUA. This is a premium motherboard using
							top luxury material, applying high className specification. It’s a rare and superior motherboard in the
							market! X570 AQUA is undoubtedly the center of everything with limited 999 made only.</p>
					</div>
				</div>
				<div className="content_text_1_img">
					<img src="./images/product/blog-1.jpg" alt="" />
				</div>
			</div>
			<div className="contain_3">
				<div className="content_text_1">
					<div className="title">
						<h1>FULLY WATER COOLED, ELEGANT STYLING</h1>
					</div>
					<div className="content_1">
						<p>Elegant but functional is the main aspect of this unique motherboard, the custom AQUA Cooling Armor
							heatsink is skillfully designed to dissipate the heat of the CPU, VRM and chipset as efficiently as
							possible, it also dazzles with its sophisticated but eye-catching design that covers and protects
							almost the entire board.</p>
					</div>
				</div>
				<div className="content_text_1_img">
					<img src="./images/product/blog-2.jpg" alt="" />
				</div>
			</div>
			<div className="contain_4">
				<div className="content_text_1">
					<div className="title">
						<h1>DESIGNED BY ENTHUSIAST, MADE TO PERFECTION</h1>
					</div>
					<div className="content_1">
						<p>The X570 AQUA is the only completely water-cooled X570 motherboard – its unique all-copper cooling
							block covers the CPU, VRM and X570 Chipset to provide unbelievable performance and stability, X570
							AQUA is the ultimate selection for the water cooling fanatics.</p>
					</div>
				</div>
				<div className="content_text_1_img">
					<img src="./images/product/blog-3.jpg" alt="" />
				</div>
			</div>
			<div className="background-color">
				<div className="w3-content" style={{maxWidth:"1200px"}}>
					<img className="mySlides1" src="./images/product/X570-Aqua-w_1.jpg" style={{width:"100%",display:"none"}} alt="" />
					<img className="mySlides1" src="./images/product/X570-Aqua-w_2.jpg" style={{width:"100%"}} alt="" />
					<img className="mySlides1" src="./images/product/X570-Aqua-w_3.jpg" style={{width:"100%",display:"none"}} alt="" />

					<div className="w3-row-padding w3-section">
						<div className="w3-col s4">
							<img className="demo w3-opacity w3-hover-opacity-off" src="./images/product/X570-Aqua-w_1.jpg" style={{width:"100%", cursor:"pointer"}} onClick="currentDiv(1)" alt="" />
						</div>
						<div className="w3-col s4">
							<img className="demo w3-opacity w3-hover-opacity-off" src="./images/product/X570-Aqua-w_2.jpg" style={{width:"100%", cursor:"pointer"}} onClick="currentDiv(2)" alt="" />
						</div>
						<div className="w3-col s4">
							<img className="demo w3-opacity w3-hover-opacity-off" src="./images/product/X570-Aqua-w_3.jpg" style={{width:"100%", cursor:"pointer"}} onClick="currentDiv(3)" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="space">
				<div className="title">
					<h1>DESIGN BY ENTHUSIAST MADE TO PERFECTION</h1>
				</div>
			</div>
		</body>
	);
}
