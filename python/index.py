array = [1]
head = [1, 2, 1, 2, 1, 2]
new = []
for a in head:
    if a not in array:
        new.append(a)
print(new)
