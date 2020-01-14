import React from 'react';
import { useContext } from 'react'; // this is another way (and probably best way) to use context with functional components

import { RoomContext } from '../context';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))]
};

function RoomsFilter({rooms}) {
	const context = useContext(RoomContext);
	const {
			handleChange, type, capacity, price, minPrice, 
			maxPrice, minSize, maxSize, breakfast, pets
		} = context;
	console.log(context, 'context');

	// get unique types
	let types = getUnique(rooms, 'type');

	// get all types
	types = ['all', ...types];

	// map to jsx
	types = types.map((item, index) => {
		return <option value={item} key={index}>{item}</option>
	});
	
	// for the capacity
	let people = getUnique(rooms, 'capacity');
	people = people.map((item, index) => {
		return <option key={index} value={item}>{item}</option>
	});

	return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">
				{/* select type */}
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select 
						name="type" 
						id="type" 
						value={type} 
						className="form-control"
						onChange={handleChange}>
						{types}
					</select>
				</div>
				{/* select type ends */}
				{/* guests */}
				<div className="form-group">
					<label htmlFor="capacity">guests</label>
					<select 
						name="capacity" 
						id="capacity" 
						value={capacity} 
						className="form-control"
						onChange={handleChange}>
						{people}
					</select>
				</div>
				{/* guests ends */}
				{/* room price */}
				<div className="form-group">
					<label htmlFor="price">room price ${price}</label>
					<input 
						type="range" 
						name="price" 
						id="price" 
						min={minPrice} 
						max={maxPrice}
						value={price}
						onChange={handleChange}
						className="form-control"/>
				</div>
				{/* room price ends */}
				{/* room size */}
				<div className="form-group">
					<label htmlFor="size">room size</label>
					<div className="size-inputs">
						<input 
							type="number" 
							name="minSize" 
							id="size"
							value={minSize}
							onChange={handleChange}
							className="size-input"/>
							<input 
								type="number" 
								name="maxSize" 
								id="size"
								value={maxSize}
								onChange={handleChange}
								className="size-input"/>
					</div>
				</div>
				{/* room size end */}
				{/* extras */}
				<div className="form-group">
					<div className="single-extra">
						<input 
							type="checkbox" 
							name="breakfast" 
							id="breakfast"
							onChange={handleChange} 
							checked={breakfast}/>
						<label htmlFor="breakfast">breakfast</label>
					</div>
					<div className="single-extra">
						<input 
							type="checkbox" 
							name="pets" 
							id="pets"
							onChange={handleChange} 
							checked={pets}/>
						<label htmlFor="pets">pets</label>
					</div>
				</div>
				{/* extras end */}
				
			</form>
		</section>
	)
}

export default RoomsFilter;
