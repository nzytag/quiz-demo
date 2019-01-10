'use strict';


//*** changes the: welcome to quiz fellows depending on the time of the day ***
function displayTime() {
  if (localStorage.username) {
    var today =  new Date ();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
      greeting = 'Good Evening ' + localStorage.username + '! Welcome to Quiz Fellows!';
    } else if (hourNow > 12) {
      greeting = 'Good Afternoon ' + localStorage.username + '! Welcome to Quiz Fellows!';
    } else if (hourNow > 0) {
      greeting = 'Good Morning ' + localStorage.username + '! Welcome to Quiz Fellows';
    } else {
      greeting = 'Welcome!';
    }
    document.write('<h1>' + greeting + '</h1>');
  } else {
    var todayNoUser =  new Date ();
    var hourNowNoUser = todayNoUser.getHours();
    var greetingNoUser;

    if (hourNowNoUser > 18) {
      greetingNoUser = 'Good Evening! Welcome to Quiz Fellows!';
    } else if (hourNowNoUser > 12) {
      greetingNoUser = 'Good Afternoon! Welcome to Quiz Fellows!';
    } else if (hourNowNoUser > 0) {
      greetingNoUser = 'Good Morning! Welcome to Quiz Fellows';
    } else {
      greetingNoUser = 'Welcome!';
    }
    document.write('<h1>' + greetingNoUser + '</h1>');
  }
}
displayTime(); //calls the date function
