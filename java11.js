var listType = prompt("Введите '1'- тектовое поле, '2' -  кнопка , '3' - radio")
    var a= prompt("Введите кол-во тегов");
    listType=parseInt(listType);
        for( var i=0;i<a;i++)
        if(listType=='1')
        document.write('<input type="text">');
    else for(var i=0;i<a;i++)
        if(listType=='2')
          document.write('<input type="button">');
        else for(var i=0;i<a;i++)
        if(listType=='3')
          document.write('<input type="radio">');