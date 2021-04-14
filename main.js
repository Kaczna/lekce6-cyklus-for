// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS

let cisla = [];

for (let i = 0; i <= 10; i = i + 1) {
cisla.push(i);
}

console.log(cisla);

//WHILE CYKLUS 1. příklad

let a = 0;

while(a <= 10) {
    a++;
}

console.log('while ' + cisla);



// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS <=

let cislaDruhyPriklad = [];

for (let i = 0; i <= 10; i = i + 1) {
    cislaDruhyPriklad.push(i);
    }

    console.log(cislaDruhyPriklad);

        //WHILE CYKLUS 2. příklad <=

            let b = 0;

            while(b <= 10) {
            b++;
            }

            console.log('while ' + cislaDruhyPriklad);

//TADY NAPIS CYKLUS <


let cislaDruhyPrikladB = [];

for (let i = 0; i < 10; i = i + 1) {
    cislaDruhyPrikladB.push(i);
    }

    console.log(cislaDruhyPrikladB);

        //WHILE CYKLUS 2. příklad <
        
            let c = 0;

            while(c < 10) {
            c++;
            }

            console.log('while ' + cislaDruhyPrikladB);



// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

let cislaTretiPriklad = [];
for (let i = 10; i >= 0; i = i - 1) {
    cislaTretiPriklad.push(i);
    }
    
    console.log(cislaTretiPriklad);

    //WHILE CYKLUS 3. příklad 
   

        let i = 10;

        while(i >= 0) {
        i--;
        }

        console.log('while ' + cislaTretiPriklad);




