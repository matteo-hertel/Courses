# Uses python3
import sys

def gcd(a, b):

    if (b == 0):
        return a;

    prime = a%b;
    return gcd(b, prime)

def lcm(a, b):
    #lcm  = ((a*b)/ gdc)
    return (a*b) // gcd(a, b)


input = input()
a, b = map(int, input.split())
print(lcm(a, b))

