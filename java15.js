var counter= prompt('Введите число');
var factorial = 1; k=2;
document.write("Факториал числа" + counter + "! =");
do{
    if(counter == 0){
        factorial = 1;
        break;
    }
    if(counter==1){
        factorial = 1;
        break;
    }
    factorial = factorial*k;
    console.log(factorial);
    k++;
    counter--;
}
while (counter > 1);
    document.write(factorial);
