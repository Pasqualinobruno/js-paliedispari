/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Chiedere all’utente di inserire una parola
const word = prompt('Scrivi una parola per controllare se fosse palindroma');
//console.log(word);
document.querySelector('#parola').innerHTML = word

document.querySelector('#palindroma').addEventListener( "click", function palindroma() {
    const word_without_space = word.toLowerCase();//.toLowerCase() trasforma il testo in minuscolo
    const word_inverse = word_without_space.split('').reverse().join('');
    //.split('') divide la stringa in caratteri
    //.reverse() inverte la parola
    //.join('') riunisce i caratteri in una stringa

    if (word_without_space === word_inverse) {
        //console.log('polindroma');
        alert('polindroma')
        
    } else {
        //console.log('non palindroma');
        alert('non palindroma')
    }

})



const number = prompt('scegli un numero da 1 a 5');
if (number > 5 || number < 1) {
    alert("il numero non è compreso tra 1 e 5")
    
}

document.querySelector('#number_user').innerHTML = number
//console.log(number);
const number_pc = document.querySelector('#number_pc').innerHTML =  getRndInteger(1,5);
//console.log(number_pc);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


let sum = Number(number) + Number(number_pc);
//console.log(sum);

if (sum % 2 === 0) {
    //console.log('il numero e pari');
    document.querySelector('#somma').innerHTML = sum + 'il numero è pari' ;

} else {
    //console.log('il numero non e pari');
    document.querySelector('#somma').innerHTML = sum + 'il numero non è pari' ;


}




