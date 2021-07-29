import React from 'react';


const User = (props) => {
	const {	id="", 
			name="", 
			username="", 
			email="",
			address="", 
			phone="",
			website="", 
			company=""} = props;
	const {street="", city="", suite="", zipcode=""} = address;
	const {companyName="", catchPhrase="", bs=""} = company;
	return (
	  <tr className="usersTable-row" id={id}>
		<td className="usersTable-cell">{id}</td>
		<td className="usersTable-cell">{name}</td>
		<td className="usersTable-cell">{username}</td>
		<td className="usersTable-cell">{email}</td>
		<td className="usersTable-cell">{street}-{suite}-{city}-{zipcode}</td>
		<td className="usersTable-cell">{phone}</td>
		<td className="usersTable-cell">{website}</td>
		<td className="usersTable-cell">{companyName}-{catchPhrase}-{bs}</td>
	  </tr>
	)

}

export default User;
