# Uses python3
import sys

def get_change(m):
    coins = [10, 5, 1]
    count = 0

    for i in coins:
        reminder = m % i
        count += m // i
        m = reminder

    return count

m = int(input())
print(get_change(m))
