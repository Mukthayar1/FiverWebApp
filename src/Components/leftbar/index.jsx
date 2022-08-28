import React, {useEffect, useState} from 'react'
import logo from '../../assets2/images/Approch-White-logo-01.png'
import logout from '../../assets2/images/Approach-web-portal-icon-23.png'
import notification from '../../assets2/images/Approach-web-portal-icon-24.png'
import user from '../../assets2/images/Approach-web-portal-icon-25.png'
import star from '../../assets2/images/Admin-Assests-06.png'
import chair from '../../assets2/images/chair.png'
import lock from '../../assets2/images/lock.png'
import  dashboard from '../../assets2/images/Admin-Assests-03.png'
import { Link } from 'react-router-dom'

const Leftbar = ({index}) => {

    const [subMenu, setSubMenu] = useState(false)
    const [subMenuEvent, setSubMenuEvent] = useState(false)
    const handleLogout = () => {
        window.location.reload()
        localStorage.clear()
    }

    useEffect(() => {
        if (index === '2a' || index === '2b')
        {
            setSubMenu(true)
        }
        if(index === '7a' || index === '7b'){
            setSubMenuEvent(true)
        }
    }, [])

  return (
    <div className='leftbar'>
        <div className='leftbar_logo'><img src={logo} alt=''/></div>
        <div className="leftbar_line"><hr/></div>
        <div className="leftbar_inner">
            <div>
                <p>
                    <Link to='/home' className={index === 1 ? 'leftbar_active' : ""}><img alt=''src={dashboard}/>Home</Link>
                </p>
                <p onClick={() => {setSubMenu(!subMenu)}}>
                    <a to='/users' className={index === 2 ? 'leftbar_active' : ""}><img alt=''src={user}/> Users {subMenu ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-right"></i>} </a>
                    {
                        subMenu &&    <>
                        <Link className={index === '2a' ? 'sub-menu-active' : 'sub-menu'} to='/allUser'><p className='sub-menu'>All Users</p></Link>
                        <Link className={index === '2b' ? 'sub-menu-active' : 'sub-menu'}to='/verification'><p className='sub-menu'>Users Verification</p></Link>
                        </>                 
                    }
                </p>
                <p onClick={() => {setSubMenuEvent(!subMenuEvent)}}>
                    <a to='/users' className={index === 2 ? 'leftbar_active' : ""}><img alt=''src={star}/> Events Manager {subMenuEvent ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-right"></i>} </a>
                    {
                        subMenuEvent &&    <>
                        <Link className={index === '7a' ? 'sub-menu-active' : 'sub-menu'} to='/eventRequest'><p className='sub-menu'>Event Requests</p></Link>
                        <Link className={index === '7b' ? 'sub-menu-active' : 'sub-menu'}to='/managerRequest'><p className='sub-menu'>Event Manager Requests</p></Link>
                        </>                 
                    }
                </p>
                <p>
                    <Link to='/tables' className={index === 5 ? 'leftbar_active' : ""}><img alt=''src={chair}/>  Tables</Link>
                </p>
                <p>
                    <Link to='/notifications' className={index === 3 ? 'leftbar_active' : ""}><img alt=''src={notification}/> Notifications</Link>
                </p>
                <p>
                    <Link to='/eventsA' className={index === 4 ? 'leftbar_active' : ""}><img alt=''src={star}/> Events</Link>
                </p>
                <p>
                    <Link to='/userStatus' className={index === 6 ? 'leftbar_active' : ""}><img alt=''src={lock}/>User Status</Link>
                </p>
                {/* <p>
                    <Link to='/eventRequest' className={index === 7 ? 'leftbar_active' : ""}><img alt=''src={star}/> Events Request</Link>
                </p> */}
                <p>
                    <a href="/" onClick={handleLogout}><img alt=''src={logout}/> Logout</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Leftbar