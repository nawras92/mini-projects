import React, {useState, useEffect} from 'react';
import User from '../components/user.js';

const Users = () => {

	const URL = "https://jsonplaceholder.typicode.com/users";
	const [users, setUsers] = useState([]);

	useEffect(()=>{
		fetch(URL)
		.then((res)=> res.json())
		.then((data)=>setUsers(data))
	})
		

	return (
		<table className="usersTable">
		<thead className="usersTable-thead">
		  <tr className="usersTable-row" >
			<th className="usersTable-th">id</th>
			<th className="usersTable-th">name</th>
			<th className="usersTable-th">username</th>
			<th className="usersTable-th">email</th>
			<th className="usersTable-th">address</th>
			<th className="usersTable-th">phone</th>
			<th className="usersTable-th">website</th>
			<th className="usersTable-th">company</th>
		  </tr>
		</thead>
		<tbody>
			{
				users && ( users.map((user)=> {
					return <User {...user}/> 
				})
				)
			}
		</tbody>
		</table>		

	)
}

export default Users;
