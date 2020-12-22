import sys

from day1 import day1

data = []

cin = sys.stdin
for l in cin:
    data.append(int(l.split("\n")[0]))

day1(data)