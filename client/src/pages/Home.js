import React from 'react';
import Banner from '../components/Home/Banner';
import './home.scss';
import BigCard from '../components/Home/BigCard';
import HomeProduct from '../components/Home/HomeProduct';


function Home() {
  return (
    <div className='home'>
      <Banner />

      {/* big cards */}
      <div className="big-cards">
        <BigCard imgUrl = {"https://vagen-store-demo.myshopify.com/cdn/shop/files/ba2.png?v=1692937507"} big ={"Cherry Tomato"}/>
        <BigCard imgUrl ={"https://vagen-store-demo.myshopify.com/cdn/shop/files/ba4.png?v=1692937507"} big ={"Fresh Carrots"} />
        <BigCard imgUrl = {"https://vagen-store-demo.myshopify.com/cdn/shop/files/ba3.png?v=1692937507"} big ={"Cucumber"} />
      </div>


      {/* Home products */}
      <HomeProduct />
      
    </div>
  )
}

export default Home
