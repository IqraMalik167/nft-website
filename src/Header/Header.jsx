import React from 'react';
import './header.scss';
import CustomButton from '../CustomButton/CustomButton';

export const Header = () => {
    return (
        <div>
            <h1>To protect every forest.</h1>
            <p>Forest.io is a technological AI company with one simple yet massive goal
                – help humanity save the planet Earth.</p>
            <CustomButton title={'Learn More'} className="learnMore" />
        </div>
    )
}