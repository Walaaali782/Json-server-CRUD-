import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './view.css'
function View() {

    let {productId} = useParams();

    const[product , setproducts] = useState([]);

    
    
      useEffect(() => {
  
        fetch(`http://localhost:9000/product/${productId}`)
        .then(res=>res.json())
        .then((product) => 
            {
                console.log(product);
              setproducts(product)
            })
      
    },[])





        return(
       
            <>
   {
product &&
            


<div className="card" >
    <div className="container">
    <h5 className="card-title">{product.title}</h5>

    <div>
        {product.images && product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product image ${index + 1}`} style={{ width: '220px', marginRight: '10px' }} />
        ))}
      </div>
  {/*
  <img src={product.images[0]} className="card-img-top" alt={product.title} />

  <img src={product.images[1]} className="card-img-top" alt={product.title} />

  <img src={product.images[2]} className="card-img-top" alt={product.title} /> */}



  <h6> {product.description} </h6>




  <div className="card-body">
    <p className="card-text">Price : {product.price}$</p>
  </div>

  {product.category && (
        <>
          <p className="categoryname">Category Name: {product.category.name}</p>
          <img src={product.category.image} className="card-img-top" alt={product.title} />
        </>
      )}

</div>
</div>
}
            </>
        )
  
}
export default View;