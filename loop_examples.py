# Iterating through a dictionary
my_dict = {'name': 'Shraddha', 'age': 25, 'city': 'Bangalore'}
print("Iterating through a dictionary (key-value pairs):")
for key, value in my_dict.items():
    print(f"{key}: {value}")

# Iterating through a set
my_set = {100, 200, 300}
print("\nIterating through a set:")
for item in my_set:
    print(item)

# Nested loop for 2D list
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print("\nIterating through a 2D list (matrix):")
for row in matrix:
    for col in row:
        print(col, end=' ')
    print()
