function add(a, b){
  return a+b;
}

console.log(add(3,5));

var toAdd = [9, 5];
add(toAdd[0], toAdd[1]);

console.log(add(...toAdd));

var groupA = ['Juan', 'JC', 'John'];
var groupB = ['Guzman'];

var finalArray = [3, ...groupA];

console.log(finalArray);

//Challenge
var jcGuzman = ['JC', '26'];
var jhenCudia = ['Jhen', '25'];

function greet(name, age){
  console.log('Hi '+name+', you are '+age);
}

greet(...jcGuzman);
greet(...jhenCudia);

finalArray.forEach(function greet(name) {
  console.log('Hi '+name);
});
