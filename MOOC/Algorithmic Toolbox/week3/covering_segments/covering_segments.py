# Uses python3
import sys
from collections import namedtuple

Segment = namedtuple('Segment', 'start end')

def optimal_points(segments):
    points = []
    #write your code here

    start = segments[0][0]
    end = segments[0][1]

    sortedStart = sorted(segments, key=lambda x: x[0])
    sortedEnd = sorted(segments, key=lambda x: x[1])

    threshold = sortedStart[0][0] - 1
    for i in range(len(sortedEnd)-1):
        start, end = sortedEnd[i]
        if start > threshold:
            points.append(end)
            threshold = end

    if points[len(points) - 1] < sortedEnd[len(sortedEnd) - 1][0]:
        if sortedEnd:
            points.append(sortedEnd[len(sortedEnd) - 1][0])
    return points

#segments = [Segment(4,7),Segment(1,3),Segment(2,5),Segment(5,6)]

if __name__ == '__main__':
    input = sys.stdin.read()
    n, *data = map(int, input.split())
    segments = list(map(lambda x: Segment(x[0], x[1]), zip(data[::2], data[1::2])))
    points = optimal_points(segments)
    print(len(points))
    for p in points:
        print(p, end=' ')
