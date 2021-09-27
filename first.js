// var n = "This is CS50"
// console.log(n.toUpperCase())
// console.log(n.toLowerCase())
// console.log(n.split(" "))
// console.log(n.indexOf("is"))

// var n = 10
// var result = Math.random()*6;
// var ran = Math.round(result);
// console.log(ran)

// var array = [10,20,30,40];

// insert a value
// array.push(50);
// console.log(array)

// delete a value

// array.pop()

// console.log(array)

// array.shift(10)

// console.log(array)

// array.unshift(5)

// console.log(array)

function sumArray(array)
{
    var sum = 0,i;
    var l = array.length;
    for(i=0; i<l; i++){
        sum += array[i]; 
    }
    return sum;
}

var array = [10,20,30];
var sum = sumArray(array);
console.log(sum);

