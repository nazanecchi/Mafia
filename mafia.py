import random

cantidadJugadores = 10
cantidadMafias = 3
cantidadCiudadanos = 3
cantidadCarniceros = 1
cantidadLocos = 1
cantidadCuranderos = 1
cantidadPolicias = 1

#La lista tiene tu ID y si estas vivo o muerto
'''
La lista esta ordenada de la siguiente manera
Mafias
Policia
Carnicero
Curandero
Loco
Ciudadanos
'''

def crearListaRango(cantidadMafias, cantidadCiudadanos, cantidadCarniceros, cantidadLocos, cantidadCuranderos, cantidadPolicias):
    cJ = cantidadMafias + cantidadCiudadanos + cantidadCarniceros + cantidadLocos + cantidadCuranderos + cantidadPolicias
    lista = []
    n = 0
    i = 0
    for n in range(cantidadMafias):
        lista.append(["Loco", True])
        i += 1
    for n in range(cantidadPolicias):
        lista.append(["Ciudadano", True])
        i += 1
    for n in range(cantidadCarniceros):
        lista.append(["Carnicero", True])
        i += 1
    for n in range(cantidadCuranderos):
        lista.append(["Mafia", True])
        i += 1
    for n in range(cantidadLocos):
        lista.append(["Curandero", True])
        i += 1
    for n in range(cantidadCiudadanos):
        lista.append(["Policia", True])
        i += 1
    return lista

def rand(x):
    return random.sample(x,len(x))

def listaVivos(cJ):
    lista = []
    for i in range(cJ):
        lista.append([i, True])
    return rand(lista)

def masVotado(lista):
    mayor=[0,0]
    for n in range(len(lista)):
        i=0
        for i in range(len(lista)):
            if(lista[i][1]>mayor[1]):
                mayor = lista[i]
    return mayor[0]

def establecerMuerto(lista):
    aux = []
    lista = rand(lista)
    for i in range(len(lista)):
        ban = True
        for n in range(len(aux)):
            if (lista[i] == aux[n][0]):
                aux[n][1] += 1
                ban = False
        if(ban == True):
            aux.append([lista[i], 1])
    return masVotado(aux)

def consultarVivo(lista, jug):
    for i in range(lista):
        if lista[i][0] == jug:
            return lista[i][1]

def matar(lista, muerto):
    for x in range(len(lista)):
        if(lista[x][0]==muerto):
            lista[x][1] = False


def controlPolicial(i, lista):
    for n in range(len(lista)):
        if(lista[n][0] == i):
            if(n<cantidadMafias):
                print("Es un mafia")
            else:
                print("No es un mafia")


def noche(lista):
    i = 0
    aux = []
    for n in range(cantidadMafias):
        if lista[i][1] == True:
            while True:
                cadaver = int(input("Ingrese ID del que quiere matar: "))
                if establecerMuerto(lista, cadaver):
                    aux.append(cadaver)
                    break
                else:
                    print("Esta muerto, intentelo de nuevo")
        i+=1
    for n in range(cantidadPolicias):
        if lista[i][1] == True:
            while True:
                ask = int(input("Ingrese ID del que quiere matar: "))
                if establecerMuerto(lista, ask):
                    controlPolicial(ask, lista)
                    break
                else:
                    print("Esta muerto, intentelo de nuevo")
        i +=1
    for n in range(cantidadCarniceros):
        i += 1
    for n in range(cantidadCuranderos):
        i += 1
    for n in range(cantidadLocos):
        i += 1
    for n in range(cantidadCiudadanos):
        i += 1
    matar(lista, establecerMuerto(aux))
    return lista

def dia(lista):
    posLoco = cantidadMafias + cantidadPolicias + cantidadCarniceros + cantidadCuranderos
    aux = []
    ban = True
    for i in range(len(lista)):
        if(lista[i][1] == True):
            aux.append(int(input("Ingrese ID del usuario al que quiere votar")))
    muerto=establecerMuerto(aux)
    for n in range(len(lista)):
        if(lista[n][0] == muerto):
            if posLoco == n:
                ban = False
                print("Votaron al loco, el loco gana")
    matar(lista, establecerMuerto(aux))
    return [lista, ban]

def terminaJuego(lista):
    posLoco = cantidadMafias + cantidadPolicias + cantidadCarniceros + cantidadCuranderos
    conMafias = 0
    conPueblo = 0
    ban = True
    for i in range(cantidadMafias):
        if lista[i][1] == True:
            conMafias += 1
    for n in range(cantidadMafias, len(lista)):
        if lista[n][1] == True:
            conPueblo +=1
    if(conMafias == 0):
        print("Gano el pueblo")
        ban = False
    if(conMafias > conPueblo):
        print("Gano la mafia")
        ban = False
    return ban

def juego():
    ban = True
    x = listaVivos(10)
    while ban == True:
        print(x)
        night = noche(x)
        print(night)
        day = dia(x)
        print(day[0])
        ban = day[1]
        if ban == True:
            ban = terminaJuego(x)

juego()
