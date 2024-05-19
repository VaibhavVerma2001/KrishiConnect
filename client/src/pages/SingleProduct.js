import React, { useState } from "react";
import "./singleproduct.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

function SingleProduct() {

    // To get Product Id
    let location = useLocation();
    location = location.pathname;
    const productId = location.split('/')[2];
    // console.log(productId);

    // Context api
    const context = useContext(UserContext);
    const { setProgress } = context;

    // single Product fetched
    const [product, setProduct] = useState({});


    useEffect(() => {
        const fetchSinglePost = async () => {
            setProgress(0);
            const res = await axios.get(`http://localhost:5000/api/products/${productId}`);
            setProgress(30);
            setProduct(res.data);
            console.log(res.data);
            setProgress(100);
        }

        fetchSinglePost();
        // eslint-disable-next-line
    }, [productId]);



    return (
        <div className="single_product">
            {product ? (
                <>
                    <div className="left">
                        <div id="product_img">
                            <img src={product.imgUrl}alt="product-img" />
                        </div>
                        <div className="left_btn">
                            <Button variant="outlined" startIcon={<DeleteIcon />}>
                                Add to Cart
                            </Button>
                            <Button variant="outlined" startIcon={<DeleteIcon />}>
                                Buy Now
                            </Button>
                        </div>
                    </div>
                    {/* right part */}
                    <div className="right">
                        <h2 id="short_title">
                            <span className="right_data">{product.shortTitle}</span>
                        </h2>
                        <h3 id="long_title">
                            <span className="right_data">{product.longTitle}</span>
                        </h3>
                        <hr />
                        <p id="rating">
                            <span className="right_text">Rating </span> :{" "}
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-half-full checked"></span>
                        </p>
                        <p id="mrp">
                            <span className="right_text">M.R.P. </span>
                            <span className="right_data"> : {product.price ? product.price.mrp : ""}</span>
                        </p>
                        <p id="cost">
                            <span className="right_text">Cost </span>:
                            <span className="right_data"> {product.price ? product.price.cost : ""}</span>
                        </p>
                        <p id="discount">
                            <span className="right_text">Discount </span>
                            <span className="right_data"> : {product.price ? product.price.discount : ""}</span>
                        </p>
                        <p id="tagline">
                            <span className="right_text">Tagline </span>
                            <span className="right_data"> : {product.tagline}</span>
                        </p>
                        <p id="description">
                            <span className="right_text">Description </span>
                            <span className="right_data">
                                : {product.description}
                            </span>
                        </p>
                    </div>
                </>
            ) : (
                ""
            )}

        </div>
    );
}

export default SingleProduct;