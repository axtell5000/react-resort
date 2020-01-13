import React from 'react';

import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

function RoomsContainer() {
	return (
		<div>
			Hello from RoomsContainer
			<RoomsFilter />
			<RoomsList />
		</div>
	);
}

export default RoomsContainer;
