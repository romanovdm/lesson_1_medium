var num = 33721;
	multiplier = 1; //переменная для произведения
	a = 0;//переменная старта отчёта
	
num = String(num);
var i = num.length;


while (i) {
  multiplier = multiplier * num[a];
  a++;
  i--
}

 var kvest = Math.pow(multiplier, 3);
 kvest = String(kvest);

alert(kvest[0] + kvest[1]);