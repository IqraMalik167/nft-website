import React from 'react';
import './customButton.scss';

const CustomButton = ({ title, className }) => {
    return (
        <button className={`customButton ${className}`}>{title}</button>
    );
};
export default CustomButton;
