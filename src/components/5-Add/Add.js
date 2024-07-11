import './add.css';
import { useState } from "react";
import axios from 'axios';

function Add() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [des, setDes] = useState('');
    const [image, setImage] = useState('');

    const forsubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:9001/product', {
            title: title,
            price: price,
            description: des,
            images: image
        })
        .then((data) => {
            console.log(data);
        });
    };

    return (
        <div className="add">
            <div className="container">
                <h1> Add Product </h1>
                <form onSubmit={forsubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label className="text" htmlFor="producttitle">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="producttitle"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group">
                            <label className="text" htmlFor="productprice">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="productprice"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group mb-5">
                            <label className="text" htmlFor="productdescription">Description</label>
                            <textarea
                                className="form-control"
                                id="productdescription"
                                cols="15"
                                rows="5"
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
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="walaa">ADD Product</button>
                </form>
            </div>
        </div>
    );
}

export default Add;
