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


/* store the current date & time */
var currentDay = new Date("October, 10, 2024 14:35:05");
var datestr = currentDay.toLocalDateString();
var timestr = currentDay.toLocalTimeString();

/*Display date & time */
document.getElementById("dateNow").innerHTML =
 dateStr + "<br />" timeStr;

/* Display days left before  January 1st, 2018 */ 
 var newYear = new Date("January 1, 2024");
 var nextYear = currentDay.getFullYear() + 1;
 newYear.setFullYear(nextYear);

 /* Calculate the days left in the current day */ 
var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

 /* Calculate the hours left in the current day */ 
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

document.getElementById("dateNow").innerHTML=`m/d/y/ <br />h:m:s`;

 /*Display the time left until New Years Eve */

document.getElementById("days").textcontent=Math.floor(daysLeft);
document.getElementById("hrs").textcontent="hh";
document.getElementById("mins").textcontent="mm";
document.getElementById("secs").textcontent="ss";



