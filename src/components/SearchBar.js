import React, {Component} from "react";


function SearchBar({term, data, update}) {

    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        const filter = data.filter(user =>{
            return user.firstName.toLowerCase().includes(value);
        });

        update({
            data: filter,
            active: 0,
            term: value
        })
    };

    return (
        <div className="search-bar">
            <input
                value={term}
                type="text"
                className="search-bar__input"
                placeholder="Поиск..."
                onChange={dataSearch}
            />
        </div>
    );
}


export default SearchBar;