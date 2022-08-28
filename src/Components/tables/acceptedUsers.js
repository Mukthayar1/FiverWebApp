import React, {useState} from 'react'
import { useEffect } from 'react';
import user from '../../assets/images/user.jpg'
import ViewDetailsPopup from '../popup/viewDetailsPopup'

import axios from "axios"
import instance from '../instance';
import DeletePopup from '../popup/users/deletePopup'


const AcceptedUsers = () => {
    const [detailPopup, setDetailPopup] = useState(false);
    const [allUsers, setAllUser] = useState([]);
    const [userDetail, setUserDetail] = useState({}) 
    const [deletePopup, setDeletePopup] = useState(false)
    

    const allUsersList = () => {
        instance.post("admin/getAllUsers").then((res) => {
            console.log(res.data.data.successResult);
            setAllUser(res.data.data.successResult)
            // setName(res.data.data.successResult.name);
        }).catch((err) => {
           console.log(err);
       })
    }


    useEffect(() => {
        allUsersList();
    }, [])


    return (
      
    <div className='pending_table_body'>
        {/* {

            detailPopup && <ViewDetailsPopup userDetail={userDetail} setDetailPopup={setDetailPopup} detailPopup={detailPopup} />

             
        } */}
        {
            detailPopup && <ViewDetailsPopup setDetailPopup={setDetailPopup} detailPopup={detailPopup} />

        }
        {
            deletePopup && <DeletePopup setDeletePopup={setDeletePopup} deletePopup={deletePopup}  />
        }
        <div className='pending_table'>
            <table>
                <tr className='pending_table_header'>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>No of Friends</th>
                    <th>Block</th>
                    <th>Delete</th>
                    <th>Details</th>
                    <th></th>

                  </tr>         
                          <>
                           <tr className='pending_table_rows'>

                </tr>                                       
                <tr className='pending_table_rows'>
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Hamza</td>
                    <td>hamza@gmail.com</td>
                    <td>100</td>
                    <td className='pending_table_status'>
                        <p className='text'>Unblock</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                        <p className='text'>Block</p>
                    </td>
                    <td><i className='fas fa-trash' onClick={() => setDeletePopup(true)}></i></td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                                                                                                                                                                                                                                                                                                                 
                <tr className='pending_table_rows'>
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asad</td>
                    <td>asad@gmail.com</td>
                    <td>30</td>
                    <td className='pending_table_status'>
                        <p className='text'>Unblock</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                        <p className='text'>Block</p>
                    </td>
                    <td><i className='fas fa-trash' onClick={() => setDeletePopup(true)}></i></td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                                                                                                                                                                                                                                                                                                                 
                <tr className='pending_table_rows'>
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Asif</td>
                    <td>asif@gmail.com</td>
                    <td>18</td>
                    <td className='pending_table_status'>
                        <p className='text'>Unblock</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                        <p className='text'>Block</p>
                    </td>
                    <td><i className='fas fa-trash' onClick={() => setDeletePopup(true)}></i></td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td>
                    <td></td>
                </tr>                                                                                                                                                                                                                                                                                                                 
                <tr className='pending_table_rows'>

                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                     <td>Habib</td>
                     <td>habib@gmail.com</td>
                    <td>10</td>
                    <td className='pending_table_status'>
                        <p className='text'>Unblock</p>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                        <p className='text'>Block</p>
                    </td>

                    <td><i className='fas fa-trash'></i></td>
                      <td><i onClick={() => { setDetailPopup(true) }} className='fas fa-eye'></i></td>
                    {/* 
                    <td><i className='fas fa-trash' onClick={() => setDeletePopup(true)}></i></td>
                    <td><i onClick={() => setDetailPopup(true)} className='fas fa-eye'></i></td> */}
 
                    <td></td>
                </tr>           
                          </>
   
                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                             
            </table>        
        </div>
    </div>
  )
}

export default AcceptedUsers