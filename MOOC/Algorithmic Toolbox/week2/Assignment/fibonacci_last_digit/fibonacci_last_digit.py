# Uses python3
import sys

def get_fibonacci_last_digit(n):
    if (n <= 1):
        return n
    f= [0,1]

    for i in range(2,n + 1):
        f.append((f[i-1] + f[i-2])%10)
    return f.pop()

n = int(input())
print(get_fibonacci_last_digit(n))
