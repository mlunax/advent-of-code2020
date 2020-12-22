import sys

from day2 import *

data = []

cin = sys.stdin
for l in cin:
    data.append(l.split("\n")[0])

day2(data)
