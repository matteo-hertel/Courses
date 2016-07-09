# Uses python3
import sys

def gcd(a, b):

    if (b == 0):
        return a;

    prime = int(a%b);
    return gcd(b, prime)
    

input = input()
a, b = map(int, input.split())
print(gcd(a, b))

