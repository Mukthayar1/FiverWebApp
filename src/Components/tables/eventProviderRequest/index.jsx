import React, { useEffect } from 'react'
import { useState } from 'react'
import user from '../../../assets/images/user.jpg'
import newUser from '../../../assets/images/imguserp.jpg'
import instance from '../../instance'
import Accept from '../../popup/verification/accept'
import Reject from '../../popup/verification/reject'
import VerifiedImage from '../../popup/verifiedImage'

const RequestedUser = () => {

    const [acceptPopup, setAcceptPopup] = useState(false)
    const [rejectPopup, setRejectPopup] = useState(false)
    const [viewImg, setViewImg] = useState(false)
    
  return (
    <div className='pending_table_body'>
        {acceptPopup && <Accept acceptPopup={acceptPopup} setAcceptPopup={setAcceptPopup}/>}
        {rejectPopup && <Reject rejectPopup={rejectPopup} setRejectPopup={setRejectPopup}/>}
        <VerifiedImage viewImg={viewImg} setViewImg={setViewImg}/>
        <div className="pending_table">
            <table>
                <tr className="pending_table_header">
                    <th></th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Creator</th>
                    <th></th>
                    <th></th>  
                </tr>                                                                                 
                <tr className="pending_table_rows">
                    <td></td>
                    <td>Asad</td>
                    <td>20/03/2022</td>
                    <td>Karachi, Pakistan</td>
                    <td>Umar</td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)}></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                            
                <tr className="pending_table_rows">
                    <td></td>
                    <td>Habib</td>
                    <td>4/06/2022</td>
                    <td>Karachi, Pakistan</td>
                    <td>Umar</td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)}></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                            
                <tr className="pending_table_rows">
                    <td></td>
                    <td>Kashif</td>
                    <td>4/08/2022</td>
                    <td>Karachi, Pakistan</td>
                    <td>Ali</td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)}></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                            
                <tr className="pending_table_rows">
                    <td></td>
                    <td>Asad</td>
                    <td>20/03/2022</td>
                    <td>Karachi, Pakistan</td>
                    <td>Asad</td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)}></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                            
               
                           
                                                                  
            </table>        
        </div>
    </div>
  )
}

export default RequestedUser