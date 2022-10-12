console.log("Hello World!")

// declaracion
var name = "athalie"
// declaracion + inicializacion
var count = 0
// asignacion
count = 3
// count = count + 4
// operadores ++, +=, --, -=, *=, /=, %=
count += 4
count *= 3
// interpolacion
console.log(`count ${count}`)

// comparacion i<3
// i++ ==> i = i + 1
for(var i=0; i<3; i++){
    console.log(`step ${i+1}`)
}

// i+=2 ==> i = i + 2
for(var i=0; i<8; i+=2){
    // i<8 comparison
    //if, else if, else ==> branching
   if (i < 4) console.log(`step ${i} < 4`)
   else if (i < 6) console.log(`step ${i} < 6`)
   else console.log(`step ${i} >= 6`)
}

for(var i=0; i<8; i++){
    if (i%2==0) console.log(`even ${i}`)
    else console.log(`odd ${i}`)
}

// four ways to write a function
// functions are also call lamdas
function nonzeroprime(i) {
    console.log("non zero prime: " + i)
}
var nonzeroprime2 = function() {
    console.log("non zero prime")
}
var nonzeroprime3 = () => {
    console.log("non zero prime")
}
var nonzeroprime4 = () => console.log("non zero prime")

for(var i=0; i<5; i++){
   switch(i) {
        case 0: {
            console.log("zero") 
            break
        }
        //case 1: console.log("one"); break
        case 2: nonzeroprime(i); break
        case 3: nonzeroprime(i); break
        default: console.log("other"); break
   }
}
