function add (n1, n2)
{
    console.log(n1 + n2);
    
}
add(1 , 3)
add("baji" , "shaik")

function add1 (n1, n2)
{
    //console.log(n1 + n2);
    return n1 + n2
}
console.log(add1(10,20))

function multiple (n1, n2)
{
    //console.log(n1 + n2);
    return n1 * n2
}
console.log(multiple(10,20))
console.log(multiple("ba" , "bu"))


// want to store return value 

let a = function returnFN (n1, n2)
{
    //console.log(n1 + n2);
    return n1 * n2
}
// console.log(returnFN(10,20))   -- need to call variable only here as we are storing function value into a variable 

let b = function returnFN1 (n1, n2)
{
    //console.log(n1 + n2);
    return n1 * n2 
}
console.log(b (20,20))

