import React from "react";
import styles from './carousel.module.scss'
import Slider from "react-slick";
import { sliderData } from '../mock/data';

export const Carousel = () => {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
    };
    return (
        <div className={styles.carouselWrapper}>
            <h1>NFT PREVIEW</h1>
            <Slider {...settings}>

                {sliderData.map((item, index) => {
                    return <div className={styles.bgImg} key={index}>
                        <img className={styles.bgImg} src={item.image} />
                    </div>
                })}

            </Slider>
        </div>
    )
}