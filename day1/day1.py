def part1(data):
    for i in data:
        for j in data:
            if (i + j) == 2020:
                return i * j


def part2(data):
    for i in data:
        for j in data:
            for k in data:
                if (i + j + k) == 2020:
                    return i * j * k


def day1(data: str, printable: bool = 1):
    p1, p2 = part1(data), part2(data)
    if printable:
        print(p1, p2)
    return p1, p2