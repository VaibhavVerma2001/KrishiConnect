import React from 'react';
import './productCard.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




function ProductCard(props) {
    return (
        
        <div className='product-card'>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.product.imgUrl}
                        alt="product-img"
                    />
                    <CardContent className='content'>
                        <span className="title">{props.product.shortTitle}</span>
                        <div className="price-container">
                            <span className="price">₹{props.product.price.cost}</span>
                            <span className="mrp">{props.product.price.only_mrp}</span>
                            <span className="discount">{props.product.price.discount}%</span>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default ProductCard;
