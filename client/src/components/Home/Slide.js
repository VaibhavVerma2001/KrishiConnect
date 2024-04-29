import React from 'react';
import './slide.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Slide() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='slide'>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div style={{backgroundColor:"red", width:"250px"}}>
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1648812259.png" alt="" />
                </div>
                <div style={{backgroundColor:"green", width:"250px"}}>
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1648812259.png" alt="" />
                </div>
                <div style={{backgroundColor:"blue", width:"250px"}}>
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1648812259.png" alt="" />
                </div>
                <div style={{backgroundColor:"yellow", width:"250px"}}>
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1648812259.png" alt="" />
                </div>
                <div style={{backgroundColor:"cyan", width:"250px"}}>
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1648812259.png" alt="" />
                </div>
                <div style={{backgroundColor:"black", width:"250px"}}>
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1648812259.png" alt="" />
                </div>

                <div style={{backgroundColor:"grey", width:"250px"}}>
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1648812259.png" alt="" />
                </div>
                <div style={{backgroundColor:"orange", width:"250px"}}>
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1648812259.png" alt="" />
                </div>
                
            </Carousel>;
        </div>
    )
}

export default Slide;
