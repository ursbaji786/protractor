function greatestNumber (n1,n2,n3)
{
if (n1>n2 && n1 > n3)
{
    console.log(n1);
}

if ( n2 > n3 && n2 > n1) {
    console.log(n2);
} else {
    console.log(n3);
} 


}
greatestNumber(20,10,36)

function tables(n) {

for(let i =1; i<=10; i++)
console.log(`${n} * ${i} = ${n*i}` )

}
tables(2)


var str = "welcome to testleaf"
var newStr = ""
console.log(str.length)
console.log(str.split(' ').length)
// reverse the string
for(var i = str.length -1 ; i >= 0; i --)
{
    newStr = newStr + str[i] 
}
console.log(newStr);







