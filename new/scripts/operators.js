var x = 1;

x = -x;
alert(x);
alert('abs' + '1');
alert(typeof(true - x));
alert(typeof(2.2 - x));


// Задачка
var a = 1, b = 1, c, d;

c = ++a;
alert(c);
d = b++;
alert(d);
alert(a);
alert(b);

var a = 2;

var x = 1 + (a *= 2); //вроде должно быть 5
alert(x);
