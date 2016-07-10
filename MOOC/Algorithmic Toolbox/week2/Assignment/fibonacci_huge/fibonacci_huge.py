# Uses python3
import sys

def get_fibonacci_mod(n, m):
    if (n <= 1):
        return n
    f= [0,1]

    for i in range(2,n + 1):
        f.append((f[i-1] + f[i-2])%m)
    return f.pop()

def calculate_pisano_period(n, m):
    if (n <= 1):
        return n
    f= [0,1]

    for i in range(2,n + 1):
        temp = (f[i-1] + f[i-2]) % m

        if( temp == 1 and f[len(f) - 1] == 0):
            return len(f[:-1])
        f.append(temp)



def get_fibonaccihuge(n, m):
    # pisano period
    pisano_period = calculate_pisano_period(n, m)
    # n mod pisano.lenght = reminder
    reminder = n% pisano_period
    # fibonanic mod of reminder
    return get_fibonacci_mod(reminder, m)



input = input();
n, m = map(int, input.split())
print(get_fibonaccihuge(n, m))
