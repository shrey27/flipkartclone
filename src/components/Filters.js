import '../App.css';

function Filters(props) {
  
  const sizeUpdate = (e) => {
    props.setSize(e.target.value);
  }

  const brandUpdate = (e) => {
        if(!props.brand.includes(e.target.value))
        {
        props.brand.push(e.target.value);
        props.setBrand([...props.brand]);
        }
        else{
            const arr = props.brand.filter((value) => value !== e.target.value);
            props.setBrand([...arr]);        
        }
    }

    const idealForUpdate = (e) => {
        props.setIdealfor(e.target.value);
    }

    const clearArray = () => {
        props.setBrand([]);
        props.setIdealfor(null);
        props.setSize(null);
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
    }

  return (
    <div className="filters">
        <button onClick={()=>props.setDec(true)}>Sort: Low-to-high</button>
        <button onClick={()=>props.setDec(false)}>Sort: High-to-low</button>
        <div className="filters-name">
            <h4>Filters</h4>
            <h6 onClick={clearArray}>Clear</h6>
        </div>

        <div className='filter-info'>
            <p>{props.size}</p>
            <p>{props.idealfor}</p>    
        </div>

        <div className="filters-size">
            <h4>Size</h4>
            <section className="filters-section-size">
                <button value='S'  className='filters-button'
                onClick={sizeUpdate}>S</button>
                <button value='M'  className='filters-button'
                onClick={sizeUpdate}>M</button>
                <button value='L'  className='filters-button'
                onClick={sizeUpdate}>L</button>
            </section>      
        </div>

        <div className="filters-brand">
            <h4>Brand</h4>
            <section className="filters-section">
                <div className="filters-section-brand">
                    <input type='checkbox' value='Levis' 
                    onClick={brandUpdate}/>
                    <label>Levis</label>
                </div>
                <div className="filters-section-brand">
                    <input type='checkbox' value='Adidas'
                    onClick={brandUpdate}/>
                    <label>Adidas</label>
                </div>
                <div className="filters-section-brand">
                    <input type='checkbox' value='Nike'
                    onClick={brandUpdate}/>
                    <label>Nike</label>
                </div>
                <div className="filters-section-brand">
                    <input type='checkbox' value='UCB'
                    onClick={brandUpdate}/>
                    <label>UCB</label>
                </div>
            </section> 
        </div>

        <div className="filters-ideal-for">
            <h4>Ideal For</h4>
            <section className="filters-section">
                <button value='Men'  className="filters-button"
                onClick={idealForUpdate}>Men</button>
                <button value='Women'  className="filters-button"
                onClick={idealForUpdate}>Women</button>
                <button value='Kids'  className="filters-button"
                onClick={idealForUpdate}>Kids</button>
            </section> 
        </div>
    </div>
  );
}

export default Filters;

