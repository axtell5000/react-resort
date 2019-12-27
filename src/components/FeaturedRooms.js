import React, { Component } from 'react';

import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export class FeaturedRooms extends Component {

	// below only works in class based components
	static contextType = RoomContext;

	render() {
		// featuredRooms: rooms means alias of featuredRooms is rooms
		let {loading, featuredRooms: rooms} = this.context;
		rooms = rooms.map(room => {
			return <Room key={room.id} room={room} />
		});
				
		return (
			<section className="featured-rooms">
				<Title title="featured rooms" />
				<div className="featured-rooms-center">
					{loading ? <Loading /> : rooms}
				</div>				
			</section>
		);
	}
}

export default FeaturedRooms;
