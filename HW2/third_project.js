// Reverse function
console.log(rvrs("pops"))
function rvrs(word){
return word.split("").reverse().join(""); 
}


// Polindrome function
function polindrome(name){
return name === name.split("").reverse().join(""); 
}
console.log(polindrome ("wow"))


// вивести тільки парні числа з масиву, вивести в зворотньому порядку
function pairedNums(numbers){
return numbers.filter(numbers => numbers % 2 === 0).reverse();
}
console.log(pairedNums([1,2,3,4,5,6,7,8,9,10]));

