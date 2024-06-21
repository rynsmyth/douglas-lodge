import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventsCalendar = ({ events }) => {
  return (
    <div style={{ height: 350 }}>
     <Calendar
  localizer={localizer}
  events={events}
  startAccessor="start"
  endAccessor="end"
  style={{ height: 350 }}
  views={['month', 'week', 'day', 'agenda']}
  defaultView="week"
/>
    </div>
  );
};

export default EventsCalendar;
