var somenumber= 52; //random number left over from lab 
var anothernumber = 32; //random number left over from lab 


document.write(somenumber * anothernumber); //writes the two random numbers before that is left over from lab

function write () { //function that is preform when you click on the box
  var randomcolor; //left over var from lab
  var randomlength; //new var that is the width of box
  var randomheigth;//new var that is the heigth of the box
  
  $('.box').on('click', function(){ //tells the program on click this will happen
    randomcolor= '#' + (Math.random()*0xFFFFFF<<0).toString(16);//determines the color at random
    $(this).toggleClass('active');// make this active or only one at a time will work
    $(this).css('background', randomcolor); //will change the background color with the new color
    
    randomlength=(Math.random()*250); //determines the width at random
    $(this).toggleClass('active'); // make this active or only one at a time will work
    $(this).css('height', randomlength); //will change the width with the new width

    
    
    randomheigth= (Math.random()*250);//determines the height at random
    $(this).toggleClass('active');// make this active or only one at a time will work
    $(this).css('width', randomheigth); //will change the height with the new height
  }); //closing the click function

}//closing in the write function

write();//actually allows for the write function to be run
