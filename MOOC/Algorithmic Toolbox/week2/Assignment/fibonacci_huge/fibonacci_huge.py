# Uses python3
import sys

def get_fibonaccihuge(n, m):
   '''
    pisano period
    n mod pisano.lenght = reminder
    fibonanic mod del reminder
   '''

input = input();
n, m = map(int, input.split())
print(get_fibonaccihuge(n, m))
