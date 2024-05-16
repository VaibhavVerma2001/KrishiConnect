import React from 'react';
import './bigcard.scss';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function BigCard(props) {
    const myStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)),
        url(${props.imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div className='bigcard' style={myStyle}>
            <span className="big">
                {props.big}
            </span>

            <span className="small">
                THE FRUIT IS ALWAYS FRESH AND GOOD QUALITY
            </span>

            <Button className='btn' variant="outlined" endIcon={<DeleteIcon />}>
                SHOP NOW
            </Button>

        </div>
    )

};

export default BigCard;


