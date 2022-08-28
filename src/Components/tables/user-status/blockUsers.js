import React, {useState} from 'react'
import user from '../../../assets/images/user.jpg'
import ViewDetailsPopup from '../../../components/popup/viewDetailsPopup'

const BlockedUsers = () => {

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
                    <th>No of Times Blocked</th>
                    <th>Details</th>
                    <th></th>
                </tr>                                       
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asad</td>
                    <td>asad@gmail.com</td>
                    <td>24/5/2022</td>
                    <td>30</td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Imran</td>
                    <td>imran@gmail.com</td>
                    <td>5/6/2022</td>
                    <td>100</td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Habib</td>
                    <td>habib@gmail.com</td>
                    <td>3/2/2022</td>
                    <td>10</td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asad</td>
                    <td>asad@gmail.com</td>
                    <td>30/12/2020</td>
                    <td>310</td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                              
                            
            </table>        
        </div>
    </div>
  )
}

export default BlockedUsers