import React, {useState} from 'react'
import user from '../../../assets/images/user.jpg'
import ViewDetailsPopup from '../../popup/viewDetailsPopup'
const LockedUsers = () => {
    const [detailPopup, setDetailPopup] = useState(false)

  return (
    <div className='pending_table_body'>
        {
            detailPopup && 
        <ViewDetailsPopup setDetailPopup={setDetailPopup} detailPopup={detailPopup} />
        }
        <div className="pending_table">
            <table>
                <tr className="pending_table_header">
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>No of Times Locked</th>
                    <th>Details</th>
                    <th></th>
                </tr>                                       
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asad</td>
                    <td>asad@gmail.com</td>
                    <td>30/12/2020</td>
                    <td>14</td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Imran</td>
                    <td>imran@gmail.com</td>
                    <td>22/6/2022</td>
                    <td>3</td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Yousuf</td>
                    <td>yousuf@gmail.com</td>
                    <td>22/2/2022</td>
                    <td>50</td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                              
                            
            </table>        
        </div>
    </div>
  )
}

export default LockedUsers