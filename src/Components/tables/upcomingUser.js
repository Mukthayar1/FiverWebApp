 import React, {useState} from "react";
import user from "../../assets/images/user.jpg";
import instance from "../instance";
import ViewAcceptPopup from '../popup/notifications/accept'
import ViewRejectPopup from '../popup/notifications/reject'

const AcceptedUsers = () => {
    const [acceptPopup, setAcceptPopup] = useState(false)
    const [rejectPopup, setRejectPopup] = useState(false)
{/* 
import React, {useState} from 'react'
import user from '../../assets/images/user.jpg'
import ViewAcceptPopup from '../popup/notifications/accept'
import ViewRejectPopup from '../popup/notifications/reject'

const AcceptedUsers = () => {

    const [acceptPopup, setAcceptPopup] = useState(false)
    const [rejectPopup, setRejectPopup] = useState(false) */}

  return (
    <div className='pending_table_body'>
        {
            acceptPopup && <ViewAcceptPopup setAcceptPopup={setAcceptPopup} acceptPopup={acceptPopup} />
        }
        {
            rejectPopup && <ViewRejectPopup setRejectPopup={setRejectPopup} rejectPopup={rejectPopup} />
        }
        <div className="pending_table">
            <table>
                <tr className="pending_table_header">
                    <th></th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Subscription</th>
                    <th>Verification</th>
                    <th></th>
                </tr>                                                                                 
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asad</td>
                    <td>Karachi, Pakistan</td>
                    <td>asad@gmail.com</td>
                    <td>Yes</td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)}></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asad</td>
                    <td>Karachi, Pakistan</td>
                    <td>asad@gmail.com</td>
                    <td>Yes</td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)} ></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asad</td>
                    <td>Karachi, Pakistan</td>
                    <td>asad@gmail.com</td>
                    <td>Yes</td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(true)} ></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asaad</td>
                    <td>Karachi, Pakistan</td>
                    <td>asad@gmail.com</td>
                    <td>Yes</td>
                    <td>
                        <i className="fas fa-check" onClick={() => setAcceptPopup(false)}></i>
                        <i className="fas fa-ban" onClick={() => setRejectPopup(true)}></i>
                    </td>
                    <td></td>
                </tr>                              
                            
            </table>        
        </div>
 
    </div>
  );
};

export default AcceptedUsers;
