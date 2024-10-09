"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Navdeep kaur
   Date: 2024-10-08 

*/
/* Display date & time */
document.getElementById("dateNow").innerHTML=`m/d/y/ <br />h:m:s`;
/*Display the time left until New Years Eve */

document.getElementById("days").textcontent="dd";
document.getElementById("hrs").textcontent="hh";
document.getElementById("mins").textcontent="mm";
document.getElementById("secs").textcontent="ss";

/* store the current date & time */
var currentDay = new Date("May, 23, 2018 14:35:05");
var datestr = currentDay.toLocalDateString();
var timestr = currentDay.toLocalTimeString();

/*Display date & time */
document.getElementById("dateNow").innerHTML = dateStr + "<br />" timeStr;