import React from 'react';
import CustomButton from '../../CustomButton/CustomButton';
import './navbar.scss';
export const NavBar = () => {
    return (
        <div className="navBar">
            <div className="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="23.7279" height="23.7279" rx="5.93197" fill="#3DBC4F"></rect>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.1875 5L9.51578 7.49893V9.99787L5.1875 7.49893V5ZM10.4375 9.25L17.7956 5.00181V7.50075L12.4375 10.5942V12.7203L17.7956 9.62681V12.1257L12.4375 15.2192V19.9959H10.4384V16.3734L10.4375 16.3739V13.875L10.4384 13.8745V11.7484L10.4375 11.7489V9.25ZM9.51578 12.1239L5.1875 9.625V12.1239L9.51578 14.6229V12.1239Z" fill="#0E5923">
                    </path>
                </svg>
                <span>Forest.io</span>
            </div>
            <div className="menuList">
                <a href=''>FAQ</a>
                <a href='https://opensea.io/collection/forestcongo'>OpenSea</a>
                <CustomButton title={'Join Discord'} className="discordButton" />
            </div>


        </div>
    )
}