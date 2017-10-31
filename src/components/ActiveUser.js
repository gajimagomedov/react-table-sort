import React from 'react';
import activeUser from '../user.svg'

function ActiveUser({data, active}){

    if(!data || !data[active]) {return <h3>Пользователь не найден!</h3>}
    
    const user = data[active];

    return(
        <div className="active-user">
            <img src={activeUser} className="active-user__img" alt="user"/>
            <div className="user-info">
                <h3 className="user-info__select">{`${user.firstName} ${user.lastName}`}</h3>
                <div className="user-info__description"><strong>Описание:</strong></div>
                <textarea readOnly placeholder={user.description}></textarea>
                <div className="user-info__adress">
                    <span><strong>Адрес проживания:</strong> ${user.address.streetAddress}</span>
                    <span><strong>Город:</strong> {user.address.city}</span>
                    <span><strong>Провинция/штат:</strong> {user.address.state}</span>
                    <span><strong>Индекс:</strong> {user.address.zip}</span>   
                </div>
            </div>
        </div>
    );
}

export default ActiveUser;