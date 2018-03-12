class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        
        this.tytul = tytul
        this.autor = autor
        this.przeczytana = przeczytana
    };
    
    opiszKsiazke() {
        var description;
        if(this.przeczytana == true){
        return description = ('Książka ma tytuł ' + this.tytul + ' autorem jest ' + this.autor + ' i została przeczytana.')
        }else {
        return description = ('Książka ma tytuł ' + this.tytul + ' autorem jest ' + this.autor + ' i NIE została przeczytana.' )   
        }    
    };
    
};

var wiedzmin = new Ksiazka('Wiedzmin', 'Andrzej Sapkowski', true);
var mrocznaWieza = new Ksiazka('Mroczna Wieża', 'Stephen King', false);
var lordOfTheRing = new Ksiazka('The Lord of the Rings', 'J.R.R. Tolkien', true);

console.log(wiedzmin.opiszKsiazke());


var ksiazki = [wiedzmin, mrocznaWieza, lordOfTheRing];


function iloscPrzeczytanych(ksiazki) {
    var suma = 0;
    var przeczytanych;
    ksiazki.forEach(function(element){   
        console.log(element.opiszKsiazke());
        if(element.przeczytana == true) {
        suma++      
      };      
    });
   return przeczytanych = ('Łącznie przeczytanych książek: ' + suma);
};

console.log(iloscPrzeczytanych(ksiazki));






