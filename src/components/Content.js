import '../App.css';
import { useState } from 'react';
import Filters from './Filters';
import ItemList from '../ItemList.json';
import Item from './Item';

function Content() {
  const [size,setSize] = useState(null);
  const [brand,setBrand] = useState([]);
  const [idealfor,setIdealfor] = useState(null);
  const [dec,setDec] = useState(true);

  return (
    <div className="content">
        
        <Filters size={size} setSize={setSize} brand={brand} setBrand={setBrand} 
        idealfor={idealfor} setIdealfor={setIdealfor} setDec={setDec}/>

        <div>
            <div className="items">
            {
                ItemList.sort(function (a, b) {
                    return !dec ? a.price - b.price : b.price - a.price;
                }).map((item) => ( <Item key={item.id} {...item} />))
            }
            </div>
        </div>
        
    </div>
  );
}

export default Content;


