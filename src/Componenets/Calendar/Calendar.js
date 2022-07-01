import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendar=()=> {
 
    return (
     <div className='bg-neutral '>
        <div className='w-[80%]  bg-neutral text-[white]  mx-auto py-20'>
         <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
     </div>
     </div>
    )
  }


export default Calendar