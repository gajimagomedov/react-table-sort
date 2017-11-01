import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import UserData from './UserData';


function UserList({data , update}){

	const users = data.map((user,index) =>{
		return <UserData key={`user-${index}`} user={user} index={index} update={update}/>
	})

	return(
		<table className="table-list" cellSpacing="0">
		<thead>
			<tr>
				<th>id</th>	
				<th>Имя</th>
				<th>Фамилия</th>
				<th>Mail</th>
				<th>Телефон</th>
			</tr>
		</thead>
		<tbody>
			{users}
		</tbody>
		</table>
  );
}

export default UserList;