import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 75, width: 75 }} >
				<div className="Tilt-inner"> 
					<img alt='logo' style={{paddingTop : '5px'}} src={brain}/>
				</div>
			</Tilt>
		</div>
		);
}

export default Logo;