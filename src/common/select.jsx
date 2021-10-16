import React, { Component } from "react";

const Select = ({ name, label, options, error, ...extra }) => {
	return (
		<div className='form-group'>
			<label htmlFor={name}>{label}</label>
			<select {...extra} name={name} id={name} className='form-control'>
				<option value='' />
				{options.map((option) => (
					<option key={option._id} value={option._id}>
						{option.name}
					</option>
				))}
			</select>
			{error && <div className='alert alert-danger'>{error}</div>}
		</div>
	);
};

export default Select;