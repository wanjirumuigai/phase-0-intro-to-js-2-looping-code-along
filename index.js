// Code your solutions in this file
//for loop
let messages = [];

function writeCards(names,wish) {
    for (i=0; i<names.length; i++) {
        messages.unshift(`Thank you, ${names[i]}, for the wonderful ${wish} gift`);
    }
    console.log(messages);

}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

//while loop
function countDown(number) {
    
    while (number>=0) {
        console.log(number);
        number --;

    }
    
}
countDown(10);

  