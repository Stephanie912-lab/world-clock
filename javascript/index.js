function updateTime(){
let losAngelesElement=document.querySelector("#los-angeles");
let losAngelesDateElement=document.querySelector("#los-angeles .date");
let losAngelesTimeElement=document.querySelector("#los-angeles .time");
losAngelesTime=moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML=losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML=losAngelesTime.format("h:mm:ss[<small>]A[</small>]");

let ParisElement=document.querySelector("#paris");
let ParisDateElement=document.querySelector("#paris .date");
let ParisTimeElement=document.querySelector("#paris .time");
ParisTime=moment().tz("Europe/Paris");
ParisDateElement.innerHTML=ParisTime.format("MMMM Do YYYY");
ParisTimeElement.innerHTML=ParisTime.format("h:mm:ss[<small>]A[</small>]");}

updateTime();
setInterval(updateTime,1000);