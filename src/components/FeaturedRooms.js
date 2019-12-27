import React, { Component } from 'react';

import { RoomContext } from '../context';

export class FeaturedRooms extends Component {

	// below only works in class based components
	static contextType = RoomContext;

	render() {
		const { featuredRooms: rooms} = this.context;
		console.log(rooms);
		
		return <div>hello from featured rooms</div>;
	}
}

export default FeaturedRooms;
