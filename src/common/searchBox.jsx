import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
	return (
		<input
			type='text'
			name='query'
			className='form-control'
			placeholder='Search...'
			value={value}
			style={{ marginBottom: "20px" }}
			onChange={(e) => onChange(e.currentTarget.value)}
		/>
	);
};

export default SearchBox;