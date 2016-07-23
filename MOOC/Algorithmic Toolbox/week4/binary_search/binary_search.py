# Uses python3
import sys
import math

def binary_search(a, x):
    left, right = 0, len(a) - 1
    return binarySearch(a, left, right, x)

def binarySearch(a, low, high, key):
    if high < low:
        return -1
    mid = math.floor(int(low) + (int(high)-int(low))/2)
    if(key == a[mid]):
        return mid
    elif key < a[mid]:
        return binarySearch(a, low, mid-1, key)
    else:
        return binarySearch(a, mid+1, high ,key)

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    m = data[n + 1]
    a = data[1 : n + 1]
    for x in data[n + 2:]:
        #replace with the call to binary_search when implemented
        print(binary_search(a, x), end = ' ')
