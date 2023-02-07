import React from 'react';
import img from 'assets/images/dress-shirt-img.png';
import {
	BoxMain, NewPriceText,
	Price,
	Price1, Price2,
	PriceText
} from './CardWithStyledComponent.styled';

// import * as Styled from './CardWithStyledComponent.styled'

const Price3 = props => <Price1 {...props} children={props.children.split('').reverse()} />

const CardWithStyledComponent = () => {

// 	 В компоненті не можна робити таке
// 	const Price = styled.span`
// 	color: green
// `
	return (
		<BoxMain>
			<h4 className="shirt_text">Man -shirt</h4>
			<PriceText>
				{/*Price <Styled.Price isTrue>$ 30</Price>*/}
				Price <Price isTrue>$ 30</Price>
				Price <Price1>$ 30</Price1>
				Price <Price1 color={'blue'}>$ 30</Price1>
				Price <Price2 color={'blue'}>$ 30</Price2>
			</PriceText>
			<NewPriceText>
				Price
				<Price3 color={'purple'}>$ 30</Price3>
			</NewPriceText>
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
		</BoxMain>
	);
};

export default CardWithStyledComponent;

CardWithStyledComponent.displayName = 'CardWithStyledComponent.jsx'
