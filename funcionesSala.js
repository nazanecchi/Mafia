let nombreUsuario1 = document.getElementById('subtexto1');
let nombreUsuario2 = document.getElementById('subtexto2');
let nombreUsuario3 = document.getElementById('subtexto3');
let nombreUsuario4 = document.getElementById('subtexto4');
let nombreUsuario5 = document.getElementById('subtexto5');
let nombreUsuario6 = document.getElementById('subtexto6');
let nombreUsuario7 = document.getElementById('subtexto7');
let nombreUsuario8 = document.getElementById('subtexto8');

alert(nombreUsuario1.innerHTML);
if(nombreUsuario1.innerHTML== ''){
  nombreUsuario1.innerHTML =localStorage.getItem("nombre");
}
else
if(nombreUsuario2.innerHTML== 'VACIO'){
  nombreUsuario2.innerHTML =localStorage.getItem("nombre");
}
else
if(nombreUsuario3.innerHTML== 'VACIO'){
  nombreUsuario3.innerHTML =localStorage.getItem("nombre");
}
else
if(nombreUsuario4.innerHTML== 'VACIO'){
  nombreUsuario4.innerHTML =localStorage.getItem("nombre");
}
else
if(nombreUsuario5.innerHTML== 'VACIO'){
  nombreUsuario5.innerHTML =localStorage.getItem("nombre");
}
else
if(nombreUsuario6.innerHTML== 'VACIO'){
  nombreUsuario6.innerHTML =localStorage.getItem("nombre");
}
else
if(nombreUsuario7.innerHTML== 'VACIO'){
  nombreUsuario7.innerHTML =localStorage.getItem("nombre");
}
else
if(nombreUsuario8.innerHTML== 'VACIO'){
  nombreUsuario8.innerHTML =localStorage.getItem("nombre");
}
