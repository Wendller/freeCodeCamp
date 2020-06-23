// Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  var hasName = false;
  for (var j = 0; j < contacts.length; j++) {
    if (name == contacts[j].firstName) {
      hasName = true;
      break;
    } else {
      hasName = false;
    }
  }

  if (hasName == false) {
    return "No such contact";
  }

  for (var i = 0; i < contacts.length; i++) {
    if (name == contacts[i]["firstName"] && contacts[i][prop] != undefined) {
      return contacts[i][prop];
    } else if (name == contacts[i]["firstName"] && contacts[i][prop] == undefined) {
      return "No such property";
    }
    
  }
  // Only change code above this line
}

const result = lookUpProfile("Kristian", "Coroa");

console.log(result);