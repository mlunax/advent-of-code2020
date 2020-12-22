class PasswordRow:
    min: int
    max: int
    char: str
    password: str

    def __init__(self, data: str):
        left = data.split(":")[0]
        right = data.split(":")[1]
        # range
        ran = left.split()[0]
        self.char = left.split()[1]
        self.min = int(ran.split("-")[0])
        self.max = int(ran.split("-")[1])
        self.password = right.strip()


# array of passwordRow
def part1(passwordRows):
    v: int = 0
    for r in passwordRows:
        if r.min <= r.password.count(r.char) <= r.max:
            v = v + 1
    return v


def part2(passwordRows):
    v: int = 0
    for r in passwordRows:
        if (
            r.password[r.min - 1] is r.char and r.password[r.max - 1] is not r.char
        ) or (r.password[r.min - 1] is not r.char and r.password[r.max - 1] is r.char):
            v += 1
    return v


def day2(data: str, printable: bool = 1):
    passwordRows = []
    for i in data:
        passwordRows.append(PasswordRow(i))
    p1, p2 = part1(passwordRows), part2(passwordRows)
    if printable:
        print(p1, p2)
    return p1, p2