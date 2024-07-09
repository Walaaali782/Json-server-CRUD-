import { Link } from 'react-router-dom';
import './products.css';
import { useEffect, useState } from "react";

function Products() {

  const[pro , setproducts] = useState([]);

  
  
    useEffect(() => {

      fetch('http://localhost:9000/product')
      .then(res=>res.json())
      .then((data) => 
      {
        console.log(data);
      setproducts(data)
    })
    
  },[])







  return(
<>
      <h1> Products Page </h1>


      <Link className='btn btn-success mt-5' to="/Products/Add"> Add New Product </Link>



      <table class="table table-dark table-striped mt-5 ">
  <thead>
    <tr >
      <th scope="col">  ID</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Operations</th>

    </tr>
  </thead>
  <tbody>


  {pro.map((product) =>{
                return(
              
                    <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td className='flex'>
                   <button className='btn btn-danger btn-sm text-center'> Delete </button>
                   <Link className='btn btn-info btn-sm text-center' to={`/Products/${product.id}`}> View </Link>
                   <button className='btn btn-primary btn-sm text-center'> Edit </button>
              
                    </td>
                  </tr>

              
                );
            }) }











    






    </tbody>
    </table>
</>
  )}
  export default Products;