var str = "JavaScript";
var i = 0;
var temp = 0;

while(str[i] != null){
    i++;
}

var len = i;
// while(i > 0){
//     console.log(str[i-1]);
//     i--;
// }

for (i=0 ; i<len; i++){
    temp = str[i];
    str[i] = str[len-1];
    str[len-1] = temp;
    len--;
}
console.log(str);