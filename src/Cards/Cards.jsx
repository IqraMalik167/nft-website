import React from 'react';
import './cards.scss';
import Problem from '../assets/imgs/problem.png'
import Solution from '../assets/imgs/solution.png'
import Purpose from '../assets/imgs/purpose.png'

export const Cards = () => {
    return (
        <div>
            <div className='introSection'>
                <h1 className="introHeading">Introducing novel way of <br />forest monitoring</h1>
                <div className="cards">
                    <div className='card'>

                        <div classNmae='heading'>
                            <h4>
                                <span classNmae="numbers">1</span>
                                Problem
                            </h4>
                        </div>
                        <div>
                            <span><img src={Problem} /></span>
                        </div>
                        <div>
                            <p className="para">Just a handful of decades ago, the world was brimming with up to 16 million square kilometers
                                mature tropical forests. Today, that number has been more than halved to due irresponsible
                                projects and a general lack of sustainable alternatives.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <h4>
                            <span classNmae="numbers">2</span>
                            Solution
                        </h4>
                        <span><img src={Solution}></img></span>
                        <p className="para">Our innovative satellite artificial intelligence data and unique Forest.io algorithms have
                            the potential to reduce the cost of forestation efforts, improve the impact of these efforts,
                            and, ultimately, secure a brighter and healthier future for everyone that calls planet Earth
                            home.</p>
                    </div>
                    <div className='card'>

                        <h4>
                            <span classNmae="numbers">3</span >
                            Purpose
                        </h4>
                        <span><img src={Purpose} /></span>
                        <p className="para">Through the proceeds of our NFTs we plan to support countries with rich rainforest habitation
                            that might not have the resources or funds to protect these sensitive areas from illegal
                            logging and other deforestation threats.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}