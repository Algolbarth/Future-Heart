import os

path = "./src/lib/Item/Data"

nb_item = 0
f = open(path + "/index.ts", "w")
content = ""

array = []
for file in os.listdir(path):
    if "index.ts" not in file:
        array.append(file.replace(".ts", ""))

array.sort()

for file in array:
    nb_item += 1

    if nb_item > 1:
        content += "\n"

    content += f"export * from './{file}';"

f.write(content)
f.close()

print("Items: ",nb_item)