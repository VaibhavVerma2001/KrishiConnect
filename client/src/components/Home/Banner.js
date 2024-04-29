import React from 'react';
import './banner.scss';
import Carousel from 'react-material-ui-carousel';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Banner_img_1 from './Banner_img_1';
import Banner_img_2 from './Banner_img_2';
import Banner_img_3 from './Banner_img_3';
import Banner_img_4 from './Banner_img_4';

function Banner() {

    return (
        <div className='banner'>
            <Carousel
                className="carasousel"
                autoPlay={false}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                interval={5000}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}
                NextIcon={<KeyboardDoubleArrowRightIcon />}
                PrevIcon={<KeyboardDoubleArrowLeftIcon />}
            >

                <Banner_img_4 />
                <Banner_img_1 />
                <Banner_img_3 />
                <Banner_img_2 />

            </Carousel>
        </div>
    )
}

export default Banner;
