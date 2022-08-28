import React, { Fragment } from 'react'
import user from '../../assets2/images/Approach-web-portal-icon-01.png'
import verifyuser from '../../assets2/images/Approach-web-portal-icon-02.png'
import lockuser from '../../assets2/images/Approach-web-portal-icon-03.png'
import paiduser from '../../assets2/images/Approach-web-portal-icon-04.png'
import new1 from '../../assets2/images/new1.png'
import new2 from '../../assets2/images/new2.png'

const Cards = ({ heading }) => {
    return (
        <Fragment>
            <div className='right_bar_cards'>
                <div className='right_bar_singlecard'>
                    <div className='right_bar_minibox'>
                        <img src={user} alt='' />
                    </div>
                    <div className='cards_item'>
                        <div>
                            <div className='cards_item_heading'>Total <br /> Users</div>
                            <div className='cards_item_single'>

                                <p className='cards_item_number'>23</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right_bar_singlecard'>
                    <div className='right_bar_minibox'>
                        <img src={verifyuser} alt='' />
                    </div>
                    <div className='cards_item'>
                        <div>
                            <div className='cards_item_heading'>Total <br /> Clients</div>
                            <div className='cards_item_single'>
                                <p className='cards_item_number'>43</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right_bar_singlecard'>
                    <div className='right_bar_minibox'>
                        <img src={new1} alt='' />
                    </div>
                    <div className='cards_item'>
                        <div>
                            <div className='cards_item_heading'>Total <br /> Freelancers</div>
                            <div className='cards_item_single'>
                                <p className='cards_item_number'>43</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right_bar_singlecard'>
                    <div className='right_bar_minibox'>
                        <img src={new2} alt='' />
                    </div>
                    <div className='cards_item'>
                        <div>
                            <div className='cards_item_heading'>Total Completed <br />Orders</div>
                            <div className='cards_item_single'>
                                <p className='cards_item_number'>55</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </Fragment>
    )
}

export default Cards