import '../App.css';
import { useEffect, useState } from 'react';
import Filters from './Filters';
import ItemList from '../ItemList.json';
import Item from './Item';

function Content() {
  const [size,setSize] = useState('');
  const [brand,setBrand] = useState([]);
  const [price,setPrice] = useState([]);
  const [idealfor,setIdealfor] = useState('');
  const [dec,setDec] = useState(false);
  const [items,setItems] = useState([]);
  
  useEffect(()=>{
    setItems([...ItemList]);
  },[setItems]);

  return (
    <div className="content">
        
        <Filters size={size} setSize={setSize} brand={brand} setBrand={setBrand} 
        idealfor={idealfor} setIdealfor={setIdealfor} setDec={setDec} price={price} setPrice={setPrice} />

        <div>
            <div className="items">
            {
                items
                .filter((item) => size!=='' ? item.size===size : item.size)
                .filter((item) => idealfor!=='' ? item.for===idealfor : item.size)
                .filter((item) => brand.length!==0 ? brand.includes(item.brand) : item.brand)
                .filter((item) => price.length!==0 ? price.includes(item.price) : item.price)
                .sort(function (a, b) {
                    return dec ? b.price - a.price :  a.price - b.price;
                })
                .map((item) => ( <Item key={item.id} {...item} />))
            }
            </div>
        </div>

    </div>
  );
}

export default Content;

