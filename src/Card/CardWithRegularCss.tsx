import React from 'react';
import img from 'assets/images/women-clothes-img.png';

import './CardWithRegularCss.css'

const CardWithRegularCss = () => {
	return (
		<div className="box_main">
			<h4 className="shirt_text">Woman Scart</h4>
			<p className="price_text">
				Price <span style={{color: "#262626"}}>$ 30</span>
			</p>
			<div className="tshirt_img">
				<img src={img} />
			</div>
			<div className="btn_main">
				<div className="buy_bt">
					<a href="#">Buy Now</a>
				</div>
				<div className="seemore_bt">
					<a href="#">See More</a>
				</div>
			</div>
		</div>
	);
};

export default CardWithRegularCss;

CardWithRegularCss.displayName = 'CardWithRegularCss'
