var x =prompt('Введите число') ;
var y = prompt('Введите степень');
counter =1;
chislo=x;
while(chislo<x**y){
    chislo=x**y;
    counter=counter+1
}
alert(chislo);