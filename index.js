// Code your solutions in this file
function writeCards(arr, event_name){
    for (let i = 0; i < arr.length; i++){
        console.log(`Thank you, ${arr[i]}, for the wonderful ${event_name} gift!`)
    }
}

function countDown(integer){
    let i = 10;
    while (i > 0) {
        console.log(i--);
    }
}