
var str = "baji"
var newStr = ""

console.log(length = str.length)

for (var i = length-1; i>=0 ; i--)
{
newStr  = newStr +  str[i]

}
console.log(newStr);


// write as function

function reverseString(inputStr)
{

var newString = ""
for( var i = inputStr.length -1 ; i >=0 ; i--)
{
    newString = newString + inputStr [i]
}
console.log(newString);


}
reverseString("shaik")



