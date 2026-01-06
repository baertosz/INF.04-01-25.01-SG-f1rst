import random

class OperacjeNaTablicach: 
    def __init__(self, rozmiar_tablicy: int):
        self.__rozmiar_tablicy = rozmiar_tablicy
        self.__liczby = [random.randint(a=1, b=1000) for _ in range(rozmiar_tablicy)] 
        print(self.__liczby)

if __name__ == '__main__':
    operacje = OperacjeNaTablicach(5)
#pola/konstruktor √#
    
