import '../App.css';

function Item(props) {
  return (
    <div className="item">
            <img src={props.image} alt={props.name}/>
            <section className="item-info">
                <p>{props.brand}</p>
                <p>{props.name}</p>
                <p>{props.size}</p>
                <p>{props.for}</p>
            </section>
    </div>
  );
}

export default Item;
