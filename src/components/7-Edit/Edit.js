import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Edit() {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [des, setDes] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:9001/product/${id}`)
            .then((response) => {
                const product = response.data;
                setTitle(product.title);
                setPrice(product.price);
                setDes(product.description);
                setImage(product.images)
            })
            .catch((error) => {
                console.error("There was an error fetching the product data!", error);
            });
    }, [id]);

    const forsubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:9001/product/${id}`, {
            title: title,
            price: price,
            description: des,
            images: image
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("There was an error updating the product!", error);
        });
    };

    return (
        <div className="add">
            <div className="container">
                <h1> Edit Product </h1>
                <form onSubmit={forsubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label className="text" htmlFor="fname">Title</label>
                                <input type="text" className="form-control" id="producttitle"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group">
                            <label className="text" htmlFor="fname">Price</label>
                            <input type="number" className="form-control" id="productprice"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group mb-5">
                            <label className="text" htmlFor="message">Description</label>
                            <textarea name="" className="form-control" id="message" cols="15" rows="5"
                                value={des}
                                onChange={(e) => setDes(e.target.value)}
                            ></textarea>
                        </div>
                    </div>


                    <div className="col-6">
                        <div className="form-group mb-5">
                            <label className="text" htmlFor="productimage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                id="productimage"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="walaa">Update Product</button>
                </form>
            </div>
        </div>
    );
}

export default Edit;