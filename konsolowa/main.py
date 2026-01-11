import random

class OperacjeNaTablicach: 
    def __init__(self, rozmiar_tablicy: int):
        self.__rozmiar_tablicy = rozmiar_tablicy
        self.__liczby = [random.randint(a=1, b=1000) for _ in range(rozmiar_tablicy)] 
    
    def wyswietl_elementy(self):
        for i in range(self.__rozmiar_tablicy):
            print(f"{i}: {self.__liczby[i]}")

    def znajdz_pierwszy(self, szukana_liczba):
        for i in range(self.__rozmiar_tablicy):
            if szukana_liczba == self.__liczby[i]: 
                return i
            
        return -1  
    
    def wypisz_nieparzyste(self):
        ilosc = 0
        for liczba in self.__liczby:
            if liczba % 2 == 1:
                print(liczba)
                ilosc += 1

        return ilosc
# **********************************************
# nazwa metody: srednia
# opis metody: liczy srednia arytmetyczna tablicy __liczby i ja zwraca
# parametry: brak
# zwracany typ i opis: float, zwraca srednia arytmetyczna
# autor: æ
# ***********************************************
    def srednia(self):
        suma = 0
        for liczba in self.__liczby:
            suma += liczba

        return suma / self.__rozmiar_tablicy

if __name__ == '__main__': 
    operacje = OperacjeNaTablicach(21)
    operacje.wyswietl_elementy()
    
    wyszukany_indeks = operacje.znajdz_pierwszy(42)

    if wyszukany_indeks != -1:
        print(f"Wyszukany indeks: {wyszukany_indeks}")

    liczba_nieparzystych = operacje.wypisz_nieparzyste()
    print(f"Ilość liczb nieparzystych: {liczba_nieparzystych}") 

    srednia = operacje.srednia()
    print(f"Średnia arytmetyczna tablicy: {srednia}")
      