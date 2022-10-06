//1)l programma dovrà chiedere all'utente:

//il numero di chilometri che vuole percorrere

const km = Number(prompt('Quanti chilometri devi percorrere ?'));


//l'età del passeggero.

const eta = Number(prompt('Quanti anni ha il passeggero ?'));


//2)Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//il prezzo del biglietto è definito in base ai km (0.21 € al km)

const prezzo = (km * 0.21).toFixed(2);



//va applicato uno sconto del 20% per i minorenni
if (eta < 18){
    let discount = (prezzo - prezzo / 100 * 20).toFixed(2);
    console.log(discount);
    document.getElementById('biglietto').innerHTML = discount + '€';

} else if (eta > 65){
        let discount = (prezzo - prezzo / 100 * 40).toFixed(2);
        console.log(discount);
        document.getElementById('biglietto').innerHTML = discount + '€';
}else{
        document.getElementById('biglietto').innerHTML = prezzo + '€';
}

//va applicato uno sconto del 40% per gli over 65.
