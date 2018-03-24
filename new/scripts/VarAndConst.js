var value = 5;
value = 12.33;
value = 'String';

value = false;
if (value) {
    alert('True');
} else {
    alert('False');
}

var empty;

alert(empty);

alert(1/0);

var obj = {
    name: 'Имя',
    age: 15,
    sex: 'Male'
}

alert(obj.name);

var CONST_VALUE = 10;
CONST_VALUE = 1; // серьезно, нет никакой фиксации константы, даже FINAL не сделают
alert(CONST_VALUE);
CONST_VALUE = 2;
alert(CONST_VALUE);
//Задания
var admin;
var name;
name = 'Василий';
admin = name;
alert(admin);
