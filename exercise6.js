//Evaluate these:
//#1
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //a: 5
const object2 = object1; //a:5
const object3 = object2; // a:5
const object4 = { a: 5}; //a:5
object1.a = 4; //all but obj4 a:4
//Correct

//On a side note, this pass by reference principle applies to arrays as well 

//example (created by me not andrei): 

const pets = ['dog', 'cats', 'goat']

const listPets = pets;

listPets.push('lion');

console.log('pets', pets)
console.log('listPets', listPets)

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
    }
    sound(){
        console.log(`MOOOO Hi my name is ${this.name} I am a ${this.type} and my color is ${this.color} `)
    }
}

const cow = new Mamal ('Betty', 'Cow', 'Spotted')

cow.sound()