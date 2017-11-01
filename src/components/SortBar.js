import React , {Component} from 'react';



class SortBar extends Component {
    constructor(props){
        super(props)

        this.sorted = {id: true, name: true}
    }


    sort(type, arr){

        const {update, data} = this.props;
        const isSorted = this.sorted[type];

        let direction = isSorted ? 1 : -1;

        const sorted = [].slice.call(data).sort((a,b) => {
            if(a[arr] === b[arr]){
                return 0;
            }
            return a[arr] > b[arr] ? direction : direction * -1;
        });

        this.sorted[type] = !isSorted;

        update({
            data: sorted,
            active: 0
        });

       
    }

    sortLast(){
        const { data } = this.props;
    }

    render(){
        return(
            <thead>
                <tr>
                    <th onClick={() => this.sort('id','id')}>id {this.sorted.id ? <span>▼</span> : <span>▲</span>}</th>	
                    <th onClick={() => this.sort('name','firstName')}>Имя {this.sorted.name ? <span>▼</span> : <span>▲</span>}</th>
                    <th onClick={() => this.sortLast()}>Фамилия</th>
                    <th>Mail</th>
                    <th>Телефон</th>
                </tr>
		    </thead>
        );
    }

}

export default SortBar;