var a = prompt('Введите ваш пароль', '0');
if (a == 9583 || a == 1747) {
    document.write('Доступны модули баз A,B и C');
} else
if (a == 3331 || a == 7922) {
    document.write('Доступны модули баз B и C');
} else
if (a == 9455 || a == 8997) {
    document.write('Доступны модули базы C');
} else {
    document.write('Ошибка');
}