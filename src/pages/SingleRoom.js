import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import defaultBack from '../images/room-3.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {RoomContext} from '../context';

export class SingleRoom extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBack
		};
		
	}

	static contextType = RoomContext;

	// componentDidMount() {}

	render() {
		const {getRoom} = this.context;
		const room = getRoom(this.state.slug);
		if (!room) {
			return <div className="error">
				<h3>no such room can be found...</h3>
				<Link to="/rooms" className="btn-primary">back to rooms</Link>
			</div>
		}
		
		return (
			<div>
				Hello from single room {room.name}
			</div>
		);
	}
}

export default SingleRoom;
