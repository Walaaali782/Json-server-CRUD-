import { Link } from 'react-router-dom';
import './products.css';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

function Products() {

  const[pro , setproducts] = useState([]);

  
  const getallproduct = () => {
    fetch('http://localhost:9000/product')
    .then(res=>res.json())
    .then((data) => 
    {
      console.log(data);
    setproducts(data)
  });
  


  }
  
    useEffect(() => {
      getallproduct();
      
  },[])

const deletproduct = (productId) => {
  
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
       
      });
      getallproduct();
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  
  });



  fetch(`http://localhost:9000/product/${productId}`, {
    method: "DELETE"
  })
  .then(res=>res.json())
  .then((data) => console.log(data))
  getallproduct();

}





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
                   <button className='btn btn-danger btn-sm text-center' onClick={ () =>  deletproduct(product.id)}> Delete </button>
                   <Link className='btn btn-info btn-sm text-center' to={`/Products/${product.id}`}> View </Link>
                   <Link className='btn btn-primary btn-sm text-center'to={`/Products/Edit/${product.id}`} > Edit </Link>
              
                    </td>
                  </tr>

              
                );
            }) }











    






    </tbody>
    </table>
</>
  )}
  export default Products;