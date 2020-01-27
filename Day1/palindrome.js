function reverseString(inputStr)
{

var newString = ""
for( var i = inputStr.length -1 ; i >=0 ; i--)
{
    newString = newString + inputStr [i]
}
console.log(newString);
if (inputStr == newString)
{
    console.log("given string is palindrome");
    
}
else
console.log("given string is NOT palindrome");

}
reverseString("shaik")


