# Uses python3
import sys

mem = {}

def calculate(n):
    if n == 1:
        return 1, -1
    if mem.get(n) is not None:
        return mem[n]
    sequence = (calculate(n - 1)[0] + 1, n - 1)

    if n % 2 == 0:
        ret = calculate(n // 2)
        if sequence[0] > ret[0]:
            sequence = (ret[0] + 1, n // 2)

    if n % 3 == 0:
        ret = calculate(n // 3)
        if sequence[0] > ret[0]:
            sequence = (ret[0] + 1, n // 3)

    mem[n] = sequence
    return sequence

def solution(n):
    sequence = []
    while calculate(n)[1] != -1:
        sequence.append(n)
        n = calculate(n)[1]
    sequence.append(1)
    sequence.reverse()
    return sequence;

def optimal_sequence(n):
    for i in range(1, n):
        calculate(i)[0]
    return solution(n)


input = sys.stdin.read()
n = int(input)

sequence = list(optimal_sequence(n))
print(len(sequence) - 1)
for x in sequence:
    print(x, end=' ')
