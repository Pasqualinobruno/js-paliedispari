/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Chiedere all’utente di inserire una parola
const word = prompt('Scrivi una parola per controllare se fosse palindroma');
console.log(word);
document.querySelector('#parola').innerHTML = word

document.querySelector('#palindroma').addEventListener( "click", function palindroma() {
    const word_without_space = word.toLowerCase();//.toLowerCase() trasforma il testo in minuscolo
    const word_inverse = word_without_space.split('').reverse().join('');
    //.split('') divide la stringa in caratteri
    //.reverse() inverte la parola
    //.join('') riunisce i caratteri in una stringa

    if (word_without_space === word_inverse) {
        console.log('polindroma');
        
    } else {
        console.log('non palindroma');
    }

})



