import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = () => {
  const x= []
  return (
    <div id="calendar-div-container">
      <br/>
      <BigCalendar
        events= {x}
        startAccessor='startDate'
        endAccessor='endDate'
        views={{
  month: true,
  week: false
}}
      />
    </div>
  )
}

export default MyCalendar
