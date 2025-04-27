# 1) თქვენი სიტყვებით ახსენით თუ რაში გვჭირდება ფუნქციების გამოყენება პითონში.
# funqciis gamoyeneba imitom gvchirdeba python shi rom gavamartivot chveni kodi gavxadot advilad gasagebi da naklebad gadavtvirtot kodi anu shedarebit mokle da patara kodi davwerot done




# 2) გადახედეთ რესურსს პითონში ფუნქციების შესახებ: done



# 3) შექმენით ფუნქცია სახელწოდებით double_values რომელიც არგუმენტად მიიღებს სიას და დააბრუნებს ახალ სიას, სადაც თითოეული ელემენტი გაორმაგებული იქნება.
# def double_values (num):
#     return num * 2 
  
# print(double_values( 5))
# print(double_values( 4))
# print(double_values( 6))
# print(double_values( 8)) done







# 4) შექმენით ფუნქცია, რომელსაც არგუმენტად გადასცემთ სიას (ჩათვალეთ, რომ სიაში ინახება Integer-ი რიცხვები). ამ ფუნქციამ საბოლოოდ უნდა დააბრუნოს სიიდან მხოლოდ ლუწი რიცხვები.
# def list (num):
#     return num

# print(list(12))
# print(list(6))
# print(list(2))
# print(list(7))
# print(list(3))






# 5) შექმენით ფუნქცია და გადაეცით არგუმენტად სია. ფუნქციამ უნდა დააბრუნოს ახალი სია, რომლის თითოეული ელემენტიც უნდა იყოს კვადრატში აყვანილი.

# 6) შექმენით ფუნქცია და არგუმენტად გადაეცით String-ი. ფუნქციამ ეგრედწოდებულად უნდა "გაფილტროს" ეს სტრინგი თანხმოვანი ასოებისგან და მხოლოდ დააბრუნოს ის ხმოვანი ასოები, რომლებსაც ეს სტრინგი შეიცავს.
# def filter (word):
#     vowels = "aeiou"
#     result=""
#     for char in word:
#         if char in word:
#             result += char
#     return result





# filter ("Niko") done 



# 7) შექმენით ფუნქცია და გადაეცით რიცხვების სია არგუმენტად. ფუნქციის მიზანი იქნება, რომ სიიდან დააბრუნოს მხოლოდ უარყოფითი რიცხვები.
# def positive(numbers):
#     negative_numbers=[]
#     for number in numbers:
#         if number <0:
#             negative_numbers.append(number)
#             return negative_numbers
# positive([1,4,5,6,7,-9,-7,65,-9,-23,19]) done


# 8) წინა დავალების ანალოგიურად შექმენით ფუნქცია და გადაეცით რიცხვების სია არგუმენტად. ამ შემთხვევაში ფუნქციის მიზანი იქნება, რომ სიიდან დააბრუნოს მხოლოდ დადებითი რიცხვები.
# def positive(numbers):
#     negative_numbers=[]
#     for number in numbers:
#         if number >0:
#             negative_numbers.append(number)
#             return negative_numbers
#     positive([11,4,5,14,88,-1,-3,68,-2,-21,29]) done
    


# 9) შექმენით ფუნქცია და მას პარამეტრად  გადაეცით ერთი რიცხვი. ფუნქციამ უნდა დააბრუნოს ეს რიცხვი აყანილი კვადრატში და გამრავლებული 10-ზე. (ხარისხში აყვანის ოპერატორის შესახებ მოიძიეთ რესურსები, რათა გამოიყენოთ დავალებაში.)
# def number (num):
#     num=2
#     return (num ** 2) *10






# 10) შექმენით ფუნქცია. მას გადაეცით ორი პარამეტრი: x და y რიცხვები. ფუნქციამ უნდა დააბრუნოს x რიცხვი აყვანილი y ხარისხში. 
# def num (x,y):
#     return x**y


# print(num(5,7))


# შეასრულეთ Codewars-ები წინა დავალებებიდან + რამდენიმე ახალი ამოცანა:

# 11) https://www.codewars.com/kata/565f5825379664a26b00007c/train/python
# def get_size(w,h,d):
#     v=w*h*d
#     surfacearea= 2 * (w*h+w*d+h*d)
#     return [surfacearea,v]






# 12) https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python
# def repeat_str(repeat, string):
#     return repeat * string



# 13) https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/python
# def maps(a):
#     rezoultlist=[]
#     for i in a:
#         rezoultlist.append(i*2)
#     return rezoultlist 



# 14) https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/python
# def plural(n):
#     return n != 1



# 15) https://www.codewars.com/kata/511f0fe64ae8683297000001/train/python


# websites.append("codewars")





# 16) https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/python
# def find_average(numbers):
#     if numbers == []:
#         return 0
    
#     return sum (numbers) / len (numbers)




# 17) https://www.codewars.com/kata/53369039d7ab3ac506000467/train/python
# def bool_to_word(boolean):
#     if boolean == True:
#         return "Yes"
#     else:
#         return "No"



# 18) https://www.codewars.com/kata/59441520102eaa25260000bf/train/python

# def unusual_five():
#     name="gijkj"
#     return len (name)


