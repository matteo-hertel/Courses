# Uses python3
import sys

def optimal_sequence(n):
    sequence = []
    if n == 0:
        sequence.append(1)
        return sequence

    count = 1  
    sequence.append(count)  
    while n >= count:
        if n == count:
            break;

        if(count % 2 != 0):
            count += 1
            sequence.append(count)
            continue

        time3 = count * 3;
        print("time3:", time3)
        if time3 <= n:
            count = time3
            sequence.append(time3)
            continue

        time2 = count * 2;

        if time2 <= n:

            count = time2
            sequence.append(time2)
            continue

        break;
        count += 1
        sequence.append(count)
        # sequence.append(n)
        # if n % 3 == 0:
        #     n = n // 3
        # elif n % 2 == 0:
        #     n = n // 2
        # else:
        #     n = n - 1
    return sequence

#input = sys.stdin.read()
#n = int(input)
n = int(96234)
sequence = list(optimal_sequence(n))
print(len(sequence) - 1)
# for x in sequence:
#      print(x, end=' ')
