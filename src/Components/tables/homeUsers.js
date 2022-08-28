import React from 'react'
import user from '../../assets2/images/user.jpg'
const HomeUsers = ({type}) => {
  return (
    <div className='pending_table_body'>
        <div className="pending_table">
            <table>
                <tr className="pending_table_header">
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Verified</th>
                    <th></th>
                </tr>                                       
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Kevin</td>
                    <td>Kevin@gmail.com</td>
                    <td className='pending_table_online'>{type}</td>
                    <td>Yes</td>
                    <td></td>
                </tr>               
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Giinee</td>
                    <td>Giinee@gmail.com</td>
                    <td className='pending_table_online'>{type}</td>
                    <td>Yes</td>
                    <td></td>
                </tr>               
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Salman</td>
                    <td>salman@gmail.com</td>
                    <td className='pending_table_online'>{type}</td>
                    <td>Yes</td>
                    <td></td>
                </tr>               
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Ali</td>
                    <td>ali@gmail.com</td>
                    <td className='pending_table_online'>{type}</td>
                    <td>Yes</td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Michael</td>
                    <td>Michael@gmail.com</td>
                    <td className='pending_table_online'>{type}</td>
                    <td>Yes</td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Robert</td>
                    <td>Robert@gmail.com</td>
                    <td className='pending_table_online'>{type}</td>
                    <td>Yes</td>
                    <td></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Adam</td>
                    <td>Adam@gmail.com</td>
                    <td className='pending_table_online'>{type}</td>
                    <td>Yes</td>
                    <td></td>
                </tr>                              
                            
            </table>        
        </div>
    </div>
  )
}

export default HomeUsers