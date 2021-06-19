import { useState } from 'react';
import '../App.css';
import ItemList from '../ItemList.json';
import Item from './Item';

function Items(props) {
    const 
    props.size!==[] ? ItemList = ItemList.filter(item => props.size.includes(item.size)) : [];
    ItemList = ItemList.filter(item => props.size.includes(item.size));
    ItemList = ItemList.filter(item => props.size.includes(item.size));

    return (
        <div className="items">
        {
            ItemList.map((item) => ( <Item key={item.id} {...item} />))
        }
        </div>
    );
}

export default Items;
