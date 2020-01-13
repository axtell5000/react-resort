import React from 'react';

import { RoomConsumer } from '../context';
import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

// below is to show how to work with context in a functional component, one can also use a higher order component
function RoomsContainer() {
	return (
		<RoomConsumer>
			{value => {
				const{loading, sortedRooms, rooms} = value;
				
				if (loading) {
					return <Loading />
				}

				return (
					<>						
						<RoomsFilter rooms={rooms} />
						<RoomsList rooms={sortedRooms} />
					</>
				);
			}}
		</RoomConsumer>
	);
}

export default RoomsContainer;
