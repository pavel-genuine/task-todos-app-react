import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendar=()=> {
 
    return (
     <div className='w-[80%] h-[80vh] mx-auto pt-20'>
         <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
     </div>
    )
  }


export default Calendar