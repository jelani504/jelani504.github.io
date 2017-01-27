console.log('hello');
function objectValues(object){
    return Object.values(object);
}
function keysToString(object){
    return Object.keys(object).join(" ");
}
function valuesToString(object){
    var propArray = [];
    for (var prop in object){
        if(typeof object[prop] === 'string'){
            propArray.push(object[prop]);
        }
    }
    return propArray.join(" ");
}
function arrayOrObject(arg1){
    if (Array.isArray(arg1)){
        return 'array';
    } else if (typeof(arg1) === 'object')
        return 'object';
}
function capitalizeWord(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function capitalizeAllWords(string){
    var capArray = string.split(" ");
    var finArray = [];
    for(var i = 0; i < capArray.length; i++){
        finArray.push(capArray[i].charAt(0).toUpperCase() + capArray[i].slice(1));
    } 
    
    return finArray.join(" ");
}
function welcomeMessage(object){
    return "Welcome " + object.name.charAt(0).toUpperCase()+ object.name.slice(1) + "!";
}
function profileInfo(object){
    return object.name.charAt(0).toUpperCase()+ object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase()+ object.species.slice(1);
}
function maybeNoises(object){
    if(Array.isArray(object.noises) && object.noises.length > 0){
        return object.noises.join(" ");
    } else return "there are no noises";
}
function hasWord(string, word) {
  return string.split(' ').some(function(w){return w === word})
}
function addFriend(name, object) {
  object.friends.push(name);
  return object;
}
function isFriend(name, object) {
 if(Array.isArray(object.friends)){
 for(var i = 0; i < object.friends.length; i++){
   if(object.friends[i] === name){
     return true;
   }
 }
 }return false;
}
function updateObject(object, key, value){
  object[key] = value;
  return object;
}
function removeProperties(object, array){
  for(var i = 0; i < array.length; i++){
    if(object.hasOwnProperty(array[i])){
      delete object[array[i]];
    } 
  } return object;
}
function nonFriends(name, list){
    var nonList = [];
    var myFriends;
    //loop over list to find out who your friends are and save them
    for(var i = 0; i<list.length; i++) {
     if(list[i].name === name){
         myFriends = list[i].friends
     }    
    }  
    //loop again and check those friends to see if anyone else is not in there...if they arent make them your firnd by pushing em
    for(var j = 0; j<list.length; j++) {
        if(!myFriends.includes(list[j].name) && list[j].name !== name){
              nonList.push(list[j].name);  
            }   
        }
    
    return nonList;
}

function dedup(array) {
    var newArray = [];
    var myObject = {};
    for(var i = 0; i < array.length; i++){
        myObject[array[i]] = array[i]; 
    }
 
 return Object.values(myObject);
 
}