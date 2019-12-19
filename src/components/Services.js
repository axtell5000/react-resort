import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

import Title from './Title';

export class Services extends Component {

	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'free cocktails',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sequi?'
			},
			{
				icon: <FaHiking />,
				title: 'Endless hiking',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sequi?'
			},
			{
				icon: <FaShuttleVan />,
				title: 'Free shuttle',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sequi?'
			},
			{
				icon: <FaBeer />,
				title: 'Strongest beer',
				info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sequi?'
			}
		]
	}

	render() {
		return (
			<section className="services">			
				<Title title="services" />
				<div className="services-center">
					{
						this.state.services.map((serviceItem, index) => {
							return <article key={index} className="service">
								<span>{serviceItem.icon}</span>
								<h6>{serviceItem.title}</h6>
								<p>{serviceItem.info}</p>
							</article>
						})
					}
				</div>
			</section>
		);
	}
}

export default Services;
