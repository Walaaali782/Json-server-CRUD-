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

<div className="card" >
    <div className="container">
    <h5 className="card-title">{product.title}</h5>

  <img src={product.images[0]} className="card-img-top" alt={product.title} />
  <img src={product.images[1]} className="card-img-top" alt={product.title} />
  <img src={product.images[2]} className="card-img-top" alt={product.title} />



  <h6> {product.description} </h6>




  <div className="card-body">
    <p className="card-text">Price : {product.price}$</p>
  </div>

  <p className="catogryname"> CatogryName: {product.category.name} </p>

  <img src={product.category.image} className="card-img-top" alt={product.title} />

</div>
</div>
            </>
        )
  
}
export default View;