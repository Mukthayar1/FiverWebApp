// import React from 'react'

// export default function DashBoard() {

//   const data = () => {
//     localStorage.removeItem('Uid')
//     localStorage.removeItem('isLogged')
//     window.location.reload()
//   };

//   return (
//     <>
//       <div>DashBoard</div>
//       <h1 onClick={()=>data()}>Log Out</h1>
//     </>
//   )
// }


import React from 'react'
import Cards from '../../../Components/cards'
import Leftbar from '../../../Components/leftbar'
import HomeUsers from '../../../Components/tables/homeUsers'
import '../../../assets2/style/app.scss'

// import EventCard from './components/event-cards'
// import EventsTable from './components/tables/eventsTable'
// import expire from '../../assets/images/Expired-03.png'
// import ongoing from '../../assets/images/Ongoing-01.png'
// import upcoming from '../../assets/images/Upcoming-02.png'

const Home = () => {
    return (
        <div>
            <div className="main_layout">
                <Leftbar index={1} />
                <div className="right_bar">
                    <Cards heading="Home" />
                    <div className='mainhome'>
                        <div className='mainhome_user'>
                            <p className='mainhome_heading'>Pending Payments</p>
                            <HomeUsers type={'pending'} />
                        </div>
                        <div className='mainhome_user'>
                            <p className='mainhome_heading'>Completed Orders</p>
                            <HomeUsers type={'completed'} />
                        </div>
                        {/* <div className='mainhome_events'>
                            <p className='mainhome_heading'>Tables</p>
                            <EventsTable />
                        </div> */}
                    </div>

                    {/* <p className='mainhome_heading'>Payments</p> */}
                    {/* <div className='mainhome_eventcard'>
                <EventCard  heading={"Boys Party"} imgSrc={"https://cdn.shopify.com/s/files/1/2090/7523/articles/Corinthia_Hotel_London_-_EGM_Cigars05609_1024x1024.jpg?v=1542283406"} des={"Hello I am setting soem boys BBQ..."} img={expire}/>
                    <EventCard heading={"BBQ Party"} imgSrc={"https://cdn.budgetyourtrip.com/images/photos/headerphotos/large/cuba_havana.jpg"} des={"Here we go we are doing BBQ Party..."} img={expire}/>
                    <EventCard heading={"Hill Party"} imgSrc="https://tse1.mm.bing.net/th?id=OIP.PZMqxgpV9SCfjJJwD03fJwHaE7&pid=Api&P=0" des={"Hello I am setting some Hills Party..."} img={ongoing}/>
                    <EventCard heading={"Chillz"} imgSrc="https://tse2.mm.bing.net/th?id=OIF.59NIZ%2fwHBMkO37fTLiea5Q&pid=Api&P=0" des={"Hello I announce tonight is Chillz party..."} img={ongoing}/>
                    <EventCard heading={"Youngster"} imgSrc="https://tse1.mm.bing.net/th?id=OIP.0_WFBf8DEyiJRMrLKkvlvQHaE7&pid=Api&P=0" des={"Hey we are setting some youngster show"} img={upcoming}/>
                    <EventCard heading={"Girls Party"} imgSrc="https://tse2.mm.bing.net/th?id=OIP.y4Ws0HyBWUtrxAHyopyx6AHaE8&pid=Api&P=0" des={"Hey We are doing girls party..."} img={upcoming}/>

                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home

