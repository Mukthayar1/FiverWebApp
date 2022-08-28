import React, {useState} from 'react'
import user from '../../assets/images/user.jpg'
import ViewEventsPopup from '../popup/events/viewEventsPopup'

const EventsTable = () => {

    const [event, setEvent] = useState(false)

  return (
    <div className='pending_table_body'>
            {
                event && <ViewEventsPopup event={event} setEvent={setEvent} />
            }
        <div className="pending_table">
            <table>
                <tr className="pending_table_header">
                    <th></th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Creator</th>
                    <th>Details</th>
                    <th></th>
                </tr>                                       
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Habibi Party</td>
                    <td>12/02/2022</td>
                    <td>Hassan</td>
                    <td><button onClick={() => setEvent(true)}>View</button></td>
                </tr>               
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Malibu Party</td>
                    <td>2/08/2022</td>
                    <td>Iqrar</td>
                    <td><button onClick={() => setEvent(true)}>View</button></td>
                </tr>               
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Night Boys Meetup</td>
                    <td>22/03/2022</td>
                    <td>Farhan</td>
                    <td><button onClick={() => setEvent(true)}>View</button></td>
                </tr>               
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Barbie Party</td>
                    <td>2/01/2022</td>
                    <td>Asad</td>
                    <td><button onClick={() => setEvent(true)}>View</button></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Pool Party</td>
                    <td>18/06/2022</td>
                    <td>Eron</td>
                    <td><button onClick={() => setEvent(true)}>View</button></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Night Festival</td>
                    <td>12/02/2022</td>
                    <td>Akbar</td>
                    <td><button onClick={() => setEvent(true)}>View</button></td>
                </tr>                              
                <tr className="pending_table_rows">
                    <td><img className='pending_table_profile' src={user} alt=''/></td>
                    <td>Carnival Event</td>
                    <td>12/02/2022</td>
                    <td>Naeem</td>
                    <td><button onClick={() => setEvent(true)}>View</button></td>
                </tr>                              
                            
            </table>        
        </div>
    </div>
  )
}

export default EventsTable