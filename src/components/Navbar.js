import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
     <img width="75" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" class="_2xm1JU" />       
     {/* <input type='text' placeholder='search' length='20px'/> */}
     <div className="navbar-button">
        <button disabled={true}>Sign In</button>
        <button disabled={true}>Sign Up</button>
     </div>
    </div>
  );
}

export default Navbar;
