import '../App.css';
import { useState } from 'react';
import Filters from './Filters';
import Items from './Items';

function Content() {
  const [size,setSize] = useState([]);
  const [brand,setBrand] = useState([]);
  const [idealfor,setIdealfor] = useState([]);
  return (
    <div className="content">
        <Filters size={size} setSize={setSize} brand={brand} setBrand={setBrand} 
        idealfor={idealfor} setIdealfor={setIdealfor}/>
        <Items size={size}  brand={brand} idealfor={idealfor}/>
    </div>
  );
}

export default Content;


