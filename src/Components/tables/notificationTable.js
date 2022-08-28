import React, {useState} from "react";

const NotificationTable = () => {
  return (
    <div className='pending_table_body'>
        <div className="pending_table">
            <table>
                <tr className="pending_table_header">
                    <th></th>
                    <th>User Name</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>                                                                                 
                <tr className="pending_table_rows">
                    <td></td>
                    <td>Asad</td>
                    <td> Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                    <td>21/03/2022</td>
                </tr>                                                                                    
                <tr className="pending_table_rows">
                    <td></td>
                    <td>Asad</td>
                    <td> Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                    <td>21/03/2022</td>
                </tr>                                                                                    
                <tr className="pending_table_rows">
                    <td></td>
                    <td>Umar</td>
                    <td> Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                    <td>2/05/2022</td>
                </tr>                                                                                    
                <tr className="pending_table_rows">
                    <td></td>
                    <td>Imran</td>
                    <td> Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                    <td>2/3/2022</td>
                </tr>                                                                                    
                <tr className="pending_table_rows">
                    <td></td>
                    <td>Iqar</td>
                    <td> Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                    <td>26/08/2022</td>
                </tr>                                                                                    
            </table>        
        </div>
 
    </div>
  );
};

export default NotificationTable;
