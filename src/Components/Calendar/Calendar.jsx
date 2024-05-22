// import React, { useState } from "react";
// import CalendarHeader from "../Calendar/CalendarHeader";
import moment from "moment";
import { useEffect, useState } from "react";
import usePrograms from "../../Context/ProgramsContext";
import { Calendar as Cal, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "../CustomToolbar";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
const Calendar = () => {
  const navigate = useNavigate();
  // const [currentDate, setCurrentDate] = useState(new Date());

  // const daysInMonth = (month, year) => {
  //   return new Date(year, month + 1, 0).getDate();
  // };

  // const getMonthName = (month) => {
  //   const monthNames = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   return monthNames[month];
  // };

  // const today = new Date();
  // const currentMonth = currentDate.getMonth();
  // const currentYear = currentDate.getFullYear();
  // const daysCount = daysInMonth(currentMonth, currentYear);

  // const isToday = (day) => {
  //   return (
  //     day === today.getDate() &&
  //     currentMonth === today.getMonth() &&
  //     currentYear === today.getFullYear()
  //   );
  // };

  // const changeMonth = (change) => {
  //   setCurrentDate((prevDate) => {
  //     const newDate = new Date(prevDate);
  //     newDate.setMonth(newDate.getMonth() + change);
  //     return newDate;
  //   });
  // };
  const localizer = momentLocalizer(moment);
  const [programs, setPrograms] = useState(null);
  const eventPropGetter = (event) => {
    const defaultbackground = "#DF0000";
    const style = {
      backgroundColor: event.backgroundColor
        ? event.backgroundColor
        : defaultbackground,
      color: "white",
    };
    return { style };
  };
  const { retrievePrograms } = usePrograms();
  useEffect(() => {
    const setup = async () => {
      const results = await retrievePrograms();
      console.log();
      setPrograms(
        results.map((result) => {
          const date = format(new Date(result.program_date), "yyyy-MM-dd");
          const startTime = format(new Date(result.time_start), "HH:mm");
          const endTime = format(new Date(result.time_end), "HH:mm");
          const startDate = new Date(date + "T" + startTime);
          const endDate = new Date(date + "T" + endTime);

          // Construct the desired object
          const formattedData = {
            id: result.program_id,
            title: result.title,
            start: startDate,
            end: endDate,
          };
          return formattedData;
        })
      );
    };
    setup();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <Header title="Calendar" />
        <div className="w-full p-20">
          {programs && (
            <Cal
              className="border-2 rounded-lg shadow"
              localizer={localizer}
              events={programs}
              views={["month", "week", "day"]}
              startAccessor="start"
              endAccessor="end"
              eventPropGetter={eventPropGetter}
              selectable
              onSelectEvent={(e) => navigate(`/programs/${e.id}`)}
              onSelectSlot={(e) => console.log(e)}
              style={{ height: "600px" }}
              components={{
                toolbar: CustomToolbar, // Use your custom toolbar component
              }}
            />
          )}
        </div>
      </div>
      {/* <div
        className="flex justify-center items-center px-16 py-20 text-8xl mb-5 font-bold text-white whitespace-nowrap bg-white shadow-2xl max-md:px-5 max-md:text-4xl"
        style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="justify-center p-2.5 mt-1.5 bg-[#DF0000] max-md:max-w-full max-md:text-4xl">
          CALENDAR
        </div>
      </div>
      <CalendarHeader/>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 py-6 md:py-10 my-5 md:my-10">
          <div className="flex justify-center items-center">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              className="p-2 rounded-full text-xl md:text-2xl hover:bg-gray-200 mx-2 md:mx-4"
            >
              &lt;
            </button>
            <h1 className="text-xl md:text-2xl font-semibold ">
              {getMonthName(currentMonth)} {currentYear}
            </h1>
            <button
              type="button"
              onClick={() => changeMonth(1)}
              className="p-2 rounded-full text-xl md:text-2xl  hover:bg-gray-200 mx-2 md:mx-4"
            >
              &gt;
            </button>
          </div>
          <div className="grid grid-cols-7 mt-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-semibold uppercase border border-gray-300 p-2 bg-[#042A2B] text-white">
                {day}
              </div>
            ))}
            {Array.from({ length: daysCount }, (_, i) => i + 1).map((date) => (
              <button
                key={date}
                type="button"
                className={`py-6 md:py-8 px-2 md:px-4 text-sm md:text-base text-right transition-colors border border-gray-300 ${
                  isToday(date) ? "bg-red-200" : ""
                } ${isToday(date) ? "text-gray-900" : "text-gray-700 hover:bg-gray-200"}`}
                aria-label={`Select ${date}`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Calendar;
