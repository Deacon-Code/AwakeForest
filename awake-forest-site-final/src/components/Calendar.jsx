import React from 'react'
import "./CalendarStyles.css"

const Calendar = () => {
return (
    <div className='calendar-container'>
            <div className='calendar'>
            <iframe src="https://embed.styledcalendar.com/#6R4uYezm0JmkfFtDdfzx" title="Styled Calendar" class="styled-calendar-container" 
            style={{width: "100%", height: "100%", border: "none" }} data-cy="calendar-embed-iframe"></iframe>
            <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
            </div>
    </div>
    )
}

export default Calendar
