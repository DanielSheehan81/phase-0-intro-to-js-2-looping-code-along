// Code your solutions in this file
const name = (['Lisa', 'Kaitlin', 'Jan'], 'surprise');
function writeCards(name, event) {
    const gifts = []
    for (let i = 0; i < name.length; i++) {
        gifts.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return gifts;
}
function countDown(number){
    let i = number;
    while (i >= 0){
        console.log(i--);
    }
}
countDown(10);