// Step 1
var animal = {};
animal.species = 'Duck';
animal['name'] = 'Donald';
animal.noises = []; 
console.log(animal);
// Step 2
var noises = [];
noises[0] = "quack";
noises.push("QUACK");
noises.unshift("QUACKQUACK");
noises[noises.length] = "QuackQuackQuack";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
// Step 3
animal["noises"] = noises;
animal["noises"].push("Im a Duck");
console.log(animal);
// Step 6
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var bunny = { species: 'Bunny', name: 'Bugs', noises: ['Carrots!', 'Silly Rabbit', "How's it going Doc?"]};
var coyote = { species: 'Coyote', name: 'Wile E.', noises: ['Gunna catch that bird!', 'Aww!']};
animals.push(bunny);
animals.push(coyote);
console.log(animals);
console.log(animals.length);
// Step 7
var friendsList = []; // Array for List of Friends
var friends = friendsList;
function randomAnimal(){
    return animals[Math.floor(Math.random()*animals.length)];
}
friends.push(randomAnimal());
console.log(friends);
coyote.friends = friends;
console.log(coyote);

function search(name){
    for(var i = 0; i < animals.length; i++){
        if (animals[i].name === name) {
            return animals[i];
        }
    }
    return null;
}

function edit(name, object){
    for(var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals[i] = object;
        }
    }
}

function remove(name){
    for(var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals.splice(i, 1);
        }
    }
}
function create(object){
    if (object.name.length > 0 && object.species.length > 0){
        for(var i = 0; i < animals.length; i++){
            if (object.name === animals[i].name){
                console.log("Name already exists!");
                return;
            } else animals.push(object);
        } 
    } 
}