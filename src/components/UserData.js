import React, {Component} from 'react';
import {PropTypes} from 'prop-types';


function UserData({update, user, index}){
    
    return(
        <tr onClick={() => update({active: index})}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    );
}

export default UserData;