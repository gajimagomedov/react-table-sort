import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import UserData from './UserData';
import SortBar from './SortBar';


function UserList({data , update}){

	const users = data.map((user,index) =>{
		return <UserData key={`user-${index}`} user={user} index={index} update={update}/>
	})

	return(
		<table className="table-list" cellSpacing="0">
			<SortBar data={data} update={update} />
		<tbody>
			{users}
		</tbody>
		</table>
  );
}

export default UserList;