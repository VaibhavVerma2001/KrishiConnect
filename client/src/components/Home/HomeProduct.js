import React from 'react';
import './homeproduct.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ProductCard from '../ProductCard';
import { useState , useEffect} from 'react';
import products from '../../constant';

function HomeProduct() {
    const [active, setActive] = useState(1);

    

    return (
        <div className='home-product'>

            <span className="head">OUR BEST SELLER</span>
            <Stack direction="row" spacing={2}>
                <Button className={`btn ${active === 1 ? 'bold' : ""}`} variant="outlined" onClick={() => setActive(1)}>NEW ARRIVALS</Button>
                <Button className={`btn ${active === 2 ? 'bold' : ""}`} variant="outlined" onClick={() => setActive(2)}>BEST SELLERS</Button>
                <Button className={`btn ${active === 3 ? 'bold' : ""}`} variant="outlined" onClick={() => setActive(3)}>TOP RATES</Button>
            </Stack>

            <div className="container-fluid">
                {active === 1 && <div className="row">
                    {products.map((product,i) => (
                        <div className="col-lg-3 col-md-6" key={i}>
                            <ProductCard product = {product}/>
                        </div>
                    ))}
                    
                </div>}

                {active === 2 && <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>}

                {active === 3 && <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>}

            </div>

            <div className="poster container-fluid">
                <span className="big">Flat 50% off on fresh organic</span>
                <span className="small">Additional 50% off on Vegetables & Fruits</span>
            </div>
        </div>
    )
}

export default HomeProduct;
