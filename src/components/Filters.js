import '../App.css';

function Filters(props) {

  const sizeUpdate = (e) => {
      if(!props.size.includes(e.target.value))
      {
        props.size.push(e.target.value);
        props.setSize([...props.size]);
      }
      else{
            const arr = props.size.filter((value) => value !== e.target.value);
            props.setSize([...arr]);        
      }
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
        if(!props.idealfor.includes(e.target.value))
        {
        props.idealfor.push(e.target.value);
        props.setIdealfor([...props.idealfor]);
        }
        else{
            const arr = props.idealfor.filter((value) => value !== e.target.value);
            props.setIdealfor([...arr]);        
        }
    }

    const clearArray = () => {
        props.setBrand([]);
        props.setIdealfor([]);
        props.setSize([]);
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
    }

  return (
    <div className="filters">
        <div className="filters-name">
            <h4>Filters</h4>
            <h6 onClick={clearArray}>Clear</h6>
        </div>

        <div className='filters-values'>
        {
            props.size.map((value) => <p>{value}</p>)
        }
        </div>
        <div className='filters-values'>
        {
            props.brand.map((value) => <p>{value}</p>)
        }
        </div>
        <div className='filters-values'>
        {
            props.idealfor.map((value) => <p>{value}</p>)
        }
        </div>

        <div className="filters-size">
            <h4>Size</h4>
            <section className="filters-section-size">
                <button value='S'  className="filters-button"
                onClick={sizeUpdate}>S</button>
                <button value='M'  className="filters-button"
                onClick={sizeUpdate}>M</button>
                <button value='L'  className="filters-button"
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
                <div className="filters-section-ideal-for">
                    <input type='checkbox' value='Men'
                    onClick={idealForUpdate}/>
                    <label>Men</label>
                </div>
                <div className="filters-section-ideal-for">
                    <input type='checkbox' value='Women' 
                    onClick={idealForUpdate}/>
                    <label>Women</label>
                </div>
                <div className="filters-section-ideal-for">
                    <input type='checkbox' value='Kids'
                    onClick={idealForUpdate}/>
                    <label>Kids</label>
                </div>
            </section> 
        </div>
    </div>
  );
}

export default Filters;

