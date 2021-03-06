# Uses python3
import sys

def optimal_weight(W, w):
    n = len(w)
    #inialize all the value (0,j)
    #inialize all the value (w,0)
    optimal_value = [[0 for i in range(n + 1)]  for j in range(W+1)]

    for i in range(1,n + 1): 
      for weight in range(1,W + 1):
        optimal_value[weight][i] = optimal_value[weight][i-1]
        #nth element weight
        Wi = w[i-1]
        if Wi <= weight:
          value = optimal_value[weight-Wi][i-1] + Wi
          if value > optimal_value[weight][i]:
            optimal_value[weight][i] = value

    return optimal_value[W][n]

if __name__ == '__main__':
    input = sys.stdin.read()
    W, n, *w = list(map(int, input.split()))
    print(optimal_weight(W, w))
