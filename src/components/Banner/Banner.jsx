import React from 'react';
import backgroundImage from './icon/background.png';
import { useMediaQuery } from "react-responsive";
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';



function Banner(props) {
    const screenSize = useMediaQuery({ query: "(min-width: 575px)" });
    return (
        <div className='bannerdiv' 
        style={{
         backgroundImage: `url("https://i.ibb.co/hVWs46f/banner-Img.png")`,
         backgroundRepeat: 'no-repeat',
         backgroundPosition:'0% 0%', 
         backgroundSize:'cover',
         width:'100%', 
         height:'400px', 
         color:'white'
      }}>
          <div className='bannerLeftSpace' style={{width:'60%'}}>
            <div>
                <h1 style={{color:'white' ,fontSize:'3.5em',fontWeight:'bold'}}>U'TALK</h1>
                <h2 style={{color:'white',fontWeight:'bold'}}>TTS And 3D Visual Avatar</h2>
            </div>
            <div className='bannerButtonSpace'>
                <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
                    <b>$30 / per month</b>
                </Button>
                <Button type="primary" ghost>
                   <b>Get Started for Free</b> 
                </Button>
            </div>
            
          </div>
          <div className='uchan' style={{width:'30%'}}>
                U醬
          </div>
           
        </div>
    );
}

export default Banner;