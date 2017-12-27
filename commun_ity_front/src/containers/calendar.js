import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = () => {
  let x = [
    {
      'title': 'Bowling Event',
      'start':new Date(2017, 11, 28, 7, 0, 0),
      'end': new Date(2017, 11, 28, 10, 30, 0)
  }
  ]
  console.log(moment().format('LL'))
  return (
    <div id="calendar-div-container">
      <br/>
      <BigCalendar
        events= {x}
        startAccessor='startDate'
        endAccessor='endDate'
        views={{
        month: true
      }}
      />
    </div>
  )
}

export default MyCalendar
