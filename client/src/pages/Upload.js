import React, { useState } from 'react';
import './upload.scss';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Upload() {

    const [shortTitle, setShortTitle] = useState("");
    const [longTitle, setLongTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const [mrp, setMrp] = useState("");
    const [cost, setCost] = useState("");
    const [discount, setDiscount] = useState("");
    const [tagline, setTagline] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = {
            shortTitle,
            longTitle,
            price : {
                mrp,
                cost,
                discount,
            },
            description,
            tagline,
            imgUrl
        };
        
        try {
            // now upload newPost 
            const res = await axios.post("http://localhost:5000/api/products/upload", newProduct);
            //now show newpost in singlepage -- path of react app /post/:postIdz
            navigate("/getproduct/" + res.data._id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='upload'>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Short Title</label>
                    <input required type="text" className="form-control" id="inputEmail4" onChange={e => setShortTitle(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Long Title</label>
                    <input required type="text" className="form-control" id="inputPassword4" onChange={e => setLongTitle(e.target.value)} />
                </div>

                <div className="col-12">
                    <label for="inputAddress" className="form-label">Description</label>
                    <input required requiredtype="text" className="form-control" id="inputAddress" placeholder="Enter Description of Product" onChange ={e => setDescription(e.target.value)}/>
                </div>

                <div className="col-md-4">
                    <label for="inputEmail4" className="form-label">MRP</label>
                    <input required type="text" className="form-control" id="inputEmail4" onChange = {e => setMrp(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Cost</label>
                    <input required type="text" className="form-control" id="inputPassword4" onChange ={e => setCost(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label for="inputPassword4" className="form-label">Discount</label>
                    <input required type="text" className="form-control" id="inputPassword4" onChange={e => setDiscount(e.target.value)} />
                </div>

                <div className="col-md-6">
                    <label for="inputCity" className="form-label">URL</label>
                    <input required type="text" className="form-control" id="inputCity" onChange={e => setImgUrl(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">Category</label>
                    <select id="inputState" className="form-select">
                        <option selected>VEGETABLES</option>
                        <option>FRUITS</option>
                        <option>CROPS</option>
                        <option>SEEDS</option>
                        <option>PESTICIDES</option>
                        <option>FERTILIZERS</option>
                        <option>EQUIPMENTS</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Tagline</label>
                    <input required type="text" className="form-control" id="inputZip" onChange={e => setTagline(e.target.value)}/>
                </div>

                {imgUrl && <div>
                    <img src={imgUrl} alt="img" />
                </div>}

                <div className="col-12">
                    <div className="form-check">
                        <input required className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>


        </div>
    )
}

export default Upload
