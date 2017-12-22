import React from 'react'
import MyCalendar from '../../containers/Calendar'

class CalendarPage extends React.Component{

  render(){
    return(
    <div id="user-home-div" >
      <h1 id="user-home-welcome">Welcome back Ryan!</h1>
      <p id="user-home-welcome">Check out your upcoming events and tasks below.</p>
      <MyCalendar />
    </div>
    )
  }
}

export default CalendarPage
