# 8 kyu
# https://www.codewars.com/kata/5966e33c4e686b508700002d/train/python
# def sum_str(a, b):
#     return  str(int("0" + a) + int("0" + b))


# https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/python def uni_total(s):
#     result=0
#     for i in s:
#         result+=ord(i)
#     return result
# (ord - ფუნქციაზე გადახედეთ შემდეგ რესურს https://www.w3schools.com/python/ref_func_ord.asp)

# 7 kyu
# https://www.codewars.com/kata/52f3149496de55aded000410/train/python
# def sum_digits(number):
#     sum=0
#     for i in str(number):
#         if i.isdigit():
#             sum+=int(i)
#     return sum


# https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/python
# def password(st):
#     if len(st) <8:
#         return False
#     else:
#         upper=0
#         lower=0
#         number=0
#         for i in st:
#             if i.islower():
#                 lower+=1
#             elif i.isupper():
#                 upper+=1
#             elif i.isdigit():
#                 number+=1
#         if upper >=1 and lower >=1 and number >=1:
#             return True
#         else:
#             return False
            
# https://www.codewars.com/kata/56582133c932d8239900002e/train/python
# def most_frequent_item_count(collection):
#     hight=0
#     for i in collection:
#         if collection.count(i)> hight:
#             hight=collection.count(i)
#     return hight

# 6 kyu
# https://www.codewars.com/kata/5264d2b162488dc400000001/train/python
# def spin_words(sentence):
#     splited=sentence.split()
#     list=[]
#     for i in splited:
#         if len(i) >=5:
#             list.append(i[::-1])
#         else:
#             list.append(i)
#     return" ".join(list)
# https://www.codewars.com/kata/53697be005f803751e0015aa/train/python
# def encode(st):
#     res=""
#     for char in st:
#         if char=="a":
#             res+="1"
#         elif char=="e":
#             res+="2"
#         elif char=="i":
#             res+="3"
#         elif char=="o":
#             res+="4"
#         elif char=="u":
#             res+="5"
#         else:
#             res+=char
#     return res
# def decode(st):
#     res1=""
#     for char in st:
#         if char=="1":
#             res1+="a"
#         elif char=="2":
#             res1+="e"
#         elif char=="3":
#             res1+="i"
#         elif char=="4":
#             res1+="o"
#         elif char=="5":
#             res1+="u"
#         else:
#             res1+=char
#     return res1