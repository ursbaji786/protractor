let input = "baji"

console.log( input.toUpperCase() )

for ( var i = 0 ; i <input.length ; i++)
{
   var output = ""
    if (i%2 != 0)
    {
output = output + input[i].toUpperCase();
//console.log(output);

    }
    else
    output = output + input[i].toLowerCase();

    

}
console.log(output);

