import '../App.css';
import { useEffect, useState } from 'react';
import Filters from './Filters';
import ItemList from '../ItemList.json';
import Item from './Item';

function Content() {
  const [size,setSize] = useState('');
  const [brand,setBrand] = useState([]);
  const [idealfor,setIdealfor] = useState('');
  const [dec,setDec] = useState(false);
  const [items,setItems] = useState([]);
  
  useEffect(()=>{
    setItems([...ItemList]);
  },[setItems]);

  return (
    <div className="content">
        
        <Filters size={size} setSize={setSize} brand={brand} setBrand={setBrand} 
        idealfor={idealfor} setIdealfor={setIdealfor} setDec={setDec}/>

        <div>
            <div className="items">
            {
                brand.length===0 ?
                items
                .filter((item) => size!=='' ? item.size===size : item.size)
                .filter((item) => idealfor!=='' ? item.for===idealfor : item.size)
                .sort(function (a, b) {
                    return dec ? b.price - a.price :  a.price - b.price;
                })
                .map((item) => ( <Item key={item.id} {...item} />))
                :
                items
                .filter((item) => size!=='' ? item.size===size : item.size)
                .filter((item) => idealfor!=='' ? item.for===idealfor : item.size)
                .filter((item) => brand.includes(item.brand))
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

