function writeCards(names, birthday) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
    }

    return cards;
}

function countDown(firstNumber) {
   while ( firstNumber > 0 ) {
console.log(firstNumber);
firstNumber -= 1;
   }
   console.log(firstNumber);
}