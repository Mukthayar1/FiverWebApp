import React, { useEffect } from 'react'
import { useState } from 'react'
import user from '../../../assets/images/user.jpg'
import Accept from '../../popup/verification/accept'
import Reject from '../../popup/verification/reject'
import VerifiedImage from '../../popup/verifiedImage'

const EventManagerRequest = () => {

    const [acceptPopup, setAcceptPopup] = useState(false)
    const [rejectPopup, setRejectPopup] = useState(false)
    const [viewImg, setViewImg] = useState(false)
    
  return (
    <div className='pending_table_body'>
        {acceptPopup && <Accept acceptPopup={acceptPopup} setAcceptPopup={setAcceptPopup}/>}
        {rejectPopup && <Reject rejectPopup={rejectPopup} setRejectPopup={setRejectPopup}/>}
        {/* {viewImg && <VerifiedImage viewImg={viewImg} setViewImg={setViewImg}/>} */}
        <VerifiedImage viewImg={viewImg} setViewImg={setViewImg}/>
        <div className="pending_table">
            <table>
                <tr className="pending_table_header">
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th></th>
                </tr>                                                                                 
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asad</td>
                    <td>asad@gmail.com</td>
                    <td>03003030303</td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)}></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                </tr>                                                                    
            </table>        
        </div>
    </div>
  )
}

export default EventManagerRequest