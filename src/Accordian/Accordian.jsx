import React from 'react';
import Collapsible from 'react-collapsible';
import styles from './styles.module.scss'
import { accordianData } from '../mock/accordianData';




// export const Accordion = () => {
//     return (
//         <div>
//             <div className={styles.mainContainer}>
//                 <h3 className={styles.heading}>YOUR QUESTIONS, ANSWERED</h3>
//                 <div className={styles.accordian}>


//                     {accordianData.map((item, index) => (
//                         <Collapsible trigger={item.title} className={styles.title}>
//                             <div className={styles.item}>

//                                 <div >
//                                     {/* <h3>{item.title}</h3> */}
//                                     <span>+</span>
//                                 </div>
//                                 <div className={styles.data}>
//                                     {item.data}
//                                 </div>
//                             </div>

//                         </Collapsible>))}
//                 </div>

//             </div>
//         </div >
//     )
// }


export const Accordion = () => {
    const renderTitle = (title) => {
        return <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <span>{title}</span>
            <span>+</span>
        </div>
    }
    const renderTitleOpened = (title) => {
        return <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <span>{title}</span>
            <span>-</span>
        </div>
    }
    return (
        <div className={styles.mainContainer}>
            <h3>YOUR QUESTIONS, ANSWERED</h3>
            <div className={styles.accordian}>
                {
                    accordianData.map(faq => {

                        return <Collapsible trigger={renderTitle(faq.title)}
                            triggerWhenOpen={renderTitleOpened(faq.title)}
                        >
                            <div className={styles.myAccordion}>
                                <p className={styles.para}>
                                    {faq.data}
                                </p>
                            </div>
                        </Collapsible>
                    })
                }

            </div>
        </div>
    );
};

