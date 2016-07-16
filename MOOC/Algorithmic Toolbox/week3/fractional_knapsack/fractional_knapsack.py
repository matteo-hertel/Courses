# Uses python3
import sys

def get_optimal_value(capacity, weights, values):

    value = 0.
    used = 0.
    # write your code here
    
    computed = {}

    for i in range(0, len(weights)):
        computed[values[i]/ weights[i]] =  i

    ratioList = sorted(computed.keys(), reverse=True)

    for r in ratioList:
        w = float(weights[computed[r]])
        v = float(values[computed[r]])

        temp = float(capacity) - float(used)
        if temp < w:
            ratio = temp / w
            value += v* ratio
            used += w * ratio 
        else:
            used += w
            value += v
    return value


if __name__ == "__main__":
    data = list(map(int, sys.stdin.read().split()))
    n, capacity = data[0:2]
    values = data[2:(2 * n + 2):2]
    weights = data[3:(2 * n + 2):2]
    opt_value = get_optimal_value(capacity, weights, values)
    print("{:.10f}".format(opt_value))
