//Extract the last four characters from the string below;
//"extravaganza"
let x ="extravangaza";
var lastfour= x.slice(-4);
console.log(lastfour);


//Insert the following string at the fourth index of the below variable:
//"eat"//const food = "The quick fox jumped over the lazy dog"
const food=("The quick for jumped over the lazy dog");
const meal="eat"
const time=food.slice(0,4) +"eat"+food.slice(4)
console.log(time)


//Count how many times the following string appears in the string variable:1. "the"2.
//"brown"const story= "The quick brown fox jumps over the lazy dog"

const story ="The quick brown fox jumps  over the lazy dog"
const put = (story.match(/the/g) || []).length;
console.log(put)
const put1 = (story.match(/brown/g) || []).length;
console.log(put1)

//Using JavaScript, find the following words from the following strings:
//1."are"
//const string1 = "The pupils are reading in the library";
//2. "sitting"
//const string2 = "The child was sitting on the table before it fell"
const string1="The pupils are reading in the library";
const baby=string1.search("are")
console.log(baby)
const string2="The child was sitting on the table before it fell"
const baby2=string2.search("sitting")
console.log(baby2)

//Convert the following strings into the specified format:
//1. UpperCase: "wonderful"
//2. LowerCase: "amazing", "UndERneath"
//3. Title case "A wonderful world"

const text1="wonderful"
const text=text1.toUpperCase()
console.log(text)

const text2="amazing"
const out=text2.toLowerCase()
console.log(out)

const text3="undERneath"
const message=text3.toLowerCase()
console.log(message)

