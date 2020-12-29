import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';


const ParallaxAsProp = ({ minY, maxY, img }) => (
	<Parallax
		className="custom-class"
		offsetYMax={maxY}
		offsetYMin={minY}
		slowerScrollRate={false}
		tag="figure">
		<img src={img} alt="image description" />
		<h3>With Props
		{maxY}
		{minY}
		</h3>
	</Parallax>
);

ParallaxAsProp.propTypes = exact({
	minY: PropTypes.number,
	maxY: PropTypes.number,
	img: PropTypes.string,
});

export default ParallaxAsProp;