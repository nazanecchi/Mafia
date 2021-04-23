let usuario1 = document.getElementById('subtexto1'); //variable nombreUsuario1 es un h1 vacio
let usuario2 = document.getElementById('subtexto2'); //variable nombreUsuario1 es un h2 vacio
let usuario3 = document.getElementById('subtexto3'); //variable nombreUsuario1 es un h3 vacio
let usuario4 = document.getElementById('subtexto4'); //variable nombreUsuario1 es un h4 vacio
let usuario5 = document.getElementById('subtexto5'); //variable nombreUsuario1 es un h5 vacio
let usuario6 = document.getElementById('subtexto6'); //variable nombreUsuario1 es un h6 vacio
let usuario7 = document.getElementById('subtexto7'); //variable nombreUsuario1 es un h7 vacio
let usuario8 = document.getElementById('subtexto8'); //variable nombreUsuario1 es un h8 vacio
let usuario9 = document.getElementById('subtexto9'); //variable nombreUsuario1 es un h9 vacio

if((localStorage.getItem("nombreUsuario1")) != null){           //si existe el primer usuario en local
    usuario1.innerHTML = localStorage.getItem("nombreUsuario1");     //le doy el valor que le corresponde al usuario

        if((localStorage.getItem("nombreUsuario2")) != null){           //si existe el primer usuario en local
            usuario2.innerHTML = localStorage.getItem("nombreUsuario2");     //le doy el valor que le corresponde al usuario

            if((localStorage.getItem("nombreUsuario3")) != null){           //si existe el primer usuario en local
                usuario3.innerHTML = localStorage.getItem("nombreUsuario3");     //le doy el valor que le corresponde al usuario

                if((localStorage.getItem("nombreUsuario4")) != null){           //si existe el primer usuario en local
                    usuario4.innerHTML = localStorage.getItem("nombreUsuario4");     //le doy el valor que le corresponde al usuario

                    if((localStorage.getItem("nombreUsuario5")) != null){           //si existe el primer usuario en local
                        usuario5.innerHTML = localStorage.getItem("nombreUsuario5");     //le doy el valor que le corresponde al usuario

                        if((localStorage.getItem("nombreUsuario6")) != null){           //si existe el primer usuario en local
                          usuario6.innerHTML = localStorage.getItem("nombreUsuario6");     //le doy el valor que le corresponde al usuario

                          if((localStorage.getItem("nombreUsuario7")) != null){           //si existe el primer usuario en local
                            usuario7.innerHTML = localStorage.getItem("nombreUsuario7");     //le doy el valor que le corresponde al usuario

                            if((localStorage.getItem("nombreUsuario8")) != null){           //si existe el primer usuario en local
                              usuario8.innerHTML = localStorage.getItem("nombreUsuario8");     //le doy el valor que le corresponde al usuario

                              if((localStorage.getItem("nombreUsuario9")) != null){           //si existe el primer usuario en local
                                usuario9.innerHTML = localStorage.getItem("nombreUsuario9");     //le doy el valor que le corresponde al usuario
                              }else {                                                        //si no existe
                                usuario9.innerHTML = localStorage.getItem("nombre");   //le asigno el nombre que pedi anteriormente
                                localStorage.setItem("nombreUsuario9", usuario9.innerHTML);     //lo guardo en el local
                                }
                            }else {                                                        //si no existe
                              usuario8.innerHTML = localStorage.getItem("nombre");   //le asigno el nombre que pedi anteriormente
                              localStorage.setItem("nombreUsuario8", usuario8.innerHTML);     //lo guardo en el local
                              }
                          }else {                                                        //si no existe
                            usuario7.innerHTML = localStorage.getItem("nombre");   //le asigno el nombre que pedi anteriormente
                            localStorage.setItem("nombreUsuario7", usuario7.innerHTML);     //lo guardo en el local
                            }
                        }else {                                                        //si no existe
                          usuario6.innerHTML = localStorage.getItem("nombre");   //le asigno el nombre que pedi anteriormente
                          localStorage.setItem("nombreUsuario6", usuario6.innerHTML);     //lo guardo en el local
                          }
                    }else {                                                        //si no existe
                        usuario5.innerHTML = localStorage.getItem("nombre");   //le asigno el nombre que pedi anteriormente
                        localStorage.setItem("nombreUsuario5", usuario5.innerHTML);     //lo guardo en el local
                        }
                }else {                                                        //si no existe
                    usuario4.innerHTML = localStorage.getItem("nombre");   //le asigno el nombre que pedi anteriormente
                    localStorage.setItem("nombreUsuario4", usuario4.innerHTML);     //lo guardo en el local
                    }
            }else {                                                        //si no existe
                usuario3.innerHTML = localStorage.getItem("nombre");   //le asigno el nombre que pedi anteriormente
                localStorage.setItem("nombreUsuario3", usuario3.innerHTML);     //lo guardo en el local
                }
        }else {                                                        //si no existe
            usuario2.innerHTML = localStorage.getItem("nombre");   //le asigno el nombre que pedi anteriormente
            localStorage.setItem("nombreUsuario2", usuario2.innerHTML);     //lo guardo en el local
            }
}else {                                                        //si no existe
    usuario1.innerHTML = localStorage.getItem("nombre");   //le asigno el nombre que pedi anteriormente
    localStorage.setItem("nombreUsuario1", usuario1.innerHTML);     //lo guardo en el local
}
