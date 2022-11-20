// Code your solutions in this file
//for loop
let messages = [];

function writeCards(names,wish) {
    for (let i=0; i<names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${wish} gift!`);
        
    }
    return messages; 
}


//while loop
function countDown(number) {
    
    while (number>=0) {
        console.log(number);
        number --;

    }
    
}
countDown(10);

  