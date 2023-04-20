function escribir(id)
{
   var text = document.getElementById(id);
   var str = text.innerHTML;

   text.innerHTML = "";

   var speed = 45;
   var i = 0;

   function typeWriter()
   {
    if(i < str.length)
    {
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
   }

   setTimeout(typeWriter, speed);
}