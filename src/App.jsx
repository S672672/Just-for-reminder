import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const generateCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);

    // Blank spaces for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  useEffect(() => {
    // Update the page title with the current month
    document.title = `Mini Calendar - ${currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}`;
  }, [currentDate]);

  return (
    <div className="App">
      <h1>Mini Calendar</h1>
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>Previous Month</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => changeMonth(1)}>Next Month</button>
      </div>
      <div className="calendar">
        <div className="days-header">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="days">
          {generateCalendar().map((day, index) => (
            <div key={index} className={day === null ? 'empty' : ''}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
