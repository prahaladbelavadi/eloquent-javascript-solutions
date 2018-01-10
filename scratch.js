var array = [];
function ran(start,end){
   for (i=start;i<=end;i++){
     array.push(i);
   }
   return array;
}
ran(5,10);

var tot = 0;
function su(arr){
for(i in arr.length){
      tot = tot+arr[i];
  }
  return tot;
}

su(ran(5,10))
