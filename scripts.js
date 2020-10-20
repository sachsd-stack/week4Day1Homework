// 3
var song = {
    "title":"All Star",
    "year":2001,
    "genre":["Alternative rock", "Power pop", "Pop"]
};

var band = {
    "name":"Smash Mouth",
    "formedIn":1994,
    "popularSongs":["Walkin' on the Sun", "All Star", "Then The Morning Comes"]
};

var phone = {
    "model":"moto z4",
    "storageSpace":128,
    "carrier":["AT&T", "Sprint", "T-Mobile", "Verizon"]
};

// 4
console.log(song.genre);
console.log(band.formedIn);
console.log(phone.model);

// 5
let numberArray = [20,43,75];

function logEveryArrayValue(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

logEveryArrayValue(numberArray);

