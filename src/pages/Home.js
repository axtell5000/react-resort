import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

// Banner is a child of Hero and Link is a child of Banner
const Home = () => {
	return (
		<>			
			<Hero>
				<Banner title="luxurious rooms" subtitle="deluxe rooms starting at R1000">
					<Link to="/rooms" className="btn-primary" >
						our rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms />			
		</>
	)
}


export default Home;
