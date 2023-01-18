import React from 'react';
import './exploreCollection.scss';
import CustomButton from '../CustomButton/CustomButton';

export const ExploreCollection = ({ title, className }) => {
    return (
        <div>
            <h1 className='h1'>Help us lease and protect
                a rainforest in Congo</h1>
            <p className='explorePara'>Our Congo NFT collection will go towards a permanent lease of over 1000 acres of a rain forest
                the Republic of Congo</p>
            <div className='button'> <CustomButton title={'Explore Collection'} className="exploreCollection" /></div>
            <div className='list'>
                <div className='nft'>
                    <p>NFTs minted</p>
                    <p>1000</p>
                </div>
                <div className='bar'></div>

            </div>
            <div className='cliam'>0 % claimed</div>

        </div>


    );
};
