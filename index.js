const names=["Mike", "James", "Link", "Amanda"]
for (let name of names ){
    console.log(name + " Walks");
}

for (let name of names){
    const person = {
        name: name,
        talk(){
            console.log(this.name + " is talking");
        }
    };
    const talk = person.talk.bind(person);
    talk();
}

const square = number => number ** 2
console.log(square(5))


const tripleSquare = (number1, number2)=>{
    return (number1 **2 +" "+ number2**3)
}
 console.log(tripleSquare(2,3))

const colors = ["red", "yellow", "blue", "green"];
const items = colors.map(color => 
    `<li>${color}</li>`
    );
console.log(items)

// Destructuring
const address = {
    street: 'Badore',
    city: '',
    country: ''
};

// Instead of this:
// const street = address.street;
// const city = address.city;
// const country = address.country;

//Do this:
const {street, city, country} = address

// To give the attributes new var names:
const {street: newVarName} = address
console.log(newVarName)


// Joining multiple arrays
const first = [1, 2, 3]
const second = [4, 5, 6]

// Old way
const combined = first.concat(second)
console.log(combined)

// New Way using the spread operator
const combinedTwo = [...first, ...second];
console.log(combinedTwo)

// classes
class CoolPerson {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    walk(){
        console.log(this.name + " is walking and is " + this.age +" years old.")
    }
}

const person =  new CoolPerson("Tope", 23).walk();

console.log(person)