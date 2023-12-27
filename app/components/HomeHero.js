"use client"

import Image from 'next/image';
import facebookIcon from "../../public/facebook-icon.png"
import instagramIcon from "../../public/instagram-icon.png"
import linkedinIcon from "../../public/linkedin-icon.png"
import twitterxIcon from "../../public/twitterx-icon.png"
import playBtn from "../../public/play-btn.png"
import Link from 'next/link';
import './swiper.css'
import { register } from 'swiper/element/bundle';
import { useRef, useEffect, useState } from 'react';

register();

export const HomeHero = () => {
  
  const swiperElRef = useRef(null);
  const [active, setActive] = useState(0)
    let colors = ["hero-slider1", "hero-slider2","hero-slider3","hero-slider4", "hero-slider5","hero-slider6"]
   
  useEffect(() => {
    const backgroundImage = document.getElementById('mySection')
    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      const swiper = e.target.swiper
      setActive(swiper.realIndex)
      backgroundImage.classList.remove('hero-slider1', 'hero-slider2', 'hero-slider3',"hero-slider4", "hero-slider5","hero-slider6")
      backgroundImage.classList.add(`hero-slider${swiper.realIndex+1}`)
      
});
  }, []);

  
  
     

  return (
    <section id="mySection" className={`hero-slider${active + 1}`}  style={{zIndex:"200"}}> 
        <div className='social-media-box'>
          <div className='social-icon'><Link href="https://www.facebook.com/profile.php?id=61551726248998" target="_blank">
            <Image src={facebookIcon} height={20} alt='facebook icon'/></Link></div>

          <div className='social-icon'><Link href="https://www.linkedin.com/company/ignytes-soft" target="_blank">
            <Image src={linkedinIcon} height={20} alt='linkedin icon'/></Link></div>

          <div className='social-icon'><Link href="https://twitter.com/Ignytessoft1" target="_blank">
            <Image src={twitterxIcon} height={20} alt='twitter icon'/></Link></div>

        </div>

      <swiper-container 
      ref={swiperElRef}
      direction="vertical"
      effect="coverflow"  
      slides-per-view="2"
      slides-per-group="1"
      space-between="5"
      centered-slides="true" 
      coverflow-effect-rotate="0" 
      // coverflow-effect-stretch="0" 
      coverflow-effect-depth="400"
      coverflow-effect-modifier="1" 
      coverflow-effect-slide-shadows="false"
      
      auto-play="true"
      autoplay-delay="4000" 
      loop="true"
      looped-slides= "3"
      loop-prevents-sliding="true"
    
   >
   

    <swiper-slide >
    <h1>UI/UX Design</h1>
    </swiper-slide >
    <swiper-slide >
    <h1>Branding</h1>
    </swiper-slide>
    <swiper-slide >
    <h1>App Development</h1>
    </swiper-slide>


    <swiper-slide >
    <h1>UI/UX Design</h1>
    </swiper-slide >
    <swiper-slide >
    <h1>Branding</h1>
    </swiper-slide>
    <swiper-slide >
    <h1>App Development</h1>
    </swiper-slide>
   
    
    
  </swiper-container>

  <div className='play-btn'> 
  <Image height={60} src={playBtn} alt='play button'/>
  </div>

 <div className='line '>
  <div className='line-box'>
  <div className='pagination-line'></div>
  <div className='pagination-dot'></div>
  </div>
</div>
 
    </section>

  );
};export default HomeHero;
