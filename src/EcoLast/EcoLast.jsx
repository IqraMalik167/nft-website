import React from "react";
import style from './ecoLast.module.scss'
import Mapwithoutbg from '../assets/imgs/mapwithoutbg.png'
// import Solution from '../assets/imgs/solution.png'

import CustomButton from '../CustomButton/CustomButton';

export const EcoLast = () => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.content}>

                    <h1>Welcome to the Forest Ecosystem.</h1>
                    <div className={style.img}>
                        <img src={Mapwithoutbg} />
                    </div>
                    <p>Forest.io vision is to have the protection of over 30% of the forests across the entire globe by 2028.
                        That’s in less than a decade!</p>
                    <p>Our carbon climate offset NFTs are a key part of that goal.</p>
                </div>
                <div className={style.buttons}>

                    <CustomButton title={'Buy NFT on OpenSea'} className="buy Nft" />
                    <CustomButton title={'Join Our Community'} className="joinOurCommunity" />
                </div>


            </div>
            <div className={style.end}>
                <p>Forest.io © 2022</p>
                <p>To protect every forest.</p>
            </div>
        </div>
    )
}