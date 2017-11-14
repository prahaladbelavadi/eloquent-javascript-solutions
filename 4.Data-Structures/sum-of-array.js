// Your code here.
function range(start, end, step){
var arr = [];
  if(step == null){
    for (var i = start;i < end;i++){
	arr.push(i)
	return arr
	}
  }else if(step < 0){
    for (var i = start;i < end;i=i-step){
	arr.push(i)
	return arr
	}
  }
  else{
  for (var i = start;i < end;i=i+step){
	arr.push(i)
	return arr
		}
	}
}  
function sum(x){
var su = 0;
  for (var i; i < x.length; i++){
	su = su + i;
	}
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
