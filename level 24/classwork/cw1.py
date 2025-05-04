# 7 kyu
# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python


# def accum(st):
#     st = st.lower()
#     result = []
    
#     for index in range(len(st)):
#         word=st[index] * (index + 1)
#         result.append(word.capitalize())
#     return "-".join(result)
# https://www.codewars.com/kata/559590633066759614000063/train/python


# def min_max(lst):
#     max_number= lst [0]
    
    
#     for number in lst:
#         if max_number < number:
#             max_number = number
            
#     min_number=lst[0]
    
    
#     for number in lst:
#         if min_number > number:
#             min_number = number


# https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/python


# def arithmetic(a, b, operator):
    
    
#     match operator:
#         case "add":
#             return a + b
#         case "subtract":
#             return a - b
#         case "multiply":
#             return a * b
#         case "divide":
#             return a / b


# https://www.codewars.com/kata/566fc12495810954b1000030/train/python


# def nb_dig(n, d):
    
#     numbers = []
#     count = 0
    
    
#     for number in range(n + 1):
#         numbers.append(str(number ** 2 ))
        
        
#     d = str(d)
        
#     for number in numbers:
#         count += number


# https://www.codewars.com/kata/511f11d355fe575d2c000001/train/python


# def two_oldest_ages(ages):
#     ages.sort()
#     return[ages[-2], ages[-1]]