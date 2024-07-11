import './home.css';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import heroAnimation from '../3-Home/animation/heroo.json';

function Home() {

  return (
    <div className='home'> 
      <header>
        <h1>Welcome to the CRUD Application</h1>
        <p>Your one-stop shop for managing products!</p>
      </header>

      <section className="hero d-flex">
        <div className='left'>
             <h2>About Us</h2>
        <p>
          This application allows you to manage your product inventory with ease. 
          You can add, update, delete, and view products in a user-friendly interface.
        </p>
        </div>


        <div className="right-section animation ">
          
            
          <Lottie
          className="heroAnimation"
           style={{ width:400, height:350}} animationData={heroAnimation} />
  
  
          </div>







      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li>Add new products to your inventory.</li>
          <li>Update existing product details.</li>
          <li>Delete products that are no longer available.</li>
          <li>View a list of all products in your inventory.</li>
        </ul>
      </section>

      <section>
        <h2>Get Started</h2>
        <ul>
          <li className='prog'><Link to="/products"> Products</Link></li>
        </ul>
      </section>

    </div>
  
  )
}
  export default Home;