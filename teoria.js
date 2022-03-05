// ----- NULL ----- //
// rappresenta un valore che non rientra tra i tipi di dato del linguaggi
// cioè non è un valore numerico valido, ne stringa, ne oggetto

// ----- UNDEFINED ----- //
// rappresenta un valore che non esiste, è il valore di una variabile non 
// inizializzata, a cui non è stato assegnato nessun tipo di valore

// ----- VARIABILI IN JAVASCRIPT ----- //

var nomevariabile = "";
var $nomevariabile = "";
$nomevariabile = "";

// ----- COSTANTI IN JAVASCRIPT ----- //

const ioMeStesso = "sono fregno";

// ----- SCRIPT ASYNC ----- //

{/* <script async> 
    evita di interrompere il rendering di HTML durante il download dello script,
    che viene eseguito subito dopo il download. Il parsing della pagina viene messo in pausa
    soltanto mentre lo script viene eseguito. Consigliato con scrpt modulare 
</script> */}

// ----- SCRIPT DEFENDER ----- //

{/* <script defender>
    evita di interrompere il rendering HTML durante il download dello script,
    che avviene in parallelo, ma il parsing non viene mai pesso in pausa.
    Consigliato se lo script si basa su altri scrpt o invocato da un altro.
</script> */}

// ----- SCRIPT SENZA ATTRIBUTI ----- //

// se lo script è di piccole dimensioni ed invocato da uno script asincrono,
// utilizzare uno script in linea senza attributi posto sopra gli script asincroni.

// ----- OPERATORE TYPEOF ----- // 

var prova = new Function ();
var numero = 1;
var carattere = "Salve";
console.log(typeof prova);     // restituisce "function"
console.log(typeof numero);    // restituisce "number"
console.log(typeof carattere); // restituisce "string"

// ----- IF, IF ELSE, IF ELSE IF ----- //

if (condition) {
    // istruzioni 
}

if (condition) {
    // istruzioni 1
} else {
    // istruzioni 2
}

if (condition1) {
    // istruzioni 1
} else if (condition2) {
    // istruzioni 2
} else {
    // istruzioni 3
}

// ----- SWITCH ----- //

switch (key) {
    case value: istruction1; break;
    case value: istruction2; break;
    case value: istruction3; break;
    default: istruction4; break;
}

// ----- WHILE E D0 / WHILE ----- //

while (condition) {
    // istruction
}

do {
    // istruction
} while (condition);

// ----- FOR ----- //

var quantita = [1,2,,3,4,5];
var totale = 0;
var indice;

for (valore in quantita) {
    totale = totale + quantita[indice];
}

var valore;
for (valore of quantita) {
    totale = totale + valore;
}

// ----- CONTINUE E BREAK ----- //

var x = 0;
while (true) {
    console.log(x);
    // condizione di uscita
    if (x > 100) break; 
        x++;
}

var x = 0;
while (x < 10) {
    x++;
    if (x > 3) continue;
    // se x è maggiore di 3, questa istruzione non viene più eseguita
    console.log(x);
}

// ----- OGGETTI IN JAVASCRIPT ----- //

var oggettoVuoto = {};
var persona = {"nome": "Mario", "cognome": "Rossi"};

// ----- ARRAY IN JAVASCRIPT ----- //

var colori = ["rosso", "verde", "blue", "giallo", "magenta"];

var matrice = [[24,13,1],[48,92,17],[8,56,11]];

// ----- FUNZIONI ----- //

// Una funzione è un insieme di istruzioni racchiuse in un blocco di codice, 
// contraddistinto da un nome, può accettare argomenti o parametri di ingresso
// e restituire valori
// - fase definizione 
// - fase invocazione 
// - fase return "consente di terminare e restituire un valore al codice che l'ha chiamata
//   consentendo di assegnare ad una variabile il valore restituito da una funzione"

function somma() {
    var z = 10 + 1;
    return z;
}
var risultato = somma ();

function somma(x, y) {
    var z = x + y;
    return z;
}

function somma() {
    var z = 0;
    var i;
    for (i in arguments) {
        z = z + arguments[i];
    }
    return z;
}

// ----- I METODI DEGLI OGGETTI ----- //

var player = {nome: "Francesco", cognome: "Totti"};
player.esulta = function () {
    console.log("Goooal!!!")
};
player.esulta (); // stampa su console Goooal!!! 

// oppure 

var player = {nome: "Francesco", cognome: "Totti"};
var esulta = function () {
    console.log("Goooal!!!")
};
player.esulta = esulta;
player.esulta (); // stampa su console Goooal!!! 

// sintassi + breve 

player = {
    esulta: function () {
        console.log ("Goooal!!!")
    }
};

// sintassi + breve, equivalente a quella sopra

player = {
    esulta() {
        console.log ("Goooal!!!")
    }
};

// ----- COSTRUTTORI ----- //

// l'operatore new crea istanze di oggetti simili all'interno del costruttore
// i costruttori sono funzioni, che sono denominate con la prima lettera maiuscola.
// si utilizzano per creare molti oggetti simili tra loro
// dovrebbe essere chiamato solo utilizzando new, questa chiamata implica la creazione
// di un oggetto oggettoVuoto, this che verrà popolato entro fine function

function Giocatore(nome, cognome, numeroMaglia) {
    this.nome = nome;
    this.cognome = cognome;
    this.numeroMaglia = numeroMaglia;
    this.isCapitano = false;
}

var giocatore = new Giocatore ("Francesco", "Totti", 10);

console.log(giocatore.nome); // Francesco 
console.log(giocatore.isCapitano); // false 

var giocatore = {
    nome: "Francesco",
    cognome: "Totti",
    numeroMaglia: 10,
    isCapitano: false
};

// i costruttori generalmente non hanno l'istruzione return, il loro compito
// è di eseguire ciò che è necessario alla costruzione dell'oggetto
// tramite il this, che è il vero output.
// per usare return ci sono 2 regole : 
// 1 se invocato con un oggetto, prenderà il posto di this
// 2 se invocato con un tipo primitivo, verrà ignorato

function Squadra() {
    this.nome = "As Roma";
    return { nome: "Milan" }; // restituisce Milan 
}

console.log(new Squadra().nome); // Milan

function Squadra() {
    this.nome = "Juventus";
    return; // restituisce this "Juventus"
}

// al this possiamo aggiungere non sono proprietà, ma anche metodi

function Cantante(nome, canzone) {
    this.nome = nome;   
    this.canzone = canzone;    

    this.canta = function () {
        alert ("Adesso canto: " + this.canzone);
    };
}

var fabrizio = new Cantante ("Fabrizio De Andrè", "La canzone dell'amore perduto");

fabrizio.canta(); // Adesso canto : La canzone dell'amore perduto

// ----- CLASSI ----- //

// Una classe è un costrutto di un linguaggio di programmazione usato come modello
// per creare oggetti. comprende proprietà (attributi) e metodi che saranno 
// condivisi da tutti gli oggetti creati (istanze) a partire dalla classe.
// Un oggetto è di fatto l'istanza di una classe.

class LaMiaPrimaClasse {
    // metodi della classe
    constructor() {...}
    metodo1 () {...}
    metodo2 () {...}
    metodo3 () {...}
    ...
}

// se utilizziamo new LaMiaPrimaClasse() creerà un nuovo oggetto con tutti i metodi 
// presenti nella classe. Il metodo constructor() viene chiamato automaticamente 
// da new, quindi possiamo utilizzarlo per inizializzare l'oggetto e le sue proprietà

class Cantante {
    constructor(nome) {
        this.nome = nome;
    }
    cantaUnaCanzone() {
        var canzone = this.nome + ": Canta una nuova canzone";
        console.log(canzone);
    }
}

// utilizzo : 

var cantante = new Cantante ("John");
cantante.cantaUnaCanzone();

// quando viene invocato new Cantante("John"):
// - crea un nuovo oggetto 
// - il metodo constructor () viene invocato e assegna a this.nome l'argomento dato in input al costruttore
// - poi si possono invocare i metodi della classe, ad esempio cantante.cantaUnaCanzone()

// si può creare una proprietà di una classe anche utilizzando l'operatore =

class Cantante {
    nome = "Fabrizio De Andre";

    comeMiChiamo () {
        console.log(this.nome);
    }
}
 var c = new Cantante();
 c.comeMiChiamo (); // Fabrizio De Andre

 // ----- GETTERS E SETTERS ----- //

class Cantante {
    constructor(canzone) {
        this.canzone = canzone;
    }
    get canzone () {
        return this._canzone;
    }
    set canzone (canzone) {
        if (canzone === "Bollicine") {
            console.log("Vasco Rossi");
            this._canzone = "bollicine";
        }else {
            this.canzone = canzone;
        }
    }
}

var c = new Cantante ("Fabrizio");

c.canzone = "Bollicine";
console.log(c.canzone); // Vasco Rossi, bollicine

c.canzone = "Vado al massimo";
console.log(c.canzone); // Vado al massimo

c._canzone = "Bollicine";
console.log(c.canzone); // Bollicine
