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
        {/* {viewImg && <VerifiedImage viewImg={viewImg} setViewImg={setViewImg}/>} */}
        <VerifiedImage viewImg={viewImg} setViewImg={setViewImg}/>
        <div className="pending_table">
            <table>
                <tr className="pending_table_header">
                    <th></th>
                    <th>Name</th>
                    <th>Image 1</th>
                    <th>Image 2</th>
                    <th>Verification</th>
                    <th></th>
                </tr>                                                                                 
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Imran</td>
                    <td><img className='pending_table_verifiedIcon' src={newUser} alt='' onClick={()=>setViewImg(true)}/></td>
                    <td><img className='pending_table_verifiedIcon' src={newUser} alt=''onClick={()=>setViewImg(true)}/></td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)}></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                            
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Habib</td>
                    <td><img className='pending_table_verifiedIcon' src={newUser} alt='' onClick={()=>setViewImg(true)}/></td>
                    <td><img className='pending_table_verifiedIcon' src={newUser} alt='' onClick={()=>setViewImg(true)}/></td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)}></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                            
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Ikram</td>
                    <td><img className='pending_table_verifiedIcon' src={newUser} alt='' onClick={()=>setViewImg(true)}/></td>
                    <td><img className='pending_table_verifiedIcon' src={newUser} alt='' onClick={()=>setViewImg(true)}/></td>
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