// Your code here.
function isEven(num){
if (num == 0){
return 'Even'
}else if(num ==1) {
return 'Odd'
}else {
	isEven(num-2) 
}
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
