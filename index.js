function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
  }
function logShout(string) {
    console.log(string.toUpperCase());
  }
function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  /*OH goodness!! I think I did it WOOOT!!! Over thinking and over complicating things can be a hell of a thing :) 
  I'm a programmer now :) well almost...fingers cross.. YEAH!*/
  let lowerCase = "I can\'t hear you!";
  let upperCase = "YES INDEED!";
  let dinner = "I would love to!"

  function sayHiToHeadphonedRoommate(string) {
    string = lowerCase 
      ? lowerCase 
      : upperCase;
    lowerCase = upperCase
      ? upperCase
      : lowerCase;
    upperCase = dinner
      ? dinner
      : string

    return string;
  }
    
    