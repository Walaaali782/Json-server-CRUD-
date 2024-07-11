import { Link } from 'react-router-dom';
import './products.css';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

function Products() {

  const [pro, setproducts] = useState([]);
  const [searchId, setSearchId] = useState(''); // حالة للبحث
  const [filteredProducts, setFilteredProducts] = useState([]); // حالة للمنتجات المصفاة

  const getallproduct = () => {
    fetch('http://localhost:9001/product')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data);
        setFilteredProducts(data); // تحديث المنتجات المصفاة
      });
  }

  useEffect(() => {
    getallproduct();
  }, []);

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
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

    fetch(`http://localhost:9001/product/${productId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then((data) => console.log(data))
    getallproduct();
  }

  const handleSearch = () => {
    if (searchId === '') {
      setFilteredProducts(pro);
    } else {
      const filtered = pro.filter(product => product.id.toString() === searchId);
      setFilteredProducts(filtered);
    }
  }

  return (
    <>
      <h1> Products Page </h1>

      <Link className='btn addnew mt-5' to="/Products/Add"> Add New Product </Link>

      <div className="search container mt-5 d-flex ">
        <input
          type="text"
          className="form-control"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button className="btn walaa" onClick={handleSearch}>Search</button>
      </div>

      <table className="table table-dark table-striped mt-5 ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td className='flex'>
                  <button className='btn btn-danger btn-sm text-center' onClick={() => deletproduct(product.id)}> Delete </button>
                  <Link className='btn btn-info btn-sm text-center' to={`/Products/${product.id}`}> View </Link>
                  <Link className='btn btn-primary btn-sm text-center' to={`/Products/Edit/${product.id}`} > Edit </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default Products;
