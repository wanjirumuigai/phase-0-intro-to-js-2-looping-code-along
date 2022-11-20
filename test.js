let messages = [];


function writeCards(names,wish) {
    for (let i=0; i<names.length; i++) {
        messages.unshift(`Thank you, ${names[i]}, for the wonderful ${wish} gift`);
        
    }
    return messages;
}


writeCards(["Ada", "Brendan", "Ali"], "birthday");