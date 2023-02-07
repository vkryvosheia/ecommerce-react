import React from 'react';
import img from 'assets/images/tshirt-img.png';
import styles from './CardWithModuleCss.module.css'
import cx from 'classnames';

const CardWithModuleCss = () => {
	return (
		<div className={styles.boxMain}>
			<h4 className={styles.shirtText}>Man T -shirt</h4>
			<p className={styles.priceText}>
				Price <span className={cx(styles.price, {
					newClassName: true
			})} >$ 30</span>
			</p>
			<div className="tshirt_img">
				<img src={img}/>
			</div>
			<div className="btn_main">
				<div className="buy_bt">
					<a href="src#">Buy Now</a>
				</div>
				<div className="seemore_bt">
					<a href="src#">See More</a>
				</div>
			</div>
		</div>
	);
};

export default CardWithModuleCss;

CardWithModuleCss.displayName = 'CardWithModuleCss'
