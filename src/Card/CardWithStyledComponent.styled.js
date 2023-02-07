import styled, { css } from 'styled-components';

const BoxMain = styled.div`
    width: 100%;
    background-color: #ffffff;
    height: auto;
    padding: 20px;
    box-shadow: 0px 0 30px 10px #f0f0f0;
    margin-bottom: 20px;
`;

const price_text = css`
	width: 100%;
	font-size: 16px;
	color: #f26522;
	text-align: center;
	margin: 0;
`

const PriceText = styled.p`
  ${ price_text }
`

const NewPriceText = styled(PriceText)`
  font-size: 12px;
`

const Price = styled.span`
	color: green;
	
	${({ isTrue }) => isTrue &&
	`background-color: black`
}
`

const Price1 = styled.span(props => ({
	color: props.color,
}))

const Price2 = styled.span`
  color: ${props => props.color || "green"};
`

export {BoxMain, PriceText, NewPriceText, Price, Price1, Price2}