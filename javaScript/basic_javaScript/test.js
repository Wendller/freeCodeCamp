// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  
  var album = collection[id];

    if (prop != "tracks" && value != "") {
      album[prop] = value;
    } else if (prop == "tracks" && album[prop] == undefined) {
      album[prop] = [];
      album[prop].push(value);
    } else if (prop == "tracks" && value != "") {
      album[prop].push(value);
    } else if (value == "") {
      delete album[prop];
    }
  

  console.log(collection);  
  return collection;
}

updateRecords(5439, "artist", "ABBA");
