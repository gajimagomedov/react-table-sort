import React, {Component} from 'react';
import {PropTypes} from 'prop-types';


function UserData({update, user, index}){

    return(
        <tr onClick={() => update({active: index})}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
        </tr>
    );
    
};

export default UserData;