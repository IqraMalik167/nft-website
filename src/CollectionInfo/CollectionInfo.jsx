import React from "react";
import styles from './collectionInfo.module.scss'
import BgImg from '../assets/imgs/bgimg.jpg'

export const CollectionInfo = () => {
    return (
        <div>
            <h2>COLLECTION INFO</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.collectionWrapper}>

                    <div className={styles.heading}>
                        <h3>Parameters</h3>
                    </div>
                    <div className={styles.countryText}>
                        <p>Country</p>
                        <h3>Republic of Congo</h3>
                    </div>
                    <div className={styles.coordinatesText}>
                        <div>

                            <p>Coordinates</p>
                            <h3>3,317, 17.933</h3>
                        </div>
                        <button>

                            <svg width="24" height="28" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg"><feBlend mode="difference" in="BackgroundImage" in2="SourceGraphic"></feBlend><rect class="fill-dovegray md:fill-alto" width="14" height="16" rx="1" x="5" y="5" fill-opacity="1"></rect><rect class="fill-dovegray md:fill-alto stroke-white md:stroke-everglade" width="14" height="16" rx="1" fill-opacity="1" stroke-width="2"></rect>
                                <feBlend mode="difference" in="BackgroundImage" in2="SourceGraphic"></feBlend>
                                <rect class="fill-dovegray md:fill-alto" width="14" height="16" rx="1" x="5" y="5" fill-opacity="1"></rect>
                                <rect class="fill-dovegray md:fill-alto stroke-white md:stroke-everglade" width="14" height="16" rx="1" fill-opacity="1" stroke-width="2"></rect>
                            </svg>

                        </button>
                    </div>
                    <div className={styles.areaText}>
                        <p>Area</p>
                        <h3>1614.16 km2</h3>
                        <h3>398867.54 acres</h3>
                    </div>

                </div>
                {/* 2nd part */}
                <div className={styles.sectionTwo} style={{
                    backgroundImage: `url(${BgImg})`
                }}>

                    <h3>View from space</h3>


                    <div className={styles.rectangle}>
                        <div className={styles.rectangleM}>
                        </div>
                    </div>


                    <div className={styles.barSvg}>
                        <p>5 km
                            <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="10" fill="white"></rect><rect x="20" width="1" height="10" fill="white"></rect><line x1="4.37115e-08" y1="5.5" x2="21" y2="5.5" stroke="white"></line></svg>
                        </p>
                    </div>


                </div>

                {/* 3rd part */}
                <div className={styles.sectionThree}>
                    <div className={styles.collection}>
                        <h3>Collection of 1000</h3>
                        <span> <h3>1 ◻ = 1.6142 km2</h3></span>
                    </div>
                    <div className={styles.gridSvg}>
                        <svg viewBox='0 0 360 316' fill='none' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
                            <rect x='0.5' y='0.5' width='359' height='350' fill='white' fillOpacity='0.05' />
                            <rect x='0.5' y='0.5' width='359' height='350' fill='url(#pattern0)' fillOpacity='0.2' />
                            <rect x='0.5' y='0.5' width='359' height='350' stroke='#6FA777' />
                            <defs>
                                <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='0.025' height='0.025641'>
                                    <use xlinkHref='#image0_2_26' transform='scale(0.00138889)' />
                                </pattern>
                                <image
                                    id='image0_2_26'
                                    width='18'
                                    height='18'
                                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAC9JREFUOE9jZKAQ/P379z/ICEYKzWEYNYhwCI6G0WgYDfO8BkvihCMavwpGahkEANojR1+v/VqrAAAAAElFTkSuQmCC'
                                />
                            </defs>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}