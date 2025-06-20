# 1) კომენტარების სახით ახსენით მოცემული კოდი
# def sort_array(source_array):
    # შევქმენით ცარიელი სია
#     odd_numbers = []

# შევქმენით ცარიელი სია
#     result = []

    # შეცქმენით ცარიელი ცვლადი
#     index = 0

    # გადავუარეთ for ციკლით source_array ს
#     for num in source_array:

        # გამოვიყენეთ if და გავუწერეთ თუ num % გაყოფისას ორზე არუდრის 2  მაგ შემთხვევაში შესრულდება ქვემოთ მოცემული append()
#         if num % 2 != 0:

            # აქ odd_numbers append() ით ჩავუმატეთ num
#             odd_numbers.append(num)

    # აქ sort() ით დავალაგეთ სია
#     odd_numbers.sort();

    # აქ for ით გადავუარეთ სიას
#     for num in source_array:

        # გამოვიყენეთ if
#         if num % 2 != 0:

            # აქ result append ით ჩავუმატეთ ჩვენი სია
#             result.append(odd_numbers[index])
#             index += 1
#         else:
            # აქ კი სხვა დანარჩენ შემთხვევაში ჩაემატება num
#             result.append(num)
    
    # აქ კი დავაბრუნებინეთ result
#     return result

# 2) შეასრულეთ Codewars - ები

# 7kyu
# https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/python

# def check_exam(arr1,arr2):
#     score = 0
#     for i in range (len(arr1)):
#         if arr1 [i] == arr2 [i]:
#             score += 4
#         elif arr2 [i] == "":
#             score += 0
#         elif arr1 [i] != arr2 [i]:
#             score -= 1
#     if score <0:
#         return 0
#     else:
#         return score
                
        
  


# https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb/train/python

# def find_missing_numbers(arr):
#     result = []
#     if arr == []:
#         return []
#     for i in range (arr[0],arr[-1]):
#         if i not in arr:
#             result.append(i)
#     return result
# https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python
# def to_jaden_case(string):
#     result = []
#     splited = string.split(" ")
#     for i in splited:
#         result.append(i.capitalize())
#     return " ".join(result)

# 6 kyu
# # https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python
# def duplicate_count(text):
#     count = 0
#     result = []
#     text=text.lower()
#     for i in text:
#         if i  not in result and text.count(i) > 1:
#             count += 1
#             result.append(i)
#     return len(result)


# https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python

# def likes(names):
#     count = 0
#     if len(names)==0:
#         return  "no one likes this"
#     elif len(names)==1:
#         return f"{names[0]} likes this"
#     elif len(names)==2:
#         return f"{names[0]} and {names[1]} like this"
#     elif len(names)==3:
#         return f"{names[0]}, {names[1]} and {names[2]} like this"
#     else:
#         count = len(names)-2
#         return f"{names[0]}, {names[1]} and {count} others like this"