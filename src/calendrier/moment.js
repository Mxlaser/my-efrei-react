import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/fr';

const localizer = momentLocalizer(moment)
moment.locale('fr');

const events = [
    {
      title: 'React',
      start: new Date(2024, 5, 12, 9, 0),
      end: new Date(2024, 5, 12, 13, 0),
    },
    {
      title: 'Pause',
      start: new Date(2024, 5, 12, 13, 0),
      end: new Date(2024, 5, 12, 14, 0),
    },
    {
      title: 'React',
      start: new Date(2024, 5, 12, 14, 0),
      end: new Date(2024, 5, 12, 17, 30),
    },
    {
      title: 'React',
      start: new Date(2024, 5, 13, 9, 0),
      end: new Date(2024, 5, 13, 13, 0),
    },
    {
      title: 'Pause',
      start: new Date(2024, 5, 13, 13, 0),
      end: new Date(2024, 5, 13, 14, 0),
    },
    {
      title: 'React',
      start: new Date(2024, 5, 13, 14, 0),
      end: new Date(2024, 5, 13, 17, 30),
    },
];

export const MonCalendrier = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      messages={{
        next: "Suivant",
        previous: "Précédent",
        today: "Aujourd'hui",
        month: "Mois",
        week: "Semaine",
        day: "Jour",
        agenda: "Agenda",
        date: 'Date',
        time: 'Heure',
        yesterday: 'Hier',
        tomorrow: 'Demain'
      }}
    />
  </div>
)