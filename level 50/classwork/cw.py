# 1)
# def sum_diagonals(matrix):
#     size = len(matrix);
#     sum = 0
#     n = size - 1;
    

#     for i in range(size):
#         sum += matrix[i][i]
#         sum += matrix[i][n]
#         n -= 1
        
#     return sum



# 2)def solve(arr):
#     for i in arr:
#         if -i not in arr:
#             return i

# 3)def seqlist(first, c, l):
#     result = []
#     for i in range(l):
#         result.append(first + i * c)
#     return result


# 4)def alphabet_position(text):
#     alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
#     result = ""
#     text = text.lower()
#     for i in text:
#         if i in alp:
#             num = alp.index(i) + 1
#             result += str(num) + " " 
#     return result[:-1]


# 5)def sort_array(source_array):
    # odd_numbers = []
    # result = []
    # index = 0
    
    # for i in source_array:
    #     if i % 2 != 0:
    #         odd_numbers.append(i)
    
    # odd_numbers.sort();
    
    # for i in source_array:
    #     if i % 2 != 0:
    #         result.append(odd_numbers[index])
    #         index += 1
    #     else:
    #         result.append(i)
    
    # return result
