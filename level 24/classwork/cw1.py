# 7 kyu
# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python

# def accum(st):
#     str = ""
#     count = 0
#     for i in st:
#         str+=i.upper()+i.lower() * count + "-"
#         count+=1
        
#     return str[0:-1]
# 7 kyu
# https://www.codewars.com/kata/559590633066759614000063/train/python
# def min_max(lst):
#     min=lst[0]
#     max=lst[0]
#     result=[]
#     for i in lst:
#         if max < i:
#             max=i
            
#         elif min> i:
#             min=i
#     result.append(min)
#     result.append(max)
#     return result

# https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/python
# def arithmetic(a, b, operator):
#     if operator == "add":
#         return a+b 
#     elif operator=="subtract":
#         return a-b
#     elif operator=="multiply":
#         return a*b
#     else:
#         return a/b
# https://www.codewars.com/kata/566fc12495810954b1000030/train/python

# def nb_dig(n, d):
#     num = []
#     for i in range(0,n+1):
#         num.append(i**2)
#     num = str(num)
#     return num.count(str(d))

# https://www.codewars.com/kata/511f11d355fe575d2c000001/train/python
# def two_oldest_ages(ages):

#     max1 = 0

#     max2 = 0 



#     for i in ages:

#         if i > max1:

#             max2 =max1

#             max1 = i

#         elif i > max2:

#             max2 = i

#     return [max2,max1]
 