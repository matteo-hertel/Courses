# Uses python3

def get_fibonacci_mod(n, m):
    if (n <= 1):
        return n
    f= [0,1]

    for i in range(2,n + 1):
        f.append((f[i-1] + f[i-2])%m)
    return f.pop()

def calculate_pisano_period(m):
    f0 = 0
    f1 = 1

    count = 0
    while True:
        temp = (f0 + f1) % m
        count += 1
        if( temp == 1 and f1 == 0):
            return count
        f0 = f1
        f1 = temp
        
    #return f


def get_fibonaccihuge(n, m):
    if(m > n):
        return get_fibonacci_mod(n, m)

    # pisano period
    pisano_period = calculate_pisano_period(m)

    # n mod pisano.lenght = reminder
    reminder = n % pisano_period
    # fibonanic mod of reminder
    return get_fibonacci_mod(reminder, m)



input = input();
n, m = map(int, input.split())
print(get_fibonaccihuge(n, m))
