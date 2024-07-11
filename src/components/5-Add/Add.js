import './add.css';
import {  useState } from "react";
import axios  from 'axios';

function Add() {


    const[title , settitle] = useState('');
    const[price , setprice] = useState(0);

    const[des , setdes] = useState('');



    const forsubmit =(e) => {
        e.preventDefault();


        axios.post('http://localhost:9000/product' , {
            title:title,
            price:price,
            description:des
        })  .then((data) => 
            {
              console.log(data);
           
          });






    //     fetch('http://localhost:9000/product',{
    //         method:"POST",
    //         body:JSON.stringify ({
    //             title:title,
    //             price:price
    //         })
    //     })       
    //     .then(res=>res.json())
    //     .then((data) => 
    //     {
    //       console.log(data);
       
    //   });
      


    };
    return(












<div className="add">
<div className="container">
<h1> Add Product </h1>
<form onSubmit={forsubmit}>
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label class="text" for="fname">Title</label>
                      <input type="text" class="form-control" id="producttitle"
                      onChange={(e) => settitle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
      
                <div class="col-3">
                    <div class="form-group">
                      <label class="text" for="fname">Price</label>
                      <input type="number" class="form-control" id="productprice"
                        onChange={(e) => setprice(e.target.value)}
                      />
                    </div>
                  </div>

                <div class="col-6">
                <div class="form-group mb-5">
                  <label class="text" for="message">Description</label>
                  <textarea name="" class="form-control" id="message" cols="15" rows="5"
                    onChange={(e) => setdes(e.target.value)}
                  
                  ></textarea>
                </div>
</div>
             
                <button type="submit" className="walaa">ADD Product</button>
              </form>

</div>
</div>
    )
}
export default Add;