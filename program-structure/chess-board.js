var num = 8;
var str = "";
for (var y = 0;y < num ;y++){
	for (var x = 0;x < num ; x++){
		if ((x+y)%2==0){
		str =str+" ";
		}
		else{
			str=str+"#";
		}
  	};
	str = str + "\n"
};
console.log(str)
