// reverse string
let string = 'Welcome to this JavaScript Guide!';
let split = string.split("");
let reverse = split.reverse();
let join = reverse.join('');

console.log(join);

//fizzbuzz challenge
// let output = [];
// let count = 1;

function fizzBuzz(){
    let output = [];
    for(count=0; count<101; count++){

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzBuzz");
    }
    if (count % 3 === 0) {
        output.push("fizz");
    } 
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }}

    console.log(output);
};
//anagrams

function anagram(a, b){
    let string1 = a.length;
    let string2 = b.length;
    if(string1 != string2){
        alert('invalid');
        return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
        console.log('True');
    } else {
        console.log('False');
    }
};
