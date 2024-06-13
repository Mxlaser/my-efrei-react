import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { planning } from './calendrier';

const localizer = momentLocalizer(moment)
export const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={planning}
      startAccessor="debut"
      endAccessor="fin"
      style={{ height: 500 }}
    />
  </div>
)