// Already coded in the backend: var katzDeliLine = [];

//newNumber 

var number = 0;

//Using interpolation and push method.
function takeANumber(lineOfPeopleArray) {
  var yourNumber = number + 1;
  number++;
  lineOfPeopleArray.push(yourNumber);
  return `Welcome, ${yourNumber}. You are number ${lineOfPeopleArray.length} in line.`
}

//Using conditionals and array shift. 
function nowServing(katzDeliLine) {
  
   if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } 
    
    else {
      var announcement = `Currently serving ${katzDeliLine[0]}.`;
      katzDeliLine.shift();
      return announcement;
      }
}


//One solution for creating list concatenation with for loop.
var empty = [];

function currentLine(line) {
        if (line.length === 0) {
           return "The line is currently empty.";
        }
        
        else {
          for (var i = 0; i < line.length; i++) {
            empty.push(`${i + 1}. ${line[i]}, `);
            }
          var concat = empty.join("");
          concat = concat.substring(0, concat.length - 2);
          return `The line is currently: ${concat}`
        }
}
          

