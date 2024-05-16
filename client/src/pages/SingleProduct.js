import React from "react";
import "./singleproduct.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function SingleProduct() {
    return (
        <div className="single_product">
            {/* left part */}
            <div className="left">
                <div id="product_img">
                    <img src="https://vagen-store-demo.myshopify.com/cdn/shop/products/1_2a65e36c-8876-41d8-a86b-4d1d9a3c97b4.jpg?v=1692931327" alt="product-img"/>
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
                    <span className="right_data">Potato</span>
                </h2>
                <h3 id="long_title">
                    <span className="right_data">Potato - New Crop</span>
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
                    <span className="right_data"> : 42 for 1kg</span>
                </p>
                <p id="cost">
                    <span className="right_text">Cost </span>:
                    <span className="right_data"> 33</span>
                </p>
                <p id="discount">
                    <span className="right_text">Discount </span>
                    <span className="right_data"> : 21%</span>
                </p>
                <p id="tagline">
                    <span className="right_text">Tagline </span>
                    <span className="right_data"> : Fresh and Healthy</span>
                </p>
                <p id="description">
                    <span className="right_text">Description </span>
                    <span className="right_data">
                        : New potatoes have thin, wispy skins and a crisp, waxy texture.
                        They are young potatoes and unlike their fully grown counterparts,
                        they keep their shape once cooked and cut. They are also sweeter
                        because their sugar has not yet converted into starch, and are
                        therefore particularly suited to salads.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default SingleProduct;