import React from 'react';
import backgroundImage from './icon/background.png';



function Banner(props) {

    return (
        <div className='bannerdiv' 
        style={{
         backgroundImage: `url("https://i.ibb.co/hVWs46f/banner-Img.png")`,
         backgroundRepeat: 'no-repeat',
         backgroundPosition:'center', 
         backgroundSize:'cover',
         width:'100%', 
         height:'400px', 
         color:'white'
      }}>
          <div style={{color:'white'}}>12</div>
          <div style={{color:'white'}}>12</div>
            
        </div>
    );
}

export default Banner;