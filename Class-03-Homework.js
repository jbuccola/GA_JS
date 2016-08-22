/* 
Assignment 1: 99 Bottles of Beer
Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
If you're unfamiliar with the song, you can find the lyrics here: http://www.99-bottles-of-beer.net/lyrics.html
Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer"). 
*/
var beersLeft
for (var i=99;i > -1; --i) {
    beersLeft = i - 1;
    if (i > 1) {
        console.log(i + " Bottles of beer on the wall, " + i + " bottles of beer.\n Take one down and pass it around, " + beersLeft + " bottles of beer on the wall.");
    }
    else if (i === 1) {
        console.log(i + " Bottle of beer on the wall, " + i + " bottle of beer.\n Take one down and pass it around, no more bottles of beer on the wall.");
    }
    else if (i === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.\n go to the store and buy some more, no more bottles of beer on the wall.");
    }
} 


/* 
Assignment 2: Random Address Generator
Write a script that can generate random addresses
As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
Your script should randomly select one item from each of these arrays and then use them to construct a random address
Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
node random-address.js
=> 34578 Dolphin Street, Wonka NY, 44506
*/

var streetNumbers = [];
var zipCodes = [];
var streetNames = [
    "Sheard Trail North",
    "Want Avenue Northeast",
    "Northwest Anamor Grove",
    "Corporate Grove Parkway",
    "Northwest Lee Jay",
    "North Mereoak Mall",
    "Tembrook Road",
    "Northwest Tree Side Plaza",
    "North Horsegrove Causeway",
    "Shalstone Knoll"];
var cityNames = [
    "Venedy",
    "Trujillo Alto",
    "Hildreth",
    "Theodore",
    "Gilson",
    "Twin Falls",
    "Jupiter Island",
    "Maceo",
    "Claypool Hill",
    "Fairwood"]
var stateNames = ["CA", "MN", "WA", "NY", "WY", "TX", "OK", "NM", "ND", "FL"]

for (var i = 0; i < 11; ++i) {
    streetNumbers.push(Math.floor((Math.random()*(Math.random()*100000))))
    zipCodes.push(Math.floor(Math.random()*90000)+10000)
}
var snumb = streetNumbers[Math.floor(Math.random()*10)] + " "
var streetname = streetNames[Math.floor(Math.random()*10)] + ", "
var zc = ", " + zipCodes[Math.floor(Math.random()*10)]
var cn = cityNames[Math.floor(Math.random()*10)] + " "
var statename = stateNames[Math.floor(Math.random()*10)]

console.log("\n" + snumb + streetname + cn + statename + zc)

