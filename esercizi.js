//Scrivere un blocco di codice Javascript che stampi a console i primi dieci 
//interi pari compresi tra 20 e 0, partendo da 20. 
//Importante non bisogna usare delle costanti, ma solo le istruzioni if e for.

var i = 20;
console.log(i);

for (;i > 0; i--){
    if(i%2==0){
    console.log(i);
    }
}

//Scrivere un blocco di codice Javascript che stampi a console i primi dieci numeri interi, 
//escluso lo zero, in lingua italiana.

var i = 1;
while (i <=10){
    var x;
    switch (i){
        case 1: x="uno";break;
        case 2: console.log("due");break;
        case 3: console.log("tre");break;
        case 4: console.log("quattro");break;
        case 5: console.log("cinque");break;
        case 6: console.log("sei");break;
        case 7: console.log("sette");break;
        case 8: console.log("otto");break;
        case 9: console.log("nove");break;
        case 10: console.log("dieci");break;
    }
    i++;
    console.log(x);
}

//Scrivere un blocco di codice Javascript che stampa le tabelline da 1 a 10

for (var i = 1; i <=10; i++){
    var row = "";
    for (var x=1; x<= 10; x++){
        row = row + " " + x*i;
    } 
    console.log(row);
}

//Scrivi un blocco di codice che dato un array di numeri, calcoli la media
// dei valori e restituisca in output la media e tutti i valori minori della media.
// Esempio:
//    Input: a = [3, 5, 10, 2, 8]
//    Output: media = 5.6, valori minori = [3, 5, 2]

a = [3,8,5,6,9,2,10];
var somma = 0;
var length = a.length;
for (var x = 0; x < length ; x++){
    somma = somma + a[x];
}
var media = somma / length;
    console.log ("media:" + media);
    
var row = "";
for (var x=0; x<= 10; x++){
    if (a[x] < media){
        row = row + " " + a[x] + ",";
    } 
}
a.push(2);
console.log(a.length);
console.log("valori minori: ["+ row + "]");

//Scrivi una funzione che prenda in input un numero e restituisca TRUE 
//se è un numero primo, FALSE altrimenti.
//Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.
//ES. Input: n = 5
//    Output: true 2 3 5 7 11

function nPrimo (numero){
    if (numero === 1 || numero == 2){
        return true;
    }
    for (var i = 2; i <numero; i++){
        if (numero % i == 0){
            return false;
    }
}
    return true;
}

function stampaNumeriPrimi(count = 1){
    var x = 0;
    var p = 1;
    console.log(nPrimo(count));
    while(true){
        if (x===count){
            break;
        }
        if (nPrimo(p)){
            console.log(p);
            x++;
        }
        p++;
    }   
}
stampaNumeriprimi(10);

// Scrivere una funzione che calcoli la somma dei primi N interi. 
//   Esempio:
//     Input: 5
//     Output: 15
// N.B.
// Opzionale scrivere una funzione ricorsiva.

function sommaInteri() {
    var somma = 0;
    var i;
    for (i in arguments) {
    somma = somma + arguments[i];
    }
    return somma;
}

// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, 
// FALSE se non lo è. Nel controllo scarta gli spazi e i segni di punteggiatura.
//   Esempio:
//     Input: i topi non avevano nipoti
//     Output: true
// Consigli:Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari 
// o il metodo del tipo stringa chiamato replace, in questo modo: str.replace(/\W/g, "").

function palindromo(stringa) {
    let stringa = "Angolo bar a Bologna";
    stringa = stringa.replace(/\W/g, "");
    let stringaPalindroma = split(stringa).reverse(stringa);
    if (stringa === stringaPalindroma) {
        return true;
    }else console.log ("false"); 
}

// Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
//     - 0 Se A e B sono equidistanti da N
//     - 1 Se B è più vicino a N rispetto ad A
//     - -1 Se A è più vicino a N rispetto a B

function distanzaNumeri(A,B,N) {
    if ((A - N) === (B - N)){
        return 0;     
    }
    if ((A - N) < (B - N)){
        return 1;     
    }
    if ((A - N) > (B - N)){
        return -1;     
    } 
}

// crea oggetto vuoto calciatore
// aggiungi la proprietà nome con valore Lorenzo 
// aggiungi la proprietà cognome con valore Pellegrini
// cambia il valore di nome con Giuseppe 
// rimuovi la proprietà cognome dall'oggetto

var calciatore = {nome: "Lorenzo",cognome: "Pellegrini",};
    calciatore.nome = "Giuseppe",
    delete calciatore.cognome
    console.log ("cognome" in calciatore);

// scrivi la funzione isEmpty(obj) che ritorna true se 
// l'oggetto non ha proprietà, altrimenti ritorna false

function isEmpty(obj) {
    obj = {};
    if (obj === undefined) {
        return true;
    }else console.log(false);
}

// scrivi una funzione che stampi il nome e il cognome 
// dei calciatori che hanno il numero di maglia = a 10

function calciatori10(calciatori) {
    var calciatori = [
        {nome: "Lorenzo", cognome: "Pellegrini", maglia: 10 },
        {nome: "Edin", cognome: "Dzeko", maglia: 23 },
        {nome: "Federico", cognome: "Chiesa", maglia: 99 },
        {nome: "Paulo", cognome: "Dybala", maglia: 10 },
        {nome: "Lorenzo", cognome: "Insigne", maglia: 10 },
        {nome: "Andrea", cognome: "Belotti", maglia: 9 },
        {nome: "Antonio", cognome: "Vacca", maglia: undefined },
    ];
    if (calciatori.maglia == 10) {
        console.log (calciatori.nome),
        console.log (calciatori.cognome)
    }  
}

// Scrivi un programma per la gestione di un garage.
// Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
// Definisci un oggetto che rappresenti il garage.
// Scrivi una funzione che inserisca un veicolo nel garage.
// Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.
// Scrivi una funzione che rimuove un veicolo dal garage.
// Puoi usare un array come base per salvare le automobili.
// Per togliere un elemento dall’array puoi usare il metodo arr.splice(i, 1); 
// dove i è l’indice posizionale e 1 rappresenta il numero di elementi da eliminare.

// es prof -------------------------------------------------------------------------

var automobile = {marca: "Ford", modello: "Fiesta"};
function creaAutomobile (marca,modello){
    return {
        marca,modello
    }
}

var garage = {database: []};

garage.inserisciAuto = function (auto){
    this.database.push(auto);
}

garage.stampaAutomobili = function (marca){
    marca = marca.toLowerCase();
    for (var i = 0; i < this.database.length; i++){
        var auto = this.database[i];
        if (auto.marca.tolowercase() === marca){
            console.log(auto.marca + " " + auto.modello);
        } 
    }
};

garage.eliminaAuto = function (auto){
    for (var i = 0; i < this.database.length; i++){
        var el = this.database[i];
        if (auto.marca.toLowerCase()=== el.marca.toLowerCase()
        && auto.modello.toLowerCase()=== el.modello.toLowerCase()){
            this.database.splice(i,1)
        }
    }
};

var fiat500 = creaAutomobile("Fiat","500");
garage.inserisciAuto (fiat500);
garage.inserisciAuto (creaAutomobile("Mercedes","x1"));

garage.stampaAutomobili ("Fiat");

garage.eliminaAuto (fiat500);
garage.eliminaAuto (automobile);

garage.stampaAutomobili ("Fiat");

// es mio -----------------------------------------------------------

var parkAuto = ["Ferrari", "Lamborghini", "Mercedes", "Tesla"];
var garage = {database:[]};
var car = {marca: "Ferrari", modello: "F430"};

function carCreator(marca, modello) {
    return {
        marca, modello
    }
};

var parkingCar = function () {database.push (cars) in garage};

var removeCar = function () {database.splice (0,1)};

for (let i = 0; i < parkAuto.length; i++) {
    const element = parkAuto[i];
}

garage.printCar = function (marca){
    marca = cars.marca();
    for (let i = 0; i < this.database.length; i++) {
        var cars = this.database[i];
        if (cars.marca === marca) {
            console.log (cars.marca + " " + cars.modello);
        }  
    }
};

garage.parking (carCreator("Mercedes", "MGK"));
garage.parking (carCreator("Tesla", "S"));

console.log(garage.printCar);

// creare oggetto con nome ristorante 
// creare oggetto prenotazione con 3 proprietà (nome,n. persone, telefono)
// creare funzione per stampa e annullamento prenotazione 

var ristorante = {nome: "Ristorante da Frenk", prenotazioni:[]};

ristorante.stampaPrenotazioni = function (){
    for (var indice = 0; indice < this.prenotazioni.length; indice++){
        var prenotazione = this.prenotazioni[indice];
        console.log("Nome: "+ prenotazione.nome);
        console.log("N. Persone: "+ prenotazione.nPersone);
        console.log("Telefono: "+ prenotazione.telefono);
        console.log("---------------------------------------------------");
    }
};

ristorante.aggiungiPrenotazione = function (nome, nPersone, telefono){
    var prenotazione = {nome, nPersone, telefono}
    this.prenotazioni.push(prenotazione);
};

ristorante.annullaPrenotazione = function (telefono){
    for (var indice = 0; indice < this.prenotazioni.length; indice ++){
        var prenotazione = this.prenotazioni[indice];
        if (prenotazione.telefono === telefono){
            this.prenotazioni.splice(indice, 1);
        }   
    }
};

ristorante.aggiungiPrenotazione ("Gabriele", 2, "3456789012")
ristorante.aggiungiPrenotazione ("Federica", 2, "3456784712")
ristorante.aggiungiPrenotazione ("Gabriele", 2, "3455559012")

ristorante.prenotazioni();

// scrivi un costruttore calcolatrice che crea oggetti con 4 metodi:
// leggi () richiede due valori come argomento della funzione e li 
// memorizza nelle proprietà dell'oggetto
// somma () restituisce somma proprietà dell'oggetto
// moltiplica () restituisce prodotto proprietà dell'oggetto
// dividi () restituisce divisione proprietà dell'oggetto

function Calcolatrice () {
    this.leggi = function (x, y) {
        this.x = x;    
        this.y = y;    
    };
    this.somma = function () {
        console.log(this.x + this.y); 
        return this.x + this.y;
    };
    this.moltiplica = function () {
        console.log(this.x * this.y);  
    };
    this.dividi = function () {
        if (this.x > 0 && this.y > 0)
        console.log(this.x / this.y);  
    }; 
}

var calcolatrice = new calcolatrice ();
calcolatrice.leggi (1,1);
console.log(calcolatrice.x);
console.log(calcolatrice.y);

var somma = calcolatrice.somma ();

// scrivere la classe calcolatrice che contiene al suo interno due proprietà
// di tipo intero parametro1 e parametro2 che non possono essere negativi
// la classe dovrà avere 3 metodi somma moltiplica dividi

class Calcolatrice {
    constructor (Parametro1, Parametro2) {
        this.parametro1 = parametro1;
        this.parametro2 = parametro2;
    }
    get parametro1(){
        return this._parametro1;
    }
    get parametro2(){
        return this._parametro2;
    }
    set parametro1(parametro1){
        if(this.parametro1 > 0){
            this._parametro1 = parseInt(parametro1)
        }
    }
    set parametro2(parametro2){
        if(this.parametro2 > 0){
            this._parametro2 = parseInt(parametro2)
        }
    }
    somma (){
        return this.parametro1 + this.parametro2;
    }
    moltiplicazione (){
        return this.parametro1 + this.parametro2;
    }
    divisione (){
        return this.parametro1 + this.parametro2;
    }
}

var calcolatrice =  new Calcolatrice(1, 1);

var somma = calcolatrice.somma();
console.log(somma);

calcolatrice.parametro1 = 5;
calcolatrice.parametro2 = 5;

var moltiplicazione = calcolatrice.moltiplicazione();
console.log(moltiplicazione);

calcolatrice,parametro1 = 50;
var divisione = calcolatrice.divisione();
console.log(divisione);

calcolatrice.parametro2 = 0;
var somma1 = calcolatrice.somma();
console.log(somma1);

// esercizio garage ma con classi 

class Automobile {
    constructor(marca, modello){
        this.marca = marca;
        this.modello = modello;
    }

    get marca(){
        return this._marca;
    }

    get modello(){
        return this._modello;
    }

    set marca(marca){
        if (typeof(marca) === "string"){
            this._marca = marca;
        }
    }

    set modello(modello){
        if (typeof(modello) === "string"){
            this._modello = modello;
        }
    }
}

class Garage {
    constructor(){
        this.database = [];
    }

    aggiungiAutomobile(automobile){
        if (automobile instanceof Automobile){
            this.database.push(automobile);
        }
    }

    rimuoviAutomobile(automobile){
        if (automobile instanceof Automobile){
            for (var i = 0; i< this.database.length; i++){
                var el = this.database[i];
                if (automobile.marca.toLowerCase() === el.marca.toLowerCase()
                    && automobile.modello.toLowerCase() === el.modello.toLowerCase()){
                        this.database.splice(i, 1);
                }
            }
        }
    }

    stampaAutomobili(){
        for(var i = 0; i< this.database.length; i++){
            var auto = this.database[i];
            console.log(auto.marca + " " + auto.modello);
        }
    }
}

var garage = new Garage();

var fiat500 = new Automobile("Fiat", "500L");
garage.aggiungiAutomobile(fiat500);
garage.aggiungiAutomobile("");
garage.stampaAutomobili();
console.log("----------------");
garage.aggiungiAutomobile(new Automobile("Mercedes", "X1"));
garage.stampaAutomobili();
console.log("----------------");
garage.rimuoviAutomobile(fiat500);
garage.stampaAutomobili();




 



